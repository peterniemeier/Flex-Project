import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../util/session_api_util";
import SignUpForm from "./signup_form";
import { closeModal } from "../../actions/modal_actions"; 

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup",
    navLink: <Link to="/login">log in instead</Link>
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(registerUser(user)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(SignUpForm);
