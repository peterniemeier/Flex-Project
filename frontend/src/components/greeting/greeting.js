import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      
    const { currentUser, logout, signIn, openModal} = this.props;

    const sessionLinks = (
      <nav className="login-buttons">
        <button className='sign-up' onClick={() => openModal('signup')}  >Sign up</button>
        <button className='sign-in' onClick={() => openModal('login')} >Sign in</button>
      </nav>
    );

    const personalGreeting = <header>
      <div>hello, { currentUser }</div>
      <button onClick={logout}>Logout</button>
    </header>;

    return !!currentUser ? personalGreeting : sessionLinks;
  }
};

export default Greeting;