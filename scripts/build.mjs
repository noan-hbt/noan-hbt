// Génère les images du README de profil (bandeau, titres, cartes projets).
// Usage : node scripts/build.mjs   (nécessite Playwright + Chromium)
import { createRequire } from 'node:module';
import { readFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const { chromium } = createRequire(import.meta.url)('playwright');

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'assets');
mkdirSync(out, { recursive: true });

const hero = readFileSync(join(root, 'scripts/src/accueil.webp')).toString('base64');
const projects = JSON.parse(readFileSync(join(root, 'scripts/projects.json'), 'utf8'));

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;600&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { background: #000; }
  body { color: #efe9da; font-family: Archivo, system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
  .anton { font-family: Anton, Impact, sans-serif; text-transform: uppercase; font-weight: 400; }
  .muted { color: #b9b4a6; }
  .frame { position: relative; overflow: hidden; background: #000; }

  .banner { width: 1280px; height: 580px; }
  .banner img { position: absolute; right: -40px; top: -40px; width: 1100px; opacity: .95; }
  .banner .shade { position: absolute; inset: 0;
    background: linear-gradient(90deg, #000 0%, #000 30%, rgba(0,0,0,.55) 52%, rgba(0,0,0,0) 75%),
                linear-gradient(0deg, #000 0%, rgba(0,0,0,0) 28%); }
  .banner .txt { position: absolute; left: 52px; top: 44px; }
  .banner h1 { font-size: 168px; line-height: .96; letter-spacing: -1px; }
  .banner p { margin-top: 26px; font-size: 25px; line-height: 1.3; font-weight: 500; width: 470px; }
  .banner .tags { position: absolute; left: 52px; bottom: 32px; font-size: 20px; }
  .banner .tags span { margin-right: 28px; }

  .title { width: 1280px; height: 132px; border-top: 1px solid rgba(239,233,218,.22); padding: 26px 52px 0; }
  .title h2 { font-size: 78px; line-height: 1; }
  .title .n { position: absolute; right: 52px; top: 60px; font-size: 20px; }

  .card { height: 268px; padding: 26px 30px; border: 1px solid rgba(239,233,218,.22); }
  .card.half { width: 632px; }
  .card.full { width: 1280px; height: 300px; padding: 30px 52px; }
  .card .idx { font-size: 19px; }
  .card h3 { font-size: 58px; line-height: 1.05; margin-top: 6px; }
  .card.full h3 { font-size: 84px; }
  .card p { font-size: 23px; line-height: 1.35; margin-top: 10px; }
  .card.full p { font-size: 25px; max-width: 1000px; }
  .card .stack { position: absolute; left: 30px; bottom: 22px; font-size: 19px; }
  .card.full .stack { left: 52px; }
  .card .arrow { position: absolute; right: 30px; top: 24px; font-size: 19px; }
  .card.full .arrow { right: 52px; }

  .foot { width: 1280px; height: 64px; border-top: 1px solid rgba(239,233,218,.22); padding: 20px 52px 0; font-size: 19px; }
  .foot .r { position: absolute; right: 52px; top: 20px; }
`;

const pad = (i) => String(i + 1).padStart(2, '0');
const card = (p, i) => `
  <div class="frame card ${p.full ? 'full' : 'half'}" id="p-${p.slug}">
    <div class="idx muted">${pad(i)}</div>
    <div class="arrow muted">[dépôt]</div>
    <h3 class="anton">${p.name}</h3>
    <p>${p.text}</p>
    <div class="stack muted">${p.stack.join(' · ')}</div>
  </div>`;

const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>${css}</style></head><body>
  <div class="frame banner" id="banner">
    <img src="data:image/webp;base64,${hero}" alt="">
    <div class="shade"></div>
    <div class="txt">
      <h1 class="anton">Noan<br>Herbeth</h1>
      <p>BTS SIO, option SISR, en alternance chez MOSS. Session 2025-2027, H3 Hitema, Paris.</p>
    </div>
    <div class="tags muted"><span>Systèmes &amp; réseaux</span><span>Agents IA</span><span>Outils Roblox</span></div>
  </div>
  <div class="frame title" id="t-projets"><h2 class="anton">Projets</h2><div class="n muted">${projects.length} dépôts publics</div></div>
  <div class="frame title" id="t-outils"><h2 class="anton">Outils</h2></div>
  <div class="frame title" id="t-contact"><h2 class="anton">Contact</h2></div>
  ${projects.map(card).join('')}
  <div class="frame foot" id="foot"><span>Noan HERBETH</span><span class="r muted">BTS SIO · SISR · 2025–2027</span></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 2 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);

const shot = (id, file, opts = {}) => page.locator('#' + id).screenshot({ path: join(out, file), ...opts });
await shot('banner', 'banner.jpg', { type: 'jpeg', quality: 86 });
for (const t of ['projets', 'outils', 'contact']) await shot('t-' + t, `titre-${t}.png`);
for (const p of projects) await shot('p-' + p.slug, `projet-${p.slug}.png`);
await shot('foot', 'pied.png');
await browser.close();
console.log('ok →', out);
