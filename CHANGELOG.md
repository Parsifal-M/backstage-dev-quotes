# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.0.0] - 2026-07-14

### Breaking Changes

- **New Frontend System only.** The plugin has been fully migrated to the Backstage New Frontend System (NFS) and no longer supports the legacy frontend system. If your app still uses the old `createApp` from `@backstage/app-defaults`, this version will not work — see the [migration guide](https://backstage.io/docs/frontend-system/building-apps/migrating) for how to upgrade your app first.
- The named exports `devQuotesHomepage` (old `createPlugin` instance) and `DevQuotesHomepage` (old `createRoutableExtension` component) have been removed.

### Added

- Plugin is now registered via `createFrontendPlugin` and exposes a `PageBlueprint` at `/dev-quotes`.
- Plugin now has a default export for use with `createApp`'s `features` array.

### Removed

- `@backstage/core-plugin-api` dependency removed.

### Migration

Replace the old system plugin registration in your app:

```tsx
// OLD — remove from your app
import { DevQuotesHomepage } from '@parsifal-m/plugin-dev-quotes-homepage';
// and from your routes:
<Route path="/dev-quotes" element={<DevQuotesHomepage />} />;
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
