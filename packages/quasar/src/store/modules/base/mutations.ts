import { MutationTree } from 'vuex';
import { BaseError, BaseStateInterface } from './state';
import MT from './types';

const mutations: MutationTree<BaseStateInterface> = {
  [MT.ERROR](state: BaseStateInterface, payload: BaseError) {
    switch (typeof payload) {
      case 'string':
        state.error = payload;
        break;
      case 'object':
        if (payload) {
          state.error = JSON.parse(JSON.stringify(payload));
        }
        break;
      default:
        state.error = payload;
        break;
    }
    state.pending = !state.pending;
  },
  [MT.LOADING](state: BaseStateInterface) {
    state.pending = !state.pending;
  },
  [MT.LOADED](state: BaseStateInterface) {
    state.pending = false;
  },
};

export default mutations;
