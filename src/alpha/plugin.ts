import { createFrontendPlugin } from '@backstage/frontend-plugin-api';
import { convertLegacyRouteRefs } from '@backstage/core-compat-api';

export const devQuotePlugin = createFrontendPlugin({
  // The plugin ID is now provided as `pluginId` instead of `id`
  pluginId: 'dev-quotes',
  // bind all the extensions to the plugin
  extensions: [],
  // convert old route refs to the new system
  routes: convertLegacyRouteRefs({}),
  externalRoutes: convertLegacyRouteRefs({}),
});
