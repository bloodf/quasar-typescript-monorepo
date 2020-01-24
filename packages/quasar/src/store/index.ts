import { LooseDictionary } from 'quasar/dist/types/ts-helpers';
import { VueConstructor } from 'vue';
import Vuex from 'vuex';
import modules from 'store/requiredModules';

type StoreBootParams = {
  Vue: VueConstructor;
} & LooseDictionary;

export default function ({ Vue }: StoreBootParams) {
  Vue.use(Vuex);

  return new Vuex.Store({
    modules,
    strict: !!process.env.DEV, // enable strict mode (adds overhead!) for dev mode only
  });
}
