import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Quasar, { Cookies } from 'quasar';

const mockSsrContext = () => ({
  req: {
    headers: {},
  },
  res: {
    setHeader: () => undefined,
  },
});

export const mountQuasar = (component, options = {}) => {
  const localVue = createLocalVue();
  const app = {};

  localVue.use(Vuex);
  localVue.use(VueRouter);
  localVue.use(Quasar);
  const store = new Vuex.Store({});
  const router = new VueRouter();

  if (options) {
    const ssrContext = options.ssr ? mockSsrContext() : null;

    if (options.cookies) {
      const cookieStorage = ssrContext ? Cookies.parseSSR(ssrContext) : Cookies;
      const { cookies } = options;
      Object.keys(cookies).forEach((key) => {
        cookieStorage.set(key, cookies[key]);
      });
    }

    if (options.plugins) {
      options.plugins.forEach((plugin) => {
        plugin({
          app, store, router, Vue: localVue, ssrContext,
        });
      });
    }
  }

  const $t = () => {};
  const $tc = () => {};
  const $n = () => {};
  const $d = () => {};

  return shallowMount(component, {
    localVue,
    store,
    router,
    mocks: {
      $t, $tc, $n, $d,
    },
    provide: {
      pageContainer: true,
      layout: {
        header: {},
        right: {},
        footer: {},
        left: {},
      },
    },
  });
};
