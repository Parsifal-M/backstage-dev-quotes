import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { devQuotesHomepage, DevQuotesHomepage } from '../src/plugin';

createDevApp()
  .registerPlugin(devQuotesHomepage)
  .addPage({
    element: <DevQuotesHomepage />,
    title: 'Root Page',
    path: '/dev-quotes-homepage',
  })
  .render();
