import ReactDOM from 'react-dom/client';
import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import devQuotePlugin from '../src/alpha';
import { catalogApiMock } from '@backstage/plugin-catalog-react/testUtils';
import {
  createFrontendModule,
  ApiBlueprint,
} from '@backstage/frontend-plugin-api';
import { catalogApiRef } from '@backstage/plugin-catalog-react';
import { EntityCardBlueprint } from '@backstage/plugin-catalog-react/alpha';
import { compatWrapper } from '@backstage/core-compat-api';

const entities = [
  {
    apiVersion: 'backstage.io/v1alpha1',
    kind: 'Component',
    metadata: {
      name: 'example',
      annotations: {
        'backstage.io/managed-by-location': 'file:/path/to/catalog-info.yaml',
      },
    },
    spec: {
      type: 'service',
      lifecycle: 'production',
      owner: 'guest',
    },
  },
];

const catalogApi = catalogApiMock({ entities });

const catalogPluginOverrides = createFrontendModule({
  pluginId: 'catalog',
  extensions: [
    ApiBlueprint.make({
      params: defineParams =>
        defineParams({
          api: catalogApiRef,
          deps: {},
          factory: () => catalogApi,
        }),
    }),
    EntityCardBlueprint.make({
      name: 'dev-quotes-card',
      params: {
        loader: async () =>
          import('../src/components/DevQuotesComponent/DevQuotes').then(m =>
            compatWrapper(<m.DevQuote />),
          ),
      },
    }),
  ],
});

export const app = createApp({
  features: [catalogPlugin, catalogPluginOverrides, devQuotePlugin],
});

const root = app.createRoot();

ReactDOM.createRoot(document.getElementById('root')!).render(root);
