# Style : les règles qui gardent le tout cohérent

S’applique au site [noanherbeth.fr](https://noanherbeth.fr), au README du profil GitHub, aux README des
dépôts publics et à LinkedIn/X. Si une règle gêne, on la change ici d’abord, puis partout.

## 1. Ce qu’on dit (et ce qu’on ne dit pas)

- On parle des **projets et de ce qu’ils font pour la personne qui les utilise**, pas de la techno pour
  elle-même.
- **Jamais** sur le site principal, GitHub, LinkedIn ou X : BTS, école, alternance, MOSS, notes, stages.
  Le portfolio scolaire vit à part sur **bts.noanherbeth.fr**, non indexé.
- Pas de récit centré sur « la nuit » ni « je code la nuit » (y compris dans les textes alternatifs des
  images).
- Pas de chiffres inventés : étoiles, dates, nombre de décisions viennent du dépôt ou de l’API GitHub.
- Une démo ou un exemple inventé est signalé comme tel (« Exemple d’alerte… ») tant qu’il n’est pas
  remplacé par un vrai cas.
- Statuts honnêtes : `Actif`, `Bêta`, `Prototype`, `En pause`, `Archivé`. Une app pas encore lancée ne dit
  pas « disponible ».

## 2. Comment on l’écrit

- **Français d’abord**, anglais ensuite : chaque texte existe dans les deux langues, même sens, même
  longueur à peu près. L’anglais n’est pas une traduction mot à mot.
- **Tutoiement** en français, « you » en anglais. On parle à la personne (« ton serveur », « tes scripts »).
- Phrases courtes. Un paragraphe = une idée. Pas de jargon sans explication ; un terme technique est
  suivi de ce qu’il change (« MCP : l’agent de code voit enfin la sortie de Studio »).
- Ponctuation française : espace avant `:` `?` `!`, apostrophe typographique `’`, guillemets « ».
  En anglais : pas d’espace avant `:`.
- Pas de points de suspension pour faire du suspense, pas d’emoji dans les textes (sauf la clochette des
  démos), pas de MAJUSCULES pour insister (le gras suffit, une fois par paragraphe).
- Boutons : un verbe, sans crochets `[ ]`, sans ⌘K. « Lire la fiche », « Continuer », « Voir le code »,
  « Tester la bêta », « Me prévenir », « Me contacter ».
- Longueurs (détail dans `projects/README.md`) : tagline ≤ 140 caractères, texte de carte ≤ 170,
  réplique de la mascotte ≤ 30.

## 3. À quoi ça ressemble

- **Direction : riso sur fond noir.** Encre crème `#efe9da`, gris `#b9b4a6` / `#7c786e`, accent orange
  fluo `#ff6c2f` (rare : une source de lumière, un bouton principal), vert `#6fe38f` seulement pour
  « actif / en ligne ».
- Polices : **Anton** (titres, en capitales), **Archivo** (texte), **JetBrains Mono** (étiquettes, méta).
- Verre façon iOS : flou, liseré clair, grain. La lueur qui suit la souris reste **très faible**.
- Pas de nouvelles couleurs, pas de dégradés colorés, pas de photos.

## 4. Images

Toutes les images sont générées avec Codex (compte ChatGPT du propriétaire), une par usage et par projet.
Scripts dans `portfolio-2/design/tools/` (ils écrivent dans `/home/user/branding/generated/<dossier>/`).

| Image | Format | Script | Fichier final |
| --- | --- | --- | --- |
| Scène de la marche | 21:9, 1914×822 | `web3.sh <scene> "<sujet>"` puis `riso.py in.png out.png 5` | `portfolio-2/public/img/site/<scene>.webp` (qualité 82) |
| Coupe du sol (fiche) | 21:9, 1914×822 | `under.sh <slug> "<sujet>"` | `public/img/site/under-<slug>.webp` |
| Vignette | 1:1, 600×600 | `spot.sh <slug> "<sujet>"` | `public/img/site/spot-<slug>.webp` |
| Carte du README | 3:2 environ | à la main | `noan-hbt/scripts/src/illus/<slug>.jpg` |

Règles des scènes (pour que la marche reste continue) :

- Ligne d’horizon plate vers **80 % de la hauteur**, jusqu’aux deux bords.
- Les **40 % de gauche restent calmes** : le texte des cartes est posé là.
- Sujet dans la moitié droite, avec 3 à 5 accessoires qui racontent le projet ; pas de personnage (la
  mascotte marche devant), pas de texte, pas de logo.
- Rendu final **toujours passé par `riso.py`** : trame de points, traits pleins, calque orange décalé,
  grain. Une image qui ressemble à une gravure (hachures fines, dégradés de gris) est refusée.
- L’orange ne touche qu’une ou deux sources de lumière.

Coupes du sol : surface fine en haut, le sujet juste dessous, moitié basse presque vide (le titre de la
fiche se pose dedans). Si le sujet chevauche le titre, `images.flip_under: true`.

## 5. La mascotte

- Sprites dans `portfolio-2/public/img/m/<nom>.webp` : **4 images de 68×72 en une bande de 272×72**,
  fond transparent, 4 encres seulement (`#3a3834`, `#706c62`, `#beb9aa`, `#efe9da`), orange autorisé
  sur l’écran du laptop.
- Génération : `portfolio-2/design/tools/sprite.sh <nom> "<animation>"` (liste dans `sprite-list.tsv`),
  puis découpe `slice-sprite.py <planche.png> <sortie.webp>` (échelle calée sur la largeur des cheveux,
  `x0.082` pour une pose allongée). Planches brutes gardées dans `portfolio-2/art/mascotte-anim/v2/`.
- Elle réagit à ce qui se passe, elle ne bavarde pas : une réplique à l’arrivée sur une étape, pas à
  chaque petit scroll. Respecte `prefers-reduced-motion` (cachée).

## 6. Dépôts GitHub publics

- Nom en minuscules avec tirets ; le même que le `slug` de la fiche.
- Description GitHub = `en.tagline` de la fiche. Topics = `topics` de la fiche (3 max). Licence MIT sauf
  raison écrite.
- README en anglais, dans cet ordre : une phrase (la tagline), ce que ça fait (liste courte), installer,
  utiliser, comment c’est construit, licence. Pas de badges en série.
- Pas de secret, de chemin personnel, d’adresse e-mail ni de mention scolaire dans le code ou
  l’historique.
- Un dépôt rendu public = une fiche `projects/<slug>.md` dans la foulée (voir `docs/NOUVEAU-PROJET.md`).
