import BaseTypes from 'store/modules/base/types';

export enum Mutations {
  EXAMPLE = 'EXAMPLE',
}

const mutations = {
  ...BaseTypes,
  ...Mutations,
};

export default mutations;
