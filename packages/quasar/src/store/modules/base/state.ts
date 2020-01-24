export type BaseError = string | null | undefined | Error;

export interface BaseStateInterface {
  pending: boolean;
  error?: BaseError;
}

const baseState = {
  pending: false,
  error: null,
};

export default baseState;
