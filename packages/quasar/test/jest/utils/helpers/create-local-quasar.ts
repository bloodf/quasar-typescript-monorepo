import { createLocalVue } from '@vue/test-utils';
import { Quasar } from 'quasar';
import VueCompositionApi from '@vue/composition-api';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import VueI18n from 'vue-i18n';
import VueSimpleMask from 'vue-simple-mask';
import { QuasarMountOptions } from './models';

export function createLocalVueForQuasar({
  quasar,
  plugins,
}: QuasarMountOptions): ReturnType<typeof createLocalVue> {
  const localVue = createLocalVue();
  // eslint-disable-next-line no-underscore-dangle
  Quasar.__qInstalled = undefined;
  localVue.use(Quasar, quasar);

  (plugins ?? []).forEach((pluginDescriptor) => {
    if (!Array.isArray(pluginDescriptor)) {
      // eslint-disable-next-line no-param-reassign
      pluginDescriptor = [pluginDescriptor];
    }

    localVue.use(VueCompositionApi);
    localVue.use(Vuex);
    localVue.use(VueRouter);
    localVue.use(Vuelidate);
    localVue.use(VueI18n);
    localVue.use(VueSimpleMask);

    const [plugin, ...options] = pluginDescriptor;
    localVue.use(plugin, ...options);
  });

  // (options.bootFunctions ?? []).forEach(bootFn => {
  //   bootFn({ app, store, router, Vue: localVue, ssrContext });
  // });

  return localVue;
}
