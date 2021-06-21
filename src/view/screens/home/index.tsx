import { connect } from 'react-redux';
import { cardLogin, clearUserData } from '../../../../shared/redux/actions/authActions';
import { bindActionCreators } from 'redux';

import Component from './Component';

const mapStateToProps = (state: any) => {
  const { serverTime, userName, showConfirmationScreen, userData } = state.auth;
  return { serverTime, userName, showConfirmationScreen, userData };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ cardLogin, clearUserData  }, dispatch);
};

const homeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default homeContainer;
