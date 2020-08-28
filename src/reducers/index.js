const initialState = {
  userID: '5f476a4d69c80f34580c5301',
  twitters: [],
  notes: [],
  articles: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_SUCCESS':
      return {
        ...state,
        userId: action.payload.data._id,
        status: action.payload.status,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        logout: action.payload,
        userId: undefined,
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
