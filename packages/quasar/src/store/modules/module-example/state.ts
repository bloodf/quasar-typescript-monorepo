import BaseState, { BaseStateInterface } from 'store/modules/base/state';

export interface ExampleStateInterface extends BaseStateInterface {
  data: object;
}

const createBaseState = (): ExampleStateInterface => ({
  ...BaseState,
  data: {},
});

const baseState = createBaseState();

export default baseState;
