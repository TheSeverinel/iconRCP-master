import { connect } from 'react-redux';

import Component from './Component';
import { bindActionCreators } from 'redux';
import { update } from '../../../../shared/redux/actions/authActions';
import { clearUserData } from '../../../../shared/redux/actions/authActions';

const mapStateToProps = (state: any) => {
  const { userData } = state.auth;
  return { userData };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ update, clearUserData }, dispatch);
};

const loggedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default loggedContainer;
