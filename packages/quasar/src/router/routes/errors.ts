export default [
  {
    path: '*',
    meta: {
      publicRoute: true,
    },
    component: () => import(/* webpackChunkName: "pagesErrors404" */'pages/errors/404.vue'),
  }];
