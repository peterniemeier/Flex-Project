import React from 'react';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then( (success) =>  { 
      if (success.type === "RECEIVE_CURRENT_USER") {
        this.props.closeModal();
      } else {
        console.log('failed to sign in')
      }
    });

  }

  render() {
    return (
      <>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <h1>SIGN IN</h1>
          { Object.values(this.props.errors) }
          <input type='text' onChange={this.update('username')} value={this.state.username} placeholder='username'></input>
          <input type='password' onChange={this.update('password')} value={this.state.password} placeholder='password'></input>
          <button>Sign In</button>
        </form>

      </>
    )
  }
}

export default SignInForm;