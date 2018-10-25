import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState( { [field]: e.target.value} );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then((success) => {
      if (success.type === "RECEIVE_CURRENT_USER") {
        this.props.closeModal();
      } else {
        console.log('failed to sign up')
      }
    });
  }

  render() {
    return (
      <>
        <h1>SIGN UP Form</h1>
        { Object.values(this.props.errors) }
        <form className='signup-form' onSubmit={ this.handleSubmit }>
          <input type='text' onChange={ this.update('email') } value={this.state.email} placeholder='email'></input>
          <input type='text' onChange={ this.update('username') } value={this.state.username} placeholder='username'></input>
          <input type='password' onChange={ this.update('password') } value={this.state.password} placeholder='password'></input>
          <input type='password' onChange={ this.update('password2') } value={this.state.passwor2} placeholder=' repeat password'></input>
          <button>Sign Up</button>
        </form>

      </>
    )
  }
}

export default SignupForm;