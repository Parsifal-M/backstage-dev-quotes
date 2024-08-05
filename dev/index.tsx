import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { devQuotesHomepage, DevQuotesHomepage } from '../src/plugin';

createDevApp()
  .registerPlugin(devQuotesHomepage)
  .addPage({
    element: (
      <DevQuotesHomepage
        extraQuotes={[
          {
            author: 'dev-quotes developer',
            text: 'This is a custom quote, do not mind me',
          },
        ]}
      />
    ),
    title: 'Root Page',
    path: '/dev-quotes-homepage',
  })
  .render();
