import { EntityCardBlueprint } from '@backstage/plugin-catalog-react/alpha';
import { compatWrapper } from '@backstage/core-compat-api';

export const devQuotesCard = EntityCardBlueprint.make({
  name: 'dev-quotes-card',
  params: {
    loader: async () =>
      import('../components/DevQuotesComponent/DevQuotes').then(m =>
        compatWrapper(<m.DevQuote />),
      ),
  },
});
