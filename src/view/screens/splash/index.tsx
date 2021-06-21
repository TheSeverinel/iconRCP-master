import { connect } from 'react-redux';
import { getTime } from '../../../../shared/redux/actions/authActions';
import { bindActionCreators } from 'redux';

import Component from './Component';

const mapStateToProps = (state: any) => {
  const { serverTime } = state.auth;
  return { serverTime };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ getTime }, dispatch);
};

const splashContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default splashContainer;
