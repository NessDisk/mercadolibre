// reducer.js
import { SET_ENDPOINTS,GET_ITEN_DETAILS } from '../actions/actions';

const initialState = {
 endpoints: [],
 details: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ENDPOINTS:
      return {
        ...state,
        endpoints: action.payload,
      };
      case GET_ITEN_DETAILS:

        return {
          ...state,
          details: action.payload,
        };
    default:
      return state;
  }
};

export default rootReducer;
