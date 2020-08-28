import ACTION_TYPES from './ActionTypes';

const intitialState = {
  data: '',
  error: ''
};

const apiReducer = (state = intitialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.API_PENDING:
    return {
      ...state
    };
    case ACTION_TYPES.API_SUCCESS:
    return {
      ...state,
      data: action.payload
    };
    case ACTION_TYPES.API_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
}

export default apiReducer;
