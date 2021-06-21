import * as React from 'react';
import { View, Image, SafeAreaView, ImageBackground } from 'react-native';

import { tabbedNavigation } from '../../../navigators/navigation';
import styles from './styles';


export interface Props {
  getTime: Function,
  serverTime: string,
}

interface State {}

class Splash extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
    
  }

  navigateToHome = () => {
    
    tabbedNavigation();
  }

  
  componentDidMount() {
    setTimeout(() => { this.navigateToHome()}, 2000); 
    
  }

  render() {
    return (

      <SafeAreaView style={{ flex: 1}}>

        <ImageBackground style={{width: '100%', height: '100%'}} source={require('../../assets/images/background_light.png')}>

          <View style={{flex: 1, alignSelf: "center", justifyContent: "center"}}>
            <Image
              style={{ width: 450, height: 450}} 
              resizeMode="contain"
              source={require('../../assets/images/icon_logo_light.png')}
            />
          </View>
          
          
          
        </ImageBackground>
          

      </SafeAreaView>

    );
  }


  

  
}

export default Splash;
