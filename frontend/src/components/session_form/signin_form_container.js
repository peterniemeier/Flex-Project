import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { loginUser, clearErrors } from "../../util/session_api_util";
import SignInForm from "./signin_form";
import { closeModal, openModal } from "../../actions/modal_actions"; 
import { withRouter } from "react-router";

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup",
    navLink: <Link to="/signup">sign up instead</Link>
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(loginUser(user)),
    closeModal: () => dispatch(closeModal()),
    otherForm: () => dispatch(openModal('signup')),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(msp, mdp)(SignInForm));
