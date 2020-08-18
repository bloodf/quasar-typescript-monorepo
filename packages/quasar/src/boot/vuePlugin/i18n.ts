import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from 'src/i18n';
import { BootFileParams } from 'src/boot-shim';
import { RootState } from 'store/rootState';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'pt-br',
  fallbackLocale: 'pt-br',
  messages,
});

export default ({ app }: BootFileParams<RootState>) => {
  Object.assign(app, { i18n });
};

export { i18n };
