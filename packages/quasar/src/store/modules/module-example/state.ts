import BaseState, { BaseStateInterface } from 'store/modules/base/state';

export interface ExampleStateInterface extends BaseStateInterface {
  data: object;
}

const baseState: ExampleStateInterface = {
  ...BaseState,
  data: {},
};

export default baseState;
