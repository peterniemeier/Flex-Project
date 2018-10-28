import axios from 'axios';
// import jwt_decode from 'jwt-decode';
import * as ToiletActions from '../actions/toilet_actions';

// const $ = window.$;
export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


// We can use axios to set a default header
export const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const createToilet = (toilet) => dispatch => {
return axios
    .post('/api/toilets/create', toilet)
    .then(res => {
      dispatch(ToiletActions.receiveToilet(res));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const updateToilet = (id) => dispatch => {
return axios
    .patch(`/api/toilets/${id}`)
    .then(res => {
      // gets all toilets
      dispatch(ToiletActions.receiveToilet(res));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const removeToilet = (id) => dispatch => {
return axios
    .delete('/api/toilets/destroy', id)
    .then(res => {
      // gets all toilets
      dispatch(ToiletActions.receiveToilet(res));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const fetchToilets = () => dispatch => {
return axios
    .get('/api/toilets')
    .then(res => {
      // gets all toilets
      dispatch(ToiletActions.receiveToilets(res));
    })
    .catch(err =>
      {}
    );
};

export const fetchToilet = (id) => dispatch => {
return axios
    .get(`/api/toilets/${id}`)
    .then(res => {
      // gets the specified toilet
      dispatch(ToiletActions.receiveToilet(res));
    })
    .catch(err =>
      {}
    );
};

export const createToiletComment = (comment) => dispatch => {

return axios
    .post('/api/comments/create', comment)
    .then(res => {

      dispatch(ToiletActions.receiveToilet(res));
    })
    .catch(err =>
      {}
    );
};

//fetchToiletComments' id is the id of the toilet whose comments
//we want to fetch.
export const fetchToiletComments = (id) => dispatch => {
return axios
    .get(`/api/comments/${id}`)
    .then(res => {
      // gets the specified toilet
      dispatch(ToiletActions.receiveToiletComments(res));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
