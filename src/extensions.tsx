import { PageBlueprint } from '@backstage/frontend-plugin-api';
import { rootRouteRef } from './routes';

export const devQuotesPage = PageBlueprint.make({
  params: {
    path: '/dev-quotes',
    routeRef: rootRouteRef,
    loader: async () =>
      import('./components/DevQuotesComponent/DevQuotes').then(m => (
        <m.DevQuote />
      )),
  },
});
