# Projets : une fiche par projet

Ce dossier est **la source de vérité** de tous les projets de Noan : le site
[noanherbeth.fr](https://noanherbeth.fr) (dépôt `noan-hbt/portfolio-2`) et le README du profil GitHub
(`scripts/projects.json`) doivent dire la même chose que ces fiches. On modifie ici d’abord, puis on
reporte (voir « Synchronisation » plus bas). Règles d’écriture et d’images : [`../STYLE.md`](../STYLE.md).
Ajouter un projet : [`../docs/NOUVEAU-PROJET.md`](../docs/NOUVEAU-PROJET.md).

Un fichier = `projects/<slug>.md`. Le `slug` est en minuscules avec des tirets, identique au nom du dépôt
GitHub quand il y en a un. Il sert aussi dans l’URL du site (`/projets/<slug>`, `/en/projects/<slug>`) :
**ne jamais le changer** une fois publié (les liens partagés casseraient).

## En-tête (front matter YAML)

| Champ | Obligatoire | Valeurs | Sert à |
| --- | --- | --- | --- |
| `slug` | oui | `orion` | nom du fichier, URL du site |
| `type` | oui | `open-source` ou `app` | chapitre du site (Open source / Apps), forme de la carte |
| `status` | oui | `active`, `beta`, `prototype`, `paused`, `archived` | pastille de statut |
| `step` | apps | `0` idée, `1` prototype, `2` bêta, `3` lancement | barre d’avancement de la carte |
| `repo` | open source | `noan-hbt/<nom>` | lien GitHub, étoiles et date de mise à jour (API GitHub) |
| `language`, `license` | open source | `Python`, `MIT`… | ligne de méta de la carte |
| `topics` | open source | 3 sujets GitHub max | pastilles de la carte, à garder égaux aux topics du dépôt |
| `stack` | oui | 2 à 4 éléments | carte du README du profil |
| `order` | oui | entier | ordre sur le site et dans le README |
| `site` | oui | `true` / `false` | affiché sur noanherbeth.fr |
| `profile` | oui | `true` / `false` | affiché dans le README du profil (open source seulement) |
| `images.scene` | si `site` | nom sans extension | paysage de la marche : `public/img/site/<scene>.webp` |
| `images.under` | si `site` | nom | coupe du sol de la fiche : `under-<under>.webp` |
| `images.spot` | si `site` | nom | vignette carrée : `spot-<spot>.webp` |
| `images.readme` | si `profile` | nom | illustration de carte du README : `scripts/src/illus/<readme>.jpg` |
| `images.flip_under` | non | `true` | retourne la coupe du sol si l’image chevauche le titre |
| `demo` | si `site` | `chat`, `term`, `discord`, `lesson`, `history` | démo de la fiche (composant React, texte dans le site) |
| `long_name` | non | `true` | nom long : titre de carte plus petit |
| `dates` | non | `{ start: AAAA-MM-JJ, public: AAAA-MM-JJ }` | journal |
| `fr`, `en` | oui | voir dessous | tous les textes, dans les deux langues |

Dans `fr` et `en` (même clés dans les deux) :

| Clé | Longueur | Où |
| --- | --- | --- |
| `name` | | titre |
| `kicker` | 2 morceaux séparés par ` · ` | petite ligne au-dessus du titre de la fiche ; le premier morceau sert d’étiquette |
| `tagline` | ≤ 140 caractères | sous le titre de la fiche, méta description, aperçu de lien |
| `card` | ≤ 170 caractères | texte de la carte sur la marche |
| `line` | ≤ 30 caractères | ce que dit la mascotte en arrivant |
| `tagpin` | ≤ 30 caractères | étiquette de verre posée dans le paysage |
| `platform`, `status`, `cta`, `cta_note` | apps | « Web · installable sur mobile », « Bêta », « Tester la bêta », phrase sous le champ e-mail |
| `links` | open source | `{ label, url, primary }` ; `primary: true` = bouton orange avec l’icône GitHub |

## Corps

Deux sections, `## FR` puis `## EN`, avec les mêmes sous-titres dans cet ordre :

1. `### En bref` / `### In short` : 2 paragraphes. `**gras**` pour l’idée clé, `` `code` `` pour un nom
   de fonction ou une commande. Rien d’autre comme mise en forme.
2. `### Ce que ça fait` / `### What it does` : 4 ou 5 lignes `- **Titre** : une phrase.`
3. `### Sous le capot` / `### Under the hood` : un ou plusieurs blocs, au choix :
   - une chaîne `A (détail) → **B** (détail) → C (détail)` (en gras = le projet lui-même ; `⇄` si ça va
     dans les deux sens) ;
   - un bloc ```` ```text ```` (commandes, ou `mot-clé   explication` alignés) ;
   - une liste numérotée `1. Étape · détail` (pipeline) ;
   - une phrase seule.
4. `### Journal` / `### Log` : `- date · ce qui s’est passé`, du plus récent au plus ancien ; `←` marque
   l’étape actuelle. Dates FR « 10 nov. 2026 », EN « Nov 10, 2026 ».
5. `### Propriétés` / `### Properties` : `- Clé : valeur`, 4 à 6 lignes. Le statut s’écrit
   `Actif (statut)` pour être rendu en pastille.

La démo de la fiche (« En vrai ») n’est pas décrite ici : c’est du code, dans le site
(`src/site/components/Demos.jsx`, textes dans `src/site/projects/<slug>.js`, clé `demoText`).
Une démo doit montrer un **vrai cas** d’usage ; un exemple inventé doit être signalé comme tel.

## Synchronisation

Pour l’instant, la synchronisation est **manuelle** :

- Site : `portfolio-2/src/site/projects/<slug>.js` reprend ces champs un pour un (mêmes noms en
  camelCase : `flip_under` → `flipUnder`, `cta_note` → `ctaNote`, `long_name` → `long`, `status` (texte)
  → `statusText`). Le corps devient `brief`, `features`, `under`, `journal`, `props`. Guide :
  `portfolio-2/docs/MISE-A-JOUR.md`.
- README du profil : `scripts/projects.json` (`slug`, `repo`, `name`, `text` = `en.tagline` raccourcie,
  `stack`), puis `node scripts/build.mjs`.

Prévu : un script qui lit ces fiches et écrit les deux à la fois (voir `NOTES-SESSION.md`).
