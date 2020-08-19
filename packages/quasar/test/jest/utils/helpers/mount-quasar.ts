import { mount, shallowMount, Wrapper } from '@vue/test-utils';
import Vue, { ComponentOptions } from 'vue';
import VueRouter from 'vue-router';
import { createI18n, createVuex } from 'jest/utils';
import { createLocalVueForQuasar } from './create-local-quasar';
import { QuasarMountOptions, VueClass } from './models';

const $segment = {
  page: () => jest.fn(),
  track: () => jest.fn(),
  identify: () => jest.fn(),
};

// We cannot infer component type from `shallowMount`
// using `Parameters<typeof shallowMount>`
// because it has overloads but the last signature
// isn't the most general one, while `Parameters<...>`
// will automatically resolve to the last signature
// thinking it's the most generic one.
// See https://github.com/Microsoft/TypeScript/issues/24275#issuecomment-390701982
export function mountQuasar<V extends Vue>(
  component: ComponentOptions<V>,
  options?: QuasarMountOptions,
): Wrapper<V>;
export function mountQuasar<V extends Vue>(
  component: VueClass<V>,
  options?: QuasarMountOptions,
): Wrapper<V>;
export function mountQuasar<V extends Vue>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any,
  options: QuasarMountOptions = {},
): Wrapper<V> {
  const localVue = options.mount?.localVue ?? createLocalVueForQuasar(options);

  const mountFn = options.mount?.type === 'full' ? mount : shallowMount;

  const mountOptions = {
    ...options.mount,
    propsData: { ...options.mount?.propsData, ...options.propsData },
    localVue,
    router: (() => new VueRouter())(),
    i18n: createI18n(options.lang || 'pt-br'),
  };

  if (options.vuexModule?.length) {
    mountOptions.store = createVuex(options.vuexModule);
  }

  // mount functions usually require a Vue component,
  //  but due to Jest extensions resolution we get them
  //  working even when we provide only the script part
  // See https://github.com/vuejs/vue-jest/issues/188
  return mountFn<V>(component, mountOptions);
}
