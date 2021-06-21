import { StyleSheet } from 'react-native';

import { TYPOGRAPHY } from '../../styles/typography';

const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: TYPOGRAPHY.COLOR.Default,
  },
  */

  headerContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  keyboardContainer: {
    flex: 9,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  keyboard: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  keyboardNum: {
    display: 'flex',
    color: 'purple',
    fontSize: 60,
  },

  keyboardNumPress: {
    display: 'flex',
    color: 'white',
    fontSize: 60,
  },

  keyboardIn: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  keyboardRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },

  keyboardButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },

  bottomContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: '#FFFFFF50',
    borderColor: 'purple',
    borderWidth: 2
  },

  circlePress: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: 'purple',
    borderColor: 'purple',
    borderWidth: 2
  },

  button: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default styles;
