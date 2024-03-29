import { TEST_DISPATCH } from '../actions/types';

const initialState = {
  isWorking: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        ...state,
        isWorking: true
      };
    default:
      return state;
  }
}
