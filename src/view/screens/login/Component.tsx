import * as React from 'react';
import { View, Image, SafeAreaView, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Navigation } from 'react-native-navigation';
import { SCREENS } from '../../../constants/screen';


// widok wyłączony z użytku, z powodu zmiany założeń aplikacji
// pozostawiono na wszelki wypadek


export interface Props {
  componentId: string;
  userData: any;
  //token: string;
  clearUserData: Function;
  clearPin: Function;
}


interface State {
  timeLeft: number,
  timer: any
}

class Login extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      timeLeft: 4,
      timer: null
    };

  }

  componentDidMount() {
    this.countTime();
  }

  countTime = () => {
    this.setState({
      timer: setInterval(() => {
        this.changeTimeLeft();
      }, 1000)
    });
  }

  changeTimeLeft = () => {
    if (this.state.timeLeft > 0) {
      this.setState({ timeLeft: this.state.timeLeft - 1 });
    } else {
      clearInterval(this.state.timer);
    }
  }

  handleAcceptButton = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREENS.Logged
      }
    });
  }
  handleBackButton = () => {
    Navigation.pop(this.props.componentId);
    this.props.clearUserData();
    this.props.clearPin();
  }

  render() {
    if (!!this.props.userData) {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../assets/images/background_light.png')}>

            <View style={styles.headerContainer}>
              <Text style={{ fontSize: 80, }}>Logowanie</Text>
            </View>

            <View style={styles.middleContainer}>
              <View style={{ flex: 3, paddingTop: 30 }}>
                <Image
                  style={{ width: 380, height: 380 }}
                  resizeMode="contain"
                  source={require('../../assets/images/photo.png')}
                />
              </View>

              <View style={{ flex: 1, paddingTop: 50, }}>
                <Text style={{ fontSize: 75, color: 'black', fontWeight: 'bold', }}>{this.props.userData.UserName}</Text>
              </View>

              <View style={{ flex: 1, marginTop: 130, alignItems: 'center' }}>

                <View style={styles.progressBar}>

                </View>

                <View style={{ flex: 1, marginTop: 20 }}>
                  <Text style={{ fontSize: 30 }}>Ekran zniknie za {this.state.timeLeft} sekundy</Text>
                </View>

              </View>

            </View>

            <View style={styles.bottomContainer}>

              <TouchableOpacity onPress ={this.handleBackButton} style={styles.backButton}>
                <Text style={{ fontSize: 35, color: 'black' }}>Anuluj</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.handleAcceptButton} style={styles.acceptButton}>
                <Text style={{ fontSize: 35, color: 'black' }}>Zatwierdź</Text>
              </TouchableOpacity>

            </View>

          </ImageBackground>


        </SafeAreaView>

      );
    }
    return(<View></View>)
  }

}


export default Login;
