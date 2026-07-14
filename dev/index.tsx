import ReactDOM from 'react-dom/client';
import { createApp } from '@backstage/frontend-defaults';
import devQuotePlugin from '../src/plugin';

export const app = createApp({
  features: [devQuotePlugin],
});

const root = app.createRoot();

ReactDOM.createRoot(document.getElementById('root')!).render(root);
