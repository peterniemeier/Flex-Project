import React from 'react';

class SessionForm extends React.Component {
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
    this.props.processForm(this.state);
  }

  render() {
    return (
      <>
        <h1>Hello from the Session Form</h1>

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

export default SessionForm;