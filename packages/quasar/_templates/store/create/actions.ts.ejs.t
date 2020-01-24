---
to: src/store/modules/<%= h.changeCase.camel(name) %>/actions.ts
---
import { RootState } from 'store/rootState';
import { ActionContext, ActionTree } from 'vuex';
import { <%= h.changeCase.pascal(name) %>StateInterface } from './state';
import MT from './types';

async function exampleAction(
  { commit }: ActionContext<<%= h.changeCase.pascal(name) %>StateInterface, RootState>,
  payload: string,
): Promise<any> {
  try {
    commit(MT.LOADING);

    return Promise.resolve('example');
  } catch (error) {
    commit(MT.ERROR, error);
    return Promise.reject(new Error('error'));
  }
}

const actions: ActionTree<<%= h.changeCase.pascal(name) %>StateInterface, RootState> = {
  exampleAction,
};

export default actions;
