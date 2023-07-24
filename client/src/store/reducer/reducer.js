// reducer.js
import { SET_ENDPOINTS } from '../actions/actions';

const initialState = {
 endpoints: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ENDPOINTS:
      return {
        ...state,
        endpoints: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
