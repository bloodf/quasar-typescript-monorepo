import VueCompositionApi from '@vue/composition-api';
import { BootFileParams } from 'src/boot-shim';
import { RootState } from 'store/rootState';

export default ({ Vue }: BootFileParams<RootState>) => {
  Vue.use(VueCompositionApi);
};
