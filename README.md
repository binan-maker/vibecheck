# Truth & Dare Bottle Prototype

A lightweight Expo prototype for a **digital bottle-spin Truth & Dare game** played in real life.

## App structure

- `app/(tabs)/_layout.tsx` uses `Tabs` with a visible bottom navbar (`Play`, `Settings`)
- `app/(tabs)/index.tsx` is the primary responsive gameplay screen
- `app/(tabs)/settings.tsx` is the Settings page (user manual + app version)
- `app/(tabs)/explore.tsx` is kept as a compatibility alias to Settings for easier merges
- Built for **Android only** (phone + tablet). iOS and web are planned for future versions

## What this prototype includes

- Mode selection (Friends, Couples, College, Team)
- Offline prompt engine (Truth / Dare)
- Random player selector (bottle-spin simulation)
- Product clarity content (system vs feature, pain solved, prototype roadmap)
- Settings page with user manual and app version details

## Why this exists

This MVP focuses on one core loop:

`choose mode → spin bottle → selected player gets Truth or Dare → next turn`

It solves awkward silence and boredom in in-person circles without backend/auth complexity.

## Run locally

```bash
npm install
npm run lint
npx expo start --android
```
