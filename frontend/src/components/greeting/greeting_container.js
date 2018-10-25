import { connect } from 'react-redux';
import { logoutUser, loginUser } from '../../util/session_api_util';
import { openModal } from "../../actions/modal_actions";
import Greeting from './greeting';

const msp = ({ session }) => {
  return {
    currentUser: session.username
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logoutUser()),
  login: (user) => dispatch(loginUser(user)),
  openModal: modal => dispatch(openModal(modal))
  
});

export default connect(msp, mdp)(Greeting);

