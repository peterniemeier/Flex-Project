import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { registerUser, clearErrors } from "../../util/session_api_util";
import SignUpForm from "./signup_form";
import { closeModal, openModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router';

const msp = ({ errors }, ownProps) => {
  return {
    errors: errors.session,
    formType: "signup",
    navLink: <Link to="/login">log in instead</Link>
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(registerUser(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
    otherForm: () => dispatch(openModal('login'))
  };
};

export default withRouter(connect(msp, mdp)(SignUpForm));
