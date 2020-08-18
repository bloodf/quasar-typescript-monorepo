import { RootState } from 'store/rootState';
import { ActionContext, ActionTree } from 'vuex';
import { ExampleStateInterface } from './state';
import TYPE from './types';

async function exampleAction(
  { commit }: ActionContext<ExampleStateInterface, RootState>,
  payload: string,
): Promise<any> {
  try {
    commit(TYPE.LOADING);

    return Promise.resolve('example');
  } catch (error) {
    commit(TYPE.ERROR, error);
    return Promise.reject(error);
  }
}

const actions: ActionTree<ExampleStateInterface, RootState> = {
  exampleAction,
};

export default actions;
