import { RootState } from 'store/rootState';
import { ActionContext, ActionTree } from 'vuex';
import { ExampleStateInterface } from './state';
import MT from './types';

async function exampleAction(
  { commit }: ActionContext<ExampleStateInterface, RootState>,
  payload: string,
): Promise<any> {
  try {
    commit(MT.LOADING);

    return Promise.resolve('example');
  } catch (error) {
    commit(MT.ERROR, error);
    return Promise.reject(error);
  }
}

const actions: ActionTree<ExampleStateInterface, RootState> = {
  exampleAction,
};

export default actions;
