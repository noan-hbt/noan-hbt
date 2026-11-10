---
slug: orion
type: open-source
status: active
repo: noan-hbt/orion
language: Python
license: MIT
topics: [ai-agent, self-hosted, llm]
stack: [Python 3.12, Starlette, Playwright, self-hosted]
order: 1
site: true
profile: true
images:
  scene: planete
  under: orion
  spot: orion
  readme: orion
demo: chat
dates: { start: 2026-08-31, public: 2026-11-10 }
fr:
  name: Orion
  kicker: "Open source · agent IA personnel"
  tagline: "Un agent personnel toujours actif, sur ton serveur, qui parle en premier quand ça compte et n’agit qu’avec ton accord."
  card: "Un agent personnel qui tourne sur ton serveur. Il se souvient, te prévient avant les échéances, et ne fait rien sans ton accord."
  line: mon agent perso
  tagpin: "rappel · passeport dans 41 j"
  links:
    - { label: Voir le code, url: https://github.com/noan-hbt/orion, primary: true }
    - { label: "Guide d’installation", url: https://github.com/noan-hbt/orion#deploy-on-a-server }
en:
  name: Orion
  kicker: "Open source · personal AI agent"
  tagline: An always-on personal agent on your own server. It speaks first when it matters and only acts with your consent.
  card: A personal agent that runs on your server. It remembers, warns you before deadlines, and does nothing without your consent.
  line: my own agent
  tagpin: "reminder · passport in 41 d"
  links:
    - { label: See the code, url: https://github.com/noan-hbt/orion, primary: true }
    - { label: Install guide, url: https://github.com/noan-hbt/orion#deploy-on-a-server }
---

## FR

### En bref

Les assistants attendent qu’on leur parle. **Orion, lui, suit ta vie** : il se souvient de ce que tu lui dis, surveille tes échéances et prend la parole avant que ça devienne urgent.

Il ne t’écrit que quand ça vaut ton attention, et **chaque action qui sort de ton serveur attend ton oui** : un mail, un message, un rendez-vous.

### Ce que ça fait

- **Il se souvient** : Des faits datés et sourcés, jamais écrasés, relus chaque nuit.
- **Il parle en premier, avec retenue** : Briefing du matin, alertes avant une échéance, relances. Douze messages par jour au maximum.
- **Rien ne sort sans ton oui** : Un gardien séparé garde les secrets et vérifie chaque mail, message ou commande.
- **Il s’entend avec les autres Orion** : Deux Orion calent un rendez-vous en ne partageant que tes créneaux libres.
- **Il grandit par modules** : Agenda, mail, navigateur, domotique : le cœur reste petit.

### Sous le capot

Toi (iPhone · Telegram) → **Agent** (mémoire · initiative) → Gardien (secrets · validation) → Le monde (mail · agenda · web)

```text
journal    tout ce qui arrive, ajouté, jamais modifié
mémoire    reconstruite depuis le journal, à tout moment
contenu    chaque info garde sa source et son niveau de confiance
sorties    une boîte d’envoi journalisée, rien en direct
```

Chaque choix d’architecture est écrit et justifié dans le dépôt : près de 300 décisions à ce jour.

### Journal

- 10 nov. 2026 · Code ouvert sous licence MIT ←
- nov. 2026 · Refonte multi-agents lancée
- 31 août 2026 · Premier commit

### Propriétés

- Statut : Actif (statut)
- Type : Open source
- Licence : MIT
- Langage : Python 3.12
- Tourne sur : Ton serveur (Debian, Ubuntu)
- Te parle via : App iPhone, Telegram, iMessage, téléphone

## EN

### In short

Assistants wait to be spoken to. **Orion follows your life**: it remembers what you tell it, watches your deadlines and speaks up before things get urgent.

It only writes when it is worth your attention, and **every action that leaves your server waits for your yes**: an email, a message, an appointment.

### What it does

- **It remembers** : Dated, sourced facts, never overwritten, reviewed every night.
- **It speaks first, with restraint** : Morning briefing, alerts before a deadline, follow-ups. Twelve messages a day at most.
- **Nothing leaves without your yes** : A separate guardian keeps the secrets and checks every email, message or command.
- **It gets along with other Orions** : Two Orions book a meeting by sharing only your free slots.
- **It grows through modules** : Calendar, mail, browser, smart home: the core stays small.

### Under the hood

You (iPhone · Telegram) → **Agent** (memory · initiative) → Guardian (secrets · approval) → The world (mail · calendar · web)

```text
journal    everything that happens, appended, never changed
memory     rebuilt from the journal, at any time
content    every fact keeps its source and trust level
outputs    a journaled outbox, nothing sent directly
```

Every architecture choice is written down and justified in the repo: close to 300 decisions so far.

### Log

- Nov 10, 2026 · Code released under MIT ←
- Nov 2026 · Multi-agent rebuild started
- Aug 31, 2026 · First commit

### Properties

- Status : Active (statut)
- Type : Open source
- License : MIT
- Language : Python 3.12
- Runs on : Your server (Debian, Ubuntu)
- Talks via : iPhone app, Telegram, iMessage, phone
