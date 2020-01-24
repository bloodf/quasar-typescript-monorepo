---
to: src/store/modules/<%= h.changeCase.camel(name) %>/mutations.ts
---
import { MutationTree } from 'vuex';
import BaseMutation from 'store/modules/base/mutations';
import { <%= h.changeCase.pascal(name) %>StateInterface } from './state';
import MT from './types';

const mutations: MutationTree<<%= h.changeCase.pascal(name) %>StateInterface> = {
  ...BaseMutation,
};

export default mutations;
