import { LooseDictionary } from 'quasar/dist/types/ts-helpers';
import { VueConstructor } from 'vue';
import VueRouter from 'vue-router';
import routes from './routerManager';

type RouterBootParams = {
  Vue: VueConstructor;
} & LooseDictionary;

export default function ({ Vue }: RouterBootParams) {
  Vue.use(VueRouter);

  return new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });
}
