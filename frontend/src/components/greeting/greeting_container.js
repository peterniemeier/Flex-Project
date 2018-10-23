import { connect } from 'react-redux';
import { logoutUser } from '../../util/session_api_util';
import Greeting from './greeting';

const msp = ({ session }) => {
  return {
    currentUser: session
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(msp, mdp)(Greeting);

