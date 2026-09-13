# Whiskr

Whiskr is a calm field journal for noticing the cats who share your neighborhood. It is an Expo 55 + TypeScript app with Expo Router, native iOS/Android navigation, and a web-friendly preview.

## Run locally

```bash
npm install
npm run start
```

Use `a` for Android, `i` for iOS, or `w` for the web preview. Expo SDK 55 requires Node.js 20.19 or newer.

## Supabase

1. Create a Supabase project.
2. Run [`supabase/schema.sql`](supabase/schema.sql) in the SQL Editor.
3. Add the project URL and anon key to your app configuration when the remote sync layer is connected.

The schema includes `entries`, `cats`, `purr_packs`, `badges`, and `streaks`, with user-scoped RLS policies and a nightly streak recomputation function. Exact coordinates remain private to the owning user; public sharing should fuzz them before publishing.

## Current prototype

The journal, atlas, regulars, studio, and profile tabs are navigable. The journal includes sample sightings, vibe filters, entry details, a local capture sheet, and a haptic save cue. Studio provides a canvas preview and Purr Pack action; camera, GPS, offline SQLite sync, auth, and transparent PNG export are the next integration layer.

## EAS builds

```bash
npx eas build --platform all
npx eas submit --platform all
```

Before a store build, add camera and location permission copy to `app.json`, configure production Supabase environment variables, and test the offline queue on both platforms.
