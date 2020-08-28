const initialState = {
  twitters: [],
  notes: [],
  articles: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_SUCCESS':
      return {
        ...state,
        userID: action.payload.data._id,
        status: action.payload.status,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        logout: action.payload,
        userID: undefined,
        status: undefined,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case 'REMOVE_ITEM_SUCCESS':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item._id !== action.payload.id),
        ],
      };
    case 'ADD_ITEM_SUCCESS':
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };
    default:
      return state;
  }
};

export default rootReducer;
