# Checklist : ajouter (ou mettre à jour) un projet

Dans l’ordre. Règles d’écriture et d’images : [`../STYLE.md`](../STYLE.md). Champs de la fiche :
[`../projects/README.md`](../projects/README.md).

## 1. La fiche (ce dépôt)

- [ ] Copier une fiche du même type (`projects/orion.md` pour de l’open source, `projects/sipp.md` pour
      une app) vers `projects/<slug>.md`.
- [ ] Remplir l’en-tête : `type`, `status`, `step` (apps), `repo`/`language`/`license`/`topics`
      (open source), `stack`, `order`, `site`, `profile`.
- [ ] Écrire les textes **en français**, puis en anglais (`fr` et `en`, même clés) : `name`, `kicker`,
      `tagline` (≤ 140), `card` (≤ 170), `line` (≤ 30), `tagpin` (≤ 30), liens ou `cta`.
- [ ] Corps : En bref (2 paragraphes), Ce que ça fait (4-5 lignes), Sous le capot, Journal, Propriétés,
      dans les deux langues.
- [ ] Relire contre `STYLE.md` §1 et §2 (pas d’école, tutoiement, pas de chiffres inventés).

## 2. Le dépôt GitHub (open source)

- [ ] Description = `en.tagline`, topics = `topics`, licence présente.
- [ ] README en anglais selon `STYLE.md` §6.

## 3. Les images (si `site: true`)

- [ ] Scène : ajouter une ligne à `portfolio-2/design/tools/web3-list.tsv`, lancer `web3.sh`, puis
      `riso.py` ; vérifier horizon à 80 %, gauche calme, une seule touche d’orange.
- [ ] Coupe du sol : `under.sh <slug> "<sujet>"`.
- [ ] Vignette : `spot.sh <slug> "<sujet>"`.
- [ ] Exporter en webp dans `portfolio-2/public/img/site/` (noms : `<scene>`, `under-<slug>`,
      `spot-<slug>`).
- [ ] Si `profile: true` : illustration `scripts/src/illus/<slug>.jpg` pour la carte du README.

## 4. Le site (`noan-hbt/portfolio-2`)

Suivre `portfolio-2/docs/MISE-A-JOUR.md` : créer `src/site/projects/<slug>.js`, l’ajouter dans
`src/site/content.js`, choisir ou écrire une démo, vérifier au navigateur, `npm run lint`,
`npm run build`.

## 5. Le README du profil (ce dépôt)

- [ ] Ajouter le projet dans `scripts/projects.json` (`text` = tagline anglaise, `stack`).
- [ ] Ajouter la ligne `<a href=…><img src="assets/project-<slug>.jpg" …></a>` dans `README.md`.
- [ ] `node scripts/build.mjs` (Playwright) pour régénérer les images.

## 6. Avant de publier

- [ ] Le nom, la tagline et le statut sont identiques sur la fiche, le site, le README du profil et la
      description GitHub.
- [ ] Pousser sur une branche, ouvrir une PR, fusionner en squash.
