import './modal.css';
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SignInFormContainer from './signin_form_container';
import SignUpFormContainer from './signup_form_container';
import { clearErrors } from '../../util/session_api_util';

function Modal({ modal, closeModal, clearErrors }) {
  if (!modal) {
    return null;
  }

  const closeSession = () => {
    closeModal();
    clearErrors();
  }

  let component;
  switch (modal) {
    case 'login':
      component = <SignInFormContainer />;
      break;
    case 'signup':
      component = <SignUpFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className='modal-background' onClick={closeSession}>
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const msp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(Modal);
