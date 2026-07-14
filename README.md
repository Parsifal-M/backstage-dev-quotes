# dev-quotes-homepage

Hello! :wave:

This is just a fun little plugin that I made to display some random coding/programming related quotes on the Backstage homepage. Although to be honest the card can be used anywhere you like! I hope you enjoy it!

If you want to leave a star, that would be awesome! :star:

I don't expect much work to be done on this plugin as it was just a fun little project I made. But if you would like to contribute, please do! See [Would you like to contribute? or add more quotes?](#would-you-like-to-contribute-or-add-more-quotes) for more information.

> **From v4.0.0 onwards, this plugin only supports the Backstage New Frontend System (NFS).** The legacy frontend system (`createApp` from `@backstage/app-defaults`) is no longer supported. If you are on an older app setup, stay on v3.x or migrate your app first using the [Backstage frontend system migration guide](https://backstage.io/docs/frontend-system/building-apps/migrating). See the [CHANGELOG](./CHANGELOG.md) for full details and migration steps.

## Pre-requisites (if you want to use it on the homepage)

If you do want to use it on the homepage, first make sure you look over the official docs on how to configure the homepage [here](https://backstage.io/docs/getting-started/homepage/#composing-your-homepage). There is also the [homepage plugin](https://github.com/backstage/backstage/tree/master/plugins/home#readme) which might be better to read first.

## Installation

```bash
yarn --cwd packages/app add @parsifal-m/plugin-dev-quotes-homepage
```

## New Frontend System (NFS) Setup

### Standalone page

The plugin ships with a built-in page extension that renders the quote card at `/dev-quotes`. Add the plugin to your app's `features` array in `packages/app/src/App.tsx`:

```tsx
import { createApp } from '@backstage/frontend-defaults';
import devQuotePlugin from '@parsifal-m/plugin-dev-quotes-homepage';

const app = createApp({
  features: [
    devQuotePlugin,
    // ... other features
  ],
});

export default app.createRoot();
```

Once added, the quote card will be available at `http://localhost:3000/dev-quotes`.

### Adding to a custom page or homepage

If you'd rather embed the quote card within an existing page (such as your Backstage homepage), import the `DevQuote` component directly and drop it into your page extension or custom page component:

```tsx
import { Grid } from '@material-ui/core';
import { DevQuote } from '@parsifal-m/plugin-dev-quotes-homepage';

const MyHomePage = () => (
  <Grid container spacing={3}>
      <DevQuote />
    </Grid>
    {/* ... other cards */}
  </Grid>
);
```

### Adding custom quotes

Pass additional quotes via the `extraQuotes` prop. Each entry needs a `text` and `author` field — they are merged with the built-in quote list at runtime:

```tsx
import { DevQuote } from '@parsifal-m/plugin-dev-quotes-homepage';

<DevQuote
  extraQuotes={[
    { text: 'Ship it!', author: 'Every engineer ever' },
    { text: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
  ]}
/>;
```

## Example

An example quote

![Quote Image](static/img/quote.png)

An example quote on an entity page:

![Quote Entity Page](static/img/quote2.png)

## Would you like to contribute? or add more quotes?

Please do! I would love to see more quotes added to this plugin. If you would like to add some quotes, please open a pull request with your changes. If you would like to add a lot of quotes, please open an issue first so we can discuss it. And please keep them programming related, and keep it safe for work! Here is a short example of how to add a quote:

- Clone the repository and run `yarn install --immutable`
- Add the quote to the `quotes.ts` file in the `src` folder.
- Run `yarn prettier:write`
- Make sure to sign your commit with `git commit -s -m "Added quote by <someone>"`

## When will my quote be added to the plugin?

I will try and release a new version with the new quotes as soon as possible. Keep in mind this is a side project I made for fun!

## License

This project is released under the Apache 2.0 License.
