---
slug: rbx-studio-plus
type: open-source
status: active
repo: noan-hbt/rbx-studio-plus
language: TypeScript
topics: [mcp, roblox, coding-agents]
stack: [TypeScript, Node 20, MCP]
order: 2
site: true
profile: true
images:
  scene: pont
  under: rbx
  spot: rbx
  readme: rbx-studio-plus
demo: term
long_name: true
dates: { public: 2026-11-08 }
fr:
  name: rbx-studio-plus
  kicker: "Open source · outil pour développeurs de jeux"
  tagline: Le serveur MCP pour Roblox Studio que les agents de code aiment vraiment utiliser.
  card: "Fais travailler Claude Code, Codex ou Cursor dans Roblox Studio : les scripts deviennent des fichiers, la sortie est lisible, un playtest tient en un appel."
  line: "ça relie Studio et les agents"
  tagpin: "Studio ↔ agent de code"
  links:
    - { label: Voir le code, url: https://github.com/noan-hbt/rbx-studio-plus, primary: true }
en:
  name: rbx-studio-plus
  kicker: "Open source · game developer tool"
  tagline: The Roblox Studio MCP server that coding agents actually enjoy using.
  card: "Put Claude Code, Codex or Cursor to work in Roblox Studio: scripts become files, output is readable, a playtest fits in one call."
  line: it links Studio and agents
  tagpin: "Studio ↔ coding agent"
  links:
    - { label: See the code, url: https://github.com/noan-hbt/rbx-studio-plus, primary: true }
---

## FR

### En bref

Le serveur MCP fourni avec Studio **perd les `print()`**, tronque les résultats à 100 Ko et renvoie des erreurs vagues. Un agent de code y travaille à l’aveugle.

rbx-studio-plus lui rend la vue : **tes scripts deviennent des fichiers**, la sortie est complète et typée, et un playtest complet tient en un seul appel.

### Ce que ça fait

- **`luau_run`** : Exécute du Luau et renvoie prints, avertissements, résultat typé et erreurs avec numéro de ligne.
- **`playtest`** : Lance le jeu, exécute du code, collecte les erreurs, arrête : PASS ou FAIL.
- **Scripts synchronisés** : Fichiers ↔ Studio dans les deux sens, au format Rojo, avec détection de conflits.
- **`console`** : Seulement les nouvelles lignes, filtrées par niveau ou par expression régulière.
- **Annuler, rétablir** : Chaque création, suppression ou modification passe par l’historique de Studio.

### Sous le capot

Agent de code (Claude Code · Codex) ⇄ **rbx-studio-plus** (serveur MCP · Node) ⇄ Plugin Studio (Luau) ⇄ Ton jeu (fichiers Rojo)

```text
$ npx rbx-studio-plus init
$ claude mcp add rbx -- npx rbx-studio-plus
```

### Journal

- 8 nov. 2026 · Première version publique ←

### Propriétés

- Statut : Actif (statut)
- Type : Open source
- Langage : TypeScript strict
- Runtime : Node ≥ 20
- Protocole : MCP
- Marche avec : Claude Code, Codex, Cursor, opencode

## EN

### In short

The MCP server that ships with Studio **loses `print()` output**, truncates results at 100 KB and returns vague errors. A coding agent works blind there.

rbx-studio-plus gives it its sight back: **your scripts become files**, output is complete and typed, and a full playtest fits in a single call.

### What it does

- **`luau_run`** : Runs Luau and returns prints, warnings, a typed result and errors with line numbers.
- **`playtest`** : Starts the game, runs code, collects errors, stops: PASS or FAIL.
- **Synced scripts** : Files ↔ Studio both ways, Rojo layout, with conflict detection.
- **`console`** : Only new lines, filtered by level or regular expression.
- **Undo, redo** : Every create, delete or change goes through Studio’s history.

### Under the hood

Coding agent (Claude Code · Codex) ⇄ **rbx-studio-plus** (MCP server · Node) ⇄ Studio plugin (Luau) ⇄ Your game (Rojo files)

```text
$ npx rbx-studio-plus init
$ claude mcp add rbx -- npx rbx-studio-plus
```

### Log

- Nov 8, 2026 · First public release ←

### Properties

- Status : Active (statut)
- Type : Open source
- Language : Strict TypeScript
- Runtime : Node ≥ 20
- Protocol : MCP
- Works with : Claude Code, Codex, Cursor, opencode
