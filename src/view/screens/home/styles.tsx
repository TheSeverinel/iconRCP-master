import { StyleSheet } from 'react-native';

import { TYPOGRAPHY } from '../../styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  clock: {
    display: 'flex',
    color: 'grey',
    fontSize: 110,
  },
  date: {
    display: 'flex',
    color: 'grey',
    fontSize: 35,
  
  },
  welcome: {
    display: 'flex',
    color: 'black',
    fontSize: 60, 
    fontStyle: 'italic',
    textAlign: 'center',

  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    flex: 1,
    
  },
  container3a: {
    flex: 1,
  },
  container3b: {
    flex: 1,
    flexDirection: 'row',
  },
  container3b1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3b2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    width: 200,
    height: 200, 
    
  },

});

export default styles;
