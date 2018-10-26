import '../../assets/stylesheets/shared.css';
import React from 'react';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.otherForm = this.otherForm.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(success => {
      if (success.type === "RECEIVE_CURRENT_USER") {
        this.props.closeModal();
        this.props.history.push("/main");
      } else {
        console.log("failed to sign in");
      }
    });
  }

  otherForm() {
    this.props.clearErrors();
    this.props.otherForm();
  }

  render() {
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <h1>SIGN IN</h1>
        <ul className="login-errors">
          {Object.values(this.props.errors).map(error => {
            console.log(error);
            return <li>{error}</li>;
          })}
        </ul>
        <input
          type="text"
          onChange={this.update("username")}
          value={this.state.username}
          placeholder="username"
          className="input-text"
        />
        <input
          type="password"
          onChange={this.update("password")}
          value={this.state.password}
          placeholder="password"
          className="input-text"
        />
        <button className="btn btn-m btn-secondary">Sign In</button>
        <span>New to Porcelain?</span>
        <button onClick={this.otherForm}>Create an account</button>
      </form>
    );
  }
}

export default SignInForm;