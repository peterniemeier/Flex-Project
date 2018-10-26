import React from 'react';
import '../../assets/stylesheets/shared.css';

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
    this.otherForm = this.otherForm.bind(this);
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

  otherForm() {
    this.props.clearErrors();
    this.props.otherForm();
  }


  render() {
    return (
        <form className='signup-form' onSubmit={ this.handleSubmit }>
          <h1>SIGN UP</h1>
          <ul className='login-errors'>
            {Object.values(this.props.errors).map(error => {
              console.log(error)
              return <li>{error}</li>
            })}
          </ul>
            
          <input type='text' onChange={ this.update('email') } 
          value={this.state.email} placeholder='email'
          className='input-text'></input>
          <input type='text' onChange={ this.update('username') } 
          value={this.state.username} placeholder='username'
          className='input-text'></input>
          <input type='password' onChange={ this.update('password') } 
          value={this.state.password} placeholder='password'
          className='input-text'></input>
          <input type='password' onChange={ this.update('password2') } 
          value={this.state.passwor2} placeholder='repeat password'
          className='input-text'></input>
          <button className='btn btn-secondary btn-l'>Sign Up</button>
          <span>Already have an account?</span>
          <button onClick={this.otherForm}>Sign in</button>
        </form>
    )
  }
}

export default SignupForm;