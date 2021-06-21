import { connect } from 'react-redux';
import { clearUserData } from '../../../../shared/redux/actions/authActions'

import Component from './Component';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state: any) => {
  const { userData } = state.auth;
  return { userData };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ clearUserData }, dispatch);
};

const loginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default loginContainer;
