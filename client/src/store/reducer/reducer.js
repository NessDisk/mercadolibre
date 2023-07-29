// reducer.js
import { SET_ENDPOINTS,GET_ITEN_DETAILS, BREADCRUMB, BREADCRUMB_DETAILS, SET_CLEAR_PROVIDER } from '../actions/actions';

const initialState = {
 endpoints: [],
 details: [],
 breadcrumbs: [],
 breadcrumbs_details: []
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
        case BREADCRUMB:
          return {
            ...state,
            breadcrumbs: action.payload,
          };
          case BREADCRUMB_DETAILS:
            return {
              ...state,
              breadcrumbs_details: action.payload,
            };
            case SET_CLEAR_PROVIDER:
          
              return {
                ...state,
                endpoints: [],
                details: [],
                breadcrumbs: [],
              breadcrumbs_details: []
              };
    default:
      return state;
  }
};

export default rootReducer;
