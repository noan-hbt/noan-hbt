// Génère les images du README de profil (bandeau, titres, cartes projets, pied de page).
// Usage : node scripts/build.mjs   (nécessite Playwright + Chromium)
// Les illustrations sources sont dans scripts/src/illus/<slug>.jpg, les textes dans scripts/projects.json.
import { createRequire } from 'node:module';
import { readFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const { chromium } = createRequire(import.meta.url)('playwright');

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'assets');
mkdirSync(out, { recursive: true });

const illus = (slug) => `data:image/jpeg;base64,${readFileSync(join(root, `scripts/src/illus/${slug}.jpg`)).toString('base64')}`;
const projects = JSON.parse(readFileSync(join(root, 'scripts/projects.json'), 'utf8'));

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;600&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { background: #000; }
  body { color: #efe9da; font-family: Archivo, system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
  .anton { font-family: Anton, Impact, sans-serif; text-transform: uppercase; font-weight: 400; }
  .muted { color: #b9b4a6; }
  .frame { position: relative; overflow: hidden; background: #000; width: 1280px; }
  .art { position: absolute; top: 0; right: 0; height: 100%; }
  .art img { height: 100%; display: block; }
  .shade { position: absolute; inset: 0; }

  .banner { height: 600px; }
  .banner .shade { background:
      linear-gradient(90deg, #000 0%, #000 22%, rgba(0,0,0,.6) 42%, rgba(0,0,0,0) 62%),
      linear-gradient(0deg, #000 0%, rgba(0,0,0,0) 22%); }
  .banner .txt { position: absolute; left: 52px; top: 52px; }
  .banner h1 { font-size: 168px; line-height: .96; letter-spacing: -1px; }
  .banner p { margin-top: 28px; font-size: 26px; line-height: 1.3; font-weight: 500; width: 480px; }
  .banner .tags { position: absolute; left: 52px; bottom: 36px; font-size: 20px; }
  .banner .tags span { margin-right: 28px; }

  .title { height: 132px; border-top: 1px solid rgba(239,233,218,.22); padding: 26px 52px 0; }
  .title h2 { font-size: 78px; line-height: 1; }
  .title .n { position: absolute; right: 52px; top: 60px; font-size: 20px; }

  .card { height: 380px; border-top: 1px solid rgba(239,233,218,.22); }
  .card .shade { background:
      linear-gradient(90deg, #000 0%, #000 30%, rgba(0,0,0,.65) 46%, rgba(0,0,0,0) 66%),
      linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0) 30%); }
  .card .txt { position: absolute; left: 52px; top: 40px; width: 560px; }
  .card .idx { font-size: 19px; }
  .card h3 { font-size: 92px; line-height: 1.02; margin-top: 8px; white-space: nowrap; }
  .card p { font-size: 24px; line-height: 1.38; margin-top: 14px; }
  .card .stack { position: absolute; left: 52px; bottom: 34px; font-size: 19px; }
  .card .arrow { position: absolute; right: 40px; bottom: 32px; font-size: 19px; }

  .foot { height: 64px; border-top: 1px solid rgba(239,233,218,.22); padding: 20px 52px 0; font-size: 19px; }
  .foot .r { position: absolute; right: 52px; top: 20px; }
`;

const pad = (i) => String(i + 1).padStart(2, '0');
const card = (p, i) => `
  <div class="frame card" id="p-${p.slug}">
    <div class="art"><img src="${illus(p.slug)}" alt=""></div>
    <div class="shade"></div>
    <div class="txt">
      <div class="idx muted">${pad(i)}</div>
      <h3 class="anton">${p.name}</h3>
      <p>${p.text}</p>
    </div>
    <div class="stack muted">${p.stack.join(' · ')}</div>
    <div class="arrow">[voir le dépôt]</div>
  </div>`;

const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>${css}</style></head><body>
  <div class="frame banner" id="banner">
    <div class="art"><img src="${illus('banner')}" alt=""></div>
    <div class="shade"></div>
    <div class="txt">
      <h1 class="anton">Noan<br>Herbeth</h1>
      <p>Je construis des agents IA et les outils dont ils ont besoin.</p>
    </div>
    <div class="tags muted"><span>Agents IA</span><span>Outils pour développeurs</span><span>Open source</span></div>
  </div>
  <div class="frame title" id="t-projets"><h2 class="anton">Projets</h2><div class="n muted">${projects.length} dépôts publics</div></div>
  <div class="frame title" id="t-outils"><h2 class="anton">Outils</h2></div>
  ${projects.map(card).join('')}
  <div class="frame foot" id="foot"><span>Noan HERBETH</span><span class="r muted">github.com/noan-hbt</span></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 2 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
// Titres longs : on réduit la police jusqu'à tenir sur une ligne dans la colonne de texte.
await page.evaluate(() => {
  for (const h of document.querySelectorAll('.card h3')) {
    let size = 92;
    while (h.scrollWidth > 600 && size > 40) h.style.fontSize = `${(size -= 2)}px`;
  }
});

const shot = (id, file, opts = {}) => page.locator('#' + id).screenshot({ path: join(out, file), ...opts });
const jpeg = { type: 'jpeg', quality: 84 };
await shot('banner', 'banner.jpg', jpeg);
for (const t of ['projets', 'outils']) await shot('t-' + t, `titre-${t}.png`);
for (const p of projects) await shot('p-' + p.slug, `projet-${p.slug}.jpg`, jpeg);
await shot('foot', 'pied.png');
await browser.close();
console.log('ok →', out);
