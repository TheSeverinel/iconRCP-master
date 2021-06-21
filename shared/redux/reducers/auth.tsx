import { ACTION_TYPES } from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  error: false,
  showConfirmationScreen: false,
  errorMessage: '',
  userName: '',
  connectionUrl: '',
  connectionPort: '',
  userData: null,
  serverTime: null,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case ACTION_TYPES.AUTH:
      return { ...state, isFetching: true };
    case ACTION_TYPES.AUTH_SUCCESS:
      return { ...state, userData: action.payload, showConfirmationScreen: true, isFetching: false };
    case ACTION_TYPES.AUTH_FAILURE:
      return { ...state, error: true, errorMessage: action.payload, isFetching: false };

    case ACTION_TYPES.GET_TIME:
      return { ...state, isFetching: true };
    case ACTION_TYPES.GET_TIME_SUCCESS:
      return { ...state, isFetching: false, serverTime: action.payload};
    case ACTION_TYPES.GET_TIME_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload, error: true }

    case ACTION_TYPES.UPDATE:
      return { ...state, isFetching: true };
    case ACTION_TYPES.UPDATE_SUCCESS:
      return { ...state, isFetching: false };
    case ACTION_TYPES.UPDATE_FAILURE:
      return { ...state, error: true, errorMessage: action.payload, isFetching: false };

    case ACTION_TYPES.CLEAR_AUTH_ERRORS:
      return { ...state, error: null, errorMessage: '', showConfirmationScreen: false };
    case ACTION_TYPES.CLEAR_USER_DATA:
      return { ...state, error: false, errorMessage: '', showConfirmationScreen: false, userData: null, isFetching: false }; 
    case ACTION_TYPES.SET_CONNECTION_URL:
      return { ...state, connectionUrl: action.payload[0], connectionPort: action.payload[1] };
    default:
      return state;
  }
}
