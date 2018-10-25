import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = function (state = { modal: null }, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { modal: action.modal };
    case CLOSE_MODAL:
      return { modal: null };
    default:
      return state;
  }
}

export default modalReducer;
