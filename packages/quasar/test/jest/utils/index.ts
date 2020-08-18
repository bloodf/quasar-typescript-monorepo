import VueCompositionApi from '@vue/composition-api';
import {
  createLocalVue,
  shallowMount,
  mount,
} from '@vue/test-utils';
import * as All from 'quasar';
import {
  AddressbarColor,
  AppVisibility,
  BottomSheet,
  ClosePopup,
  Cookies,
  Dark,
  Dialog,
  GoBack,
  Intersection,
  LocalStorage,
  Meta,
  Mutation,
  Notify,
  Platform,
  QuasarPluginOptions,
  Ripple,
  Scroll,
  ScrollFire,
  TouchHold,
  TouchPan,
  TouchRepeat,
  TouchSwipe,
} from 'quasar';
import Vue, { ComponentOptions, VueConstructor } from 'vue';
import Vuex, {
  ActionTree,
  GetterTree,
  ModuleTree,
  MutationTree,
} from 'vuex';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import messages from 'src/i18n';
import dateTimeFormats from 'src/i18n/dateTimeFormats';

/**
 * Utility type to declare an extended Vue constructor
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type VueClass<V extends Vue> = (new (...args: any[]) => V) & typeof Vue;

/**
 * Extract props from provided Vue instance
 */
type ExtractProps<C> = C extends ComponentOptions<Vue,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
any,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
any,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
any,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
any,
infer PropsTypes>
  ? PropsTypes // eslint-disable-next-line @typescript-eslint/no-explicit-any
  : Record<string, any>;

/**
 * `mountQuasar` options interface
 */
interface QuasarMountOptions<C> {
  // @vue/test-utils "mount" and "shallowMount" options signature are the same on v1.0.3
  // If they'll diverge in future, it should be possible to model a
  // discriminated union over "shallow" property
  // TODO: remove Quasar-managed mount options from this type
  quasar?: Partial<QuasarPluginOptions>;
  lang?: string;
  ssr?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cookies?: Record<string, any>;
  propsData?: ExtractProps<C>;
}

export interface Module<S, R> {
  namespaced?: boolean;
  state?: S | (() => S);
  getters?: GetterTree<S, R>;
  actions?: ActionTree<S, R>;
  mutations?: MutationTree<S>;
  modules?: ModuleTree<R>;
}

interface VuexModule<S, R> {
  name: string;
  module: Module<S, R>
}

const mockSsrContext = () => ({
  req: {
    headers: {},
  },
  res: {
    setHeader: () => undefined,
  },
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createVuex = (vuexModules: VuexModule<any, any>[] = [{ name: '', module: {} }]) => {
  const modules = {};

  vuexModules
    .filter((m) => m.name)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .forEach((m): void => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      modules[m.name] = {
        namespaced: true,
        ...m.module,
      };
    });

  return new Vuex.Store({
    modules,
  });
};

export const createI18n = (lang = 'pt-br') => new VueI18n({
  locale: lang,
  fallbackLocale: lang,
  messages,
  dateTimeFormats,
});

// https://eddyerburgh.me/mock-vuex-in-vue-unit-tests
// We cannot infer component type from `shallowMount` using `Parameters<typeof shallowMount>`
//  because it has overloads but the last signature isn't
//  the most general one, while `Parameters<...>`
//  will automatically resolve to the last signature thinking it's the most generic one.
// See https://github.com/Microsoft/TypeScript/issues/24275#issuecomment-390701982
// TODO: doesn't support components defined via `Vue.extend`
export const mountQuasarOptions = <V extends Vue, C extends VueConstructor<V>>(
  options: QuasarMountOptions<C> = {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  vuexModule: VuexModule<any, any>[] = [{ name: '', module: {} }],
) => {
  const localVue = () => {
    const localInstance = createLocalVue();

    const { Quasar } = All;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function isComponent(value: any): value is VueConstructor {
      return value && value.component && value.component.name != null;
    }

    const components = Object.keys(All)
      .reduce<{ [index: string]: VueConstructor }>(
        (object, key) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (All as any)[key];
          if (isComponent(val)) {
          // eslint-disable-next-line no-param-reassign
            object[key] = val;
          }
          return object;
        },
        {},
      );

    Notify.create = () => jest.fn();
    // TODO: Vuex and VueRouter not available on localVue instance, must be reported
    // See https://forum.quasar-framework.org/topic/3461/quasar-testing-vue-warn-error-in-render-typeerror-cannot-read-property-lang-of-undefined/7
    localInstance.use(Quasar, {
      directives: {
        ClosePopup,
        GoBack,
        Intersection,
        Mutation,
        Ripple,
        Scroll,
        ScrollFire,
        TouchHold,
        TouchPan,
        TouchRepeat,
        TouchSwipe,
      },
      components,
      plugins: {
        Cookies,
        Dialog,
        AddressbarColor,
        AppVisibility,
        BottomSheet,
        Dark,
        LocalStorage,
        Meta,
        Platform,
        Screen,
      },
    });
    localInstance.use(VueCompositionApi);
    localInstance.use(Vuex);
    localInstance.use(VueRouter);
    localInstance.use(Vuelidate);
    localInstance.use(VueI18n);

    return localInstance;
  };

  if (options) {
    const ssrContext = options.ssr ? mockSsrContext() : null;

    if (options.cookies) {
      const cookieStorage = ssrContext ? Cookies.parseSSR(ssrContext) : Cookies;
      const { cookies } = options;
      Object.entries(cookies).forEach(([key, value]) => {
        cookieStorage.set(key, value);
      });
    }
  }
  // eslint-disable-next-line no-bitwise
  const ret = {
    propsData: options.propsData,
    localVue: localVue(),
    store: createVuex(vuexModule),
    router: (() => new VueRouter())(),
    i18n: createI18n(options.lang || 'en-us'),
    // Injections for Components with a QPage root Element
    provide: {
      pageContainer: true,
      layout: {
        header: {},
        right: {},
        footer: {},
        left: {},
      },
    },
  };
  return ret;
};

interface MountQuasarOption<C> extends QuasarMountOptions<C> {
  mount?: {
    shallow?: boolean;
  } & Parameters<typeof mount>[1];
}

export const mountQuasar = <V extends Vue, C extends VueConstructor<V>>(
  component: C,
  options: MountQuasarOption<C> = {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  vuexModule: VuexModule<any, any>[] = [{ name: '', module: {} }],
) => {
  // If 'mount.shallow' exists and is false, we use full 'mount'
  // Otherwise the fallback is 'shallowMount'
  const mountFn = options.mount?.shallow === true ? shallowMount : mount;

  const baseOptions = () => mountQuasarOptions(options, vuexModule);

  // mount functions usually require a
  // See https://github.com/vuejs/vue-jest/issues/188
  return mountFn(component, baseOptions());
};

export function mountFactory<V extends Vue, C extends VueConstructor<V>>(
  component: C,
  options: QuasarMountOptions<C> = {},
) {
  const baseOption = mountQuasarOptions(options);
  // You can model `propsData` object to be mandatory when there is at least one required prop
  // See: https://github.com/microsoft/TypeScript/issues/12400#issuecomment-619368188
  return (propsData?: typeof options['propsData']) => mountQuasar<V, C>(component, {
    ...baseOption,
    propsData,
  });
}
