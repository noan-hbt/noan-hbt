---
slug: vintify
type: open-source
status: active
repo: noan-hbt/vintify
language: Python
topics: [vinted, discord-bot, python]
stack: [Python, Discord, Railway]
order: 3
site: true
profile: true
images:
  scene: marche
  under: vintify
  spot: vintify
  readme: vintify
  flip_under: true
demo: discord
dates: { start: 2026-08-03 }
fr:
  name: Vintify
  kicker: "Open source · bot de veille"
  tagline: "Un client Python pour Vinted et un bot Discord qui surveille les annonces à ta place."
  card: "Un client Python pour Vinted et un bot Discord qui te prévient des nouvelles annonces et des baisses de prix sur ce que tu cherches."
  line: "une baisse de prix !"
  tagpin: "baisse de prix · −32 %"
  links:
    - { label: Voir le code, url: https://github.com/noan-hbt/vintify, primary: true }
en:
  name: Vintify
  kicker: "Open source · watch bot"
  tagline: A Python client for Vinted and a Discord bot that watches listings for you.
  card: A Python client for Vinted and a Discord bot that tells you about new listings and price drops on what you are looking for.
  line: "a price drop!"
  tagpin: "price drop · −32%"
  links:
    - { label: See the code, url: https://github.com/noan-hbt/vintify, primary: true }
---

## FR

### En bref

Tu cherches une pièce précise sur Vinted ? **Colle ta recherche**, Vintify surveille les nouvelles annonces et les baisses de prix, et **te prévient sur Discord** avant tout le monde.

Sous le bot, un vrai client Python pour l’API de Vinted, réutilisable dans tes propres scripts.

### Ce que ça fait

- **Une URL suffit** : Une recherche Vinted se transforme directement en filtres.
- **Alertes Discord** : Nouvelles annonces, baisses de prix, suivi d’articles précis.
- **Historique des prix** : Articles similaires et évolution du prix d’une annonce.
- **Profils vendeurs** : Avis, abonnés, données normalisées.

### Sous le capot

```text
from vintify import Vinted

v = Vinted()
for item in v.search("https://www.vinted.fr/catalog?search_text=carhartt"):
    print(item.title, item.price)
```

```text
session   amorçage et jeton CSRF automatiques
réseau    relances, attente progressive, pagination sans doublons
```

### Journal

- 10 nov. 2026 · Documentation en anglais ←
- 4 août 2026 · Bot Discord
- 3 août 2026 · Premier commit

### Propriétés

- Statut : Actif (statut)
- Type : Open source
- Langage : Python, typé
- Bot : Discord, sur Railway

## EN

### In short

Looking for a specific piece on Vinted? **Paste your search**, Vintify watches new listings and price drops, and **pings you on Discord** before anyone else.

Under the bot sits a real Python client for the Vinted API, reusable in your own scripts.

### What it does

- **One URL is enough** : A Vinted search turns straight into filters.
- **Discord alerts** : New listings, price drops, tracking of specific items.
- **Price history** : Similar items and how a listing’s price evolves.
- **Seller profiles** : Reviews, followers, normalised data.

### Under the hood

```text
from vintify import Vinted

v = Vinted()
for item in v.search("https://www.vinted.fr/catalog?search_text=carhartt"):
    print(item.title, item.price)
```

```text
session   automatic bootstrap and CSRF token
network   retries, backoff, pagination without duplicates
```

### Log

- Nov 10, 2026 · Docs in English ←
- Aug 4, 2026 · Discord bot
- Aug 3, 2026 · First commit

### Properties

- Status : Active (statut)
- Type : Open source
- Language : Python, typed
- Bot : Discord, on Railway
