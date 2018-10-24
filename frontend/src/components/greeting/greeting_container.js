import { connect } from 'react-redux';
import { logoutUser, loginUser } from '../../util/session_api_util';
import Greeting from './greeting';

const msp = ({ session }) => {
  return {
    currentUser: session
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logoutUser()),
  // added in login
  login: (user) => dispatch(loginUser(user))
});

export default connect(msp, mdp)(Greeting);

