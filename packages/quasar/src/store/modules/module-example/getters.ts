import { RootState } from 'store/rootState';
import { GetterTree } from 'vuex';
import BaseGetters, { BaseGettersInterface } from '../base/getters';
import { ExampleStateInterface } from './state';

export interface ExampleGetters extends BaseGettersInterface {
  example: object;
}

const getters: GetterTree<ExampleStateInterface, RootState> = {
  ...BaseGetters,
  example: (state: ExampleStateInterface): object => state.data,
};

export default getters;
