import { StyleSheet } from 'react-native';

import { TYPOGRAPHY } from '../../styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: TYPOGRAPHY.COLOR.Default,
  },
  
  image: {
    width: '100%',
  },

  headerContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  middleContainer: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backButton: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  acceptButton: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  progressBar: {
    flex: 0.5,
    height: 5,
    width: 500,
    backgroundColor: '#73016f',
    borderColor: '#73016f',
    borderWidth: 2,
    borderRadius: 25,
  },
  

});

export default styles;
