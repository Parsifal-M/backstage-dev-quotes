# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.0.0] - 2026-07-14

### Breaking Changes

- **New Frontend System only.** The plugin has been fully migrated to the Backstage New Frontend System (NFS) and no longer supports the legacy frontend system. If your app still uses the old `createApp` from `@backstage/app-defaults`, this version will not work — see the [migration guide](https://backstage.io/docs/frontend-system/building-apps/migrating) for how to upgrade your app first.
- The `/alpha` export (`@parsifal-m/plugin-dev-quotes-homepage/alpha`) has been removed. Import the plugin from the main entry point instead.
- The named exports `devQuotes` (old `createPlugin` instance) and `DevQuotes` (old `createRoutableExtension` component) have been removed.

### Added

- Plugin is now registered via `createFrontendPlugin` and exposes a `PageBlueprint` at `/dev-quotes`.

### Removed

- `@backstage/core-plugin-api` dependency removed.
- `@backstage/core-compat-api` dependency removed.
- `src/alpha` entry point removed.

### Migration

Replace any usage of the old system plugin registration:

```tsx
// OLD — remove this from your app
import { DevQuotes } from '@parsifal-m/plugin-dev-quotes-homepage';
// and from your routes:
<Route path="/dev-quotes" element={<DevQuotes />} />;
```

With the new system plugin import:

```tsx
// NEW — add to your app's features array
import devQuotePlugin from '@parsifal-m/plugin-dev-quotes-homepage';

const app = createApp({
  features: [
    // ...other plugins
    devQuotePlugin,
  ],
});
```

The plugin will self-register a page at `/dev-quotes`.

> The `DevQuote` React component is still exported and can be used directly in your own components if needed.
