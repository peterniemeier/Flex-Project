import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../util/session_api_util";
import SignInForm from "./signin_form";
import { closeModal } from "../../actions/modal_actions"; 

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
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(SignInForm);
