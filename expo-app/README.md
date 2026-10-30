# MADARI — Expo application

The new React Native application lives in this directory. The existing root-level GitHub Pages version is intentionally preserved as a reference and is not overwritten.

## Stack
- React Native
- Expo SDK 54
- Expo Router
- TypeScript
- Android, iOS and Web targets

## Run locally
```bash
cd expo-app
npm install
npx expo start
```

Use the Expo terminal shortcuts to open Android, iOS or Web.

## Initial structure
- `app/`: routes and screens
- `theme/`: design tokens
- Future feature modules will live in `features/`, shared UI in `components/`, and data access in `services/`.

The first scaffold establishes the three main tabs: Home, Tasks and Library. Further functionality will be migrated and implemented incrementally without removing the existing reference app.