import React from 'react';
import './greeting.css';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      
    const { currentUser, logout, openModal} = this.props;

    const sessionLinks = ( 
      <nav className="login-buttons">
        <button className="btn btn-submit" onClick={() => openModal("signup")}>
          Sign up
        </button>
        <button className="btn btn-submit" onClick={() => openModal("login")}>
          Sign in
        </button>
      </nav>
    ); 

    const personalGreeting = (
      <nav className='personal-greeting'>
        <p>hello, { currentUser }</p>
        <button className='btn btn-submit' onClick={logout}>Logout</button>
      </nav>
      );

    return !!currentUser ? personalGreeting : sessionLinks;
  }
};

export default Greeting;