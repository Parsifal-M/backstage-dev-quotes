import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes';

export const devQuotes = createPlugin({
  id: 'dev-quotes',
  routes: {
    root: rootRouteRef,
  },
});

export const DevQuotes = devQuotes.provide(
  createRoutableExtension({
    name: 'DevQuotes',
    component: () =>
      import('./components/DevQuotesComponent').then(m => m.DevQuote),
    mountPoint: rootRouteRef,
  }),
);
