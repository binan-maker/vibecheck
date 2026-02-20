# Truth & Dare Bottle Prototype

A lightweight Expo prototype for a **digital bottle-spin Truth & Dare game** played in real life.

## Conflict-resolved app structure

- `app/(tabs)/_layout.tsx` now uses `Slot` (no tab bar, no visible navigation)
- `app/(tabs)/index.tsx` is the single playable responsive screen
- Layout is built to work across **Android, iOS, and Web** with responsive behavior for phone, tablet, desktop, and TV-sized displays

## What this prototype includes

- Mode selection (Friends, Couples, College, Team)
- Offline prompt engine (Truth / Dare)
- Random player selector (bottle-spin simulation)
- Product clarity blocks (system vs features, pain solved, roadmap)

## Core loop

`choose mode → spin bottle → selected player gets Truth or Dare → next turn`

## Run locally

```bash
npm install
npm run lint
npx expo start
```
