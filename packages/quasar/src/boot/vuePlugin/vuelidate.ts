import Vuelidate from 'vuelidate';
import { BootFileParams } from 'src/boot-shim';
import { RootState } from 'store/rootState';

export default ({ Vue }: BootFileParams<RootState>) => {
  Vue.use(Vuelidate);
};
