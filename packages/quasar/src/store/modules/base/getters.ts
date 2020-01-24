import { GetterTree } from 'vuex';
import { BaseStateInterface } from './state';

export interface BaseGettersInterface {
  pending: boolean;
  error?: Error | null | string;
}

const getters: GetterTree<BaseStateInterface, BaseStateInterface> = {
  pending: (state: BaseStateInterface) => state.pending,
  error: (state: BaseStateInterface) => state.error,
};

export default getters;
