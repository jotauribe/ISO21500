import * as _ from 'lodash';

export const isArrayEqual = function isArrayEqual(x, y) {
  return _(x)
    .xorWith(y, _.isEqual)
    .isEmpty();
};
