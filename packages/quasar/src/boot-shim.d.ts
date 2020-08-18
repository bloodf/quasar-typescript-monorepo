import { HasSsrParam, HasStoreParam } from 'quasar';
import { ComponentOptions, VueConstructor } from 'vue';
import VueRouter from 'vue-router';
import { Store } from 'vuex';

export interface ConstructedApp<TStore> extends ComponentOptions<Vue>{
  store: Store<TStore>;
  router?: VueRouter;
}

export interface BootFileParams<TStore> extends HasSsrParam, HasStoreParam<TStore> {
  app: ConstructedApp<TStore>;
  Vue: VueConstructor;
  router: VueRouter;
  urlPath: string;
  redirect: (url: string) => void;
}
