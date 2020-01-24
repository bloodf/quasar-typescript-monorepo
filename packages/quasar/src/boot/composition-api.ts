import VueCompositionApi from '@vue/composition-api';
import { BootParams } from 'src/boot-shim';

export default ({ Vue }: BootParams) => {
  Vue.use(VueCompositionApi);
};
