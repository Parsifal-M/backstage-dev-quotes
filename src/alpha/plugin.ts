import { createFrontendPlugin } from '@backstage/frontend-plugin-api';
import { rootRouteRef } from '../routes';
import { devQuotesPage } from './extensions';

export const devQuotePlugin = createFrontendPlugin({
  pluginId: 'dev-quotes',
  extensions: [devQuotesPage],
  routes: {
    root: rootRouteRef,
  },
});
