import { RouteConfig } from 'vue-router';
import ErrorRoutes from './routes/errors';

const requireRoutes = require.context('./routes', true, /^(?!.*index)(?!.*errors)(?!.*test).*\.js$/is);

const importedRoutes: RouteConfig[] = [];

requireRoutes.keys().forEach((fileName) => {
  importedRoutes.push({
    ...requireRoutes(fileName).default,
  });
  return true;
});

let routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "layoutMyLayout" */'layouts/MyLayout.vue'),
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

if (process.env.MODE !== 'ssr') {
  routes = [...routes, ...ErrorRoutes];
}

export default [...routes];
