export default [
  {
    path: '*',
    meta: {
      publicRoute: true,
    },
    component: () => import(/* webpackChunkName: "pagesErrors404" */'pages/Error404.vue'),
  }];
