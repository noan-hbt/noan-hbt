---
slug: keewie
type: app
status: prototype
step: 1                    # 0 idée · 1 prototype · 2 bêta · 3 lancement
stack: [Tauri 2, React 19, Rust]
order: 5
site: true
profile: false
images:
  scene: bureau
  under: keewie
  spot: keewie
demo: history
fr:
  name: Keewie
  kicker: "App · code privé"
  tagline: "Un studio de création Roblox où chaque modification est une transaction qu’on peut annuler."
  card: "Un studio de création Roblox sur ton ordinateur, où chaque modification s’annule. L’IA propose, tu valides."
  line: "tout est réversible ici"
  tagpin: "⌘Z sur tout le jeu"
  platform: "Ordinateur · Mac et Windows"
  status: Prototype
  cta: "Me prévenir"
  cta_note: "Un e-mail quand la bêta ouvre."
en:
  name: Keewie
  kicker: "App · private code"
  tagline: A Roblox creation studio where every change is a transaction you can undo.
  card: A Roblox creation studio on your computer, where every change can be undone. The AI suggests, you approve.
  line: everything is undoable here
  tagpin: "⌘Z on the whole game"
  platform: "Desktop · Mac and Windows"
  status: Prototype
  cta: Notify me
  cta_note: One email when the beta opens.
---

## FR

### En bref

Keewie ouvre ton jeu Roblox comme un projet sur ton ordinateur. Toi, Studio et les agents IA modifiez le même jeu, mais **personne n’y touche directement** : chaque changement est une transaction, qu’on relit et qu’on annule.

L’IA propose, **tu valides**. Rien n’entre dans ton jeu sans preuve que ça marche. Essaie d’annuler :

### Ce que ça fait

- **Tout est réversible** : Chaque opération a son inverse ; l’historique se rejoue.
- **L’IA propose, tu valides** : Un modèle n’est jamais le seul juge de ce qui entre dans ton jeu.
- **Explorateur et propriétés** : Sélection multiple, éditeurs typés, détail de l’historique.
- **Compatible Rojo** : Un .rbxl s’importe en projet, synchronisé avec Studio.

### Sous le capot

```text
interface   Tauri 2 · React 19
cœur        Rust · dom · project · history · bridge · api
historique  journal SQLite, annuler et rétablir
Studio      Rojo 7 + plugin maison
```

### Journal

- nov. 2026 · Phase 1 : finitions de l’éditeur ←
- nov. 2026 · Phase 0 : fondations

### Propriétés

- Statut : Prototype (statut)
- Type : App, code privé
- Plateforme : Mac et Windows
- Interface : Tauri 2, React 19
- Cœur : Rust

## EN

### In short

Keewie opens your Roblox game as a project on your computer. You, Studio and AI agents edit the same game, but **nobody touches it directly**: every change is a transaction you can review and undo.

The AI suggests, **you approve**. Nothing enters your game without proof that it works. Try undoing:

### What it does

- **Everything is undoable** : Every operation has its inverse; history can be replayed.
- **The AI suggests, you approve** : A model is never the only judge of what goes into your game.
- **Explorer and properties** : Multi-select, typed editors, detailed history.
- **Rojo compatible** : A .rbxl imports as a project, synced with Studio.

### Under the hood

```text
ui        Tauri 2 · React 19
core      Rust · dom · project · history · bridge · api
history   SQLite journal, undo and redo
Studio    Rojo 7 + custom plugin
```

### Log

- Nov 2026 · Phase 1: editor polish ←
- Nov 2026 · Phase 0: foundations

### Properties

- Status : Prototype (statut)
- Type : App, private code
- Platform : Mac and Windows
- UI : Tauri 2, React 19
- Core : Rust
