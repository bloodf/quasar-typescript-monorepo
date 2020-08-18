import { RouteConfig } from 'vue-router';
import ErrorRoutes from './routes/errors';

const requireRoutes = require.context('./routes', true, /^(?!.*index)(?!.*errors)(?!.*test).*\.(js|ts)$/is);

const importedRoutes: RouteConfig[] = [];

requireRoutes.keys().forEach((fileName) => {
  const routes = requireRoutes(fileName).default;

  if (Array.isArray(routes)) {
    importedRoutes.push(...routes);
  } else {
    importedRoutes.push({
      ...routes,
    });
  }

  return true;
});

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "layoutBaseClear" */'layouts/base/clear.vue'),
    children: [
      {
        name: 'Index',
        path: '',
        component: () => import(/* webpackChunkName: "pagesIndex" */'pages/Index.vue'),
      },
      ...importedRoutes,
    ],
  },
];

export default [...routes, ...ErrorRoutes];
