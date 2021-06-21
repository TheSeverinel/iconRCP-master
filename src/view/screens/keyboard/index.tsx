import { connect } from 'react-redux';
import { login, clearUserData } from '../../../../shared/redux/actions/authActions';
import { bindActionCreators } from 'redux';

import Component from './Component';

const mapStateToProps = (state: any) => {
  const { userName, showConfirmationScreen, userData } = state.auth; //{token, ...}
  return {  userName, showConfirmationScreen, userData }; //{token, ...}
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ login, clearUserData }, dispatch);
};

const KeyboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default KeyboardContainer;
