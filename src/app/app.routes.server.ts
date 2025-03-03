import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // {
  //   path: 'product-details/:id',
  //   renderMode: RenderMode.Client,
  // },

  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
