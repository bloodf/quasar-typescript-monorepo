import { MutationTree } from 'vuex';
import BaseMutation from 'store/modules/base/mutations';
import { ExampleStateInterface } from './state';
import MT from './types';

const mutations: MutationTree<ExampleStateInterface> = {
  ...BaseMutation,
};

export default mutations;
