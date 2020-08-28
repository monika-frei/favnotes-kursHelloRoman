import axios from 'axios';

export const removeItem = (itemType, id) => (dispatch) => {
  const url = `http://localhost:9000/api/note/${id}`;

  dispatch({ type: 'REMOVE_ITEM_REQUEST' });
  axios
    .delete(url)
    .then(() => {
      dispatch({
        type: 'REMOVE_ITEM_SUCCESS',
        payload: {
          itemType,
          id,
        },
      });
    })
    .catch((err) =>
      dispatch({
        type: 'REMOVE_ITEM_ERROR',
        err,
      }),
    );
};

export const addItem = (itemType, itemContent) => (dispatch, getState) => {
  const url = 'http://localhost:9000/api/note';

  dispatch({ type: 'ADD_ITEM_REQUEST' });
  return axios
    .post(url, {
      userID: getState().userID,
      type: itemType,
      ...itemContent,
    })
    .then(({ data }) =>
      dispatch({
        type: 'ADD_ITEM_SUCCESS',
        payload: {
          itemType,
          data,
        },
      }),
    )
    .catch((err) =>
      dispatch({
        type: 'ADD_ITEM_ERROR',
        err,
      }),
    );
};

export const authenticate = (username, password, authType) => (dispatch) => {
  let url;
  if (authType === 'register') {
    url = 'http://localhost:9000/api/user/register';
  } else if (authType === 'login') {
    url = 'http://localhost:9000/api/user/login';
  }
  dispatch({ type: 'AUTHENTICATE_REQUEST' });

  return axios
    .post(url, {
      username: username,
      password: password,
    })
    .then((payload) =>
      dispatch({
        type: 'AUTHENTICATE_SUCCESS',
        payload,
      }),
    )
    .catch((err) =>
      dispatch({
        type: 'AUTHENTICATION_ERROR',
        err,
      }),
    );
};

export const logout = (userId) => (dispatch) => {
  const url = 'http://localhost:9000/api/user/logout';

  dispatch({ type: 'LOGOUT_REQUEST' });

  return axios
    .post(url, {
      userId,
    })
    .then((payload) =>
      dispatch({
        type: 'LOGOUT_SUCCESS',
        payload,
      }),
    )
    .catch((err) =>
      dispatch({
        type: 'LOGOUT_ERROR',
        err,
      }),
    );
};

export const fetchItems = (itemType) => (dispatch, getState) => {
  const url = 'http://localhost:9000/api/notes/type';

  dispatch({ type: 'FETCH_REQUEST' });

  return axios
    .get(url, {
      params: {
        userID: getState().userID,
        type: itemType,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: {
          data,
          itemType,
        },
      });
    })
    .catch((err) =>
      dispatch({
        type: 'FETCH_ERROR',
        err,
      }),
    );
};
