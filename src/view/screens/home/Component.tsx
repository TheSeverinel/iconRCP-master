import * as React from 'react';
import { View, ImageBackground, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import styles from './styles';
import { Navigation } from 'react-native-navigation';
import { SCREENS } from '../../../constants/screen';
import images from '../../../constants/imageConstants';

var global: any;

export interface Props {
  componentId: string;
  name: string;
  getTime: Function,
  serverTime: string,
  cardLogin: Function,
  userName: string,
  showConfirmationScreen: boolean,
  userData: any,
  clearUserData: Function,
}

interface State {
  currentTime: string,
  currentDay: string,
  backImageSource: any,
  logoSource: any,
  keyboardSource: any,
  modeSource: any,
  color: string,
  sTime: string,
  sDate: string,
  diffMin: number,
  diffHour: number,
  udp: any,
}

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentTime: '',
      currentDay: '',
      backImageSource: images.imageLight,
      logoSource: images.logoLight,
      keyboardSource: images.keyboardLight,
      modeSource: images.modeLight,
      color: 'black',
      sTime: '',
      sDate: '',
      diffHour: 0,
      diffMin: 0,
      udp: global.message,
    };
  }

  componentWillReceiveProps(newProps: Props) {
    if (!!newProps.userData) {
      if (newProps.userData.IsSuccess) {
        Navigation.push(this.props.componentId, {
          component: {
            name: SCREENS.Logged,
            passProps: {
              //clearPin: this.clearPin
            }
          }
        });
      }
      else {
        Alert.alert(
          'Błędny kod', '', [{ text: 'OK' }]
        );
        this.props.clearUserData();
      }
    }
  }

  componentDidMount() {

    let serverTime = this.getServerTime();

    this.getCurrentDay();
    this.getServerTime();
    setInterval(() => { this.getCurrentDay() }, 1000);
    setInterval(() => { this.getServerTime() }, 1000);
    setInterval(() => { this.checkUdp() }, 1000);
  }

  checkUdp = () => {
    if (global.message != this.state.udp) {
      this.setState({ udp: global.message });
      this.props.cardLogin(global.message);
    }
  }

  async fetchServerTime() {
    const response = await fetch(`https://demo.icon24.pl/WebApi/RCP/GetServerDate`);
    return await response.json();
  }


  getServerTime = async () => {
    let s = await this.fetchServerTime();
    if (!!s) {
      let ss = s.split(' ');
      let sDate = ss[0];
      let sTime = ss[1];
      this.setState({ currentTime: sTime });
      return sTime;
    }
    else {
      //let time = this.getCurrentTime();
      //this.setState({ currentTime: time });
      //return time;
      return 'empty';
    }
  }

  getCurrentTime() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let minutesStr, hoursStr, str;

    if (minutes < 10) {
      minutesStr = '0' + minutes;
    }
    else {
      minutesStr = minutes;
    }
    if (hours < 10) {
      hoursStr = '0' + hours;
    }
    else {
      hoursStr = hours;
    }
    str = hoursStr + ':' + minutesStr;
    this.setState({ currentTime: hoursStr + ':' + minutesStr })
    return str;
  }


  getCurrentDay = () => {
    let monthsArray = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
    let weekday = new Date().getDay();
    let day = new Date().getDate();
    let month = monthsArray[new Date().getMonth()];
    let weekdayStr;

    switch (weekday) {
      case 0: weekdayStr = 'niedziela';
        break;
      case 1: weekdayStr = 'poniedziałek';
        break;
      case 2: weekdayStr = 'wtorek';
        break;
      case 3: weekdayStr = 'środa';
        break;
      case 4: weekdayStr = 'czwartek';
        break;
      case 5: weekdayStr = 'piątek';
        break;
      case 6: weekdayStr = 'sobota';
        break;
    }
    let dateStr = weekdayStr + ', ' + day + ' ' + month;
    this.setState({ currentDay: dateStr })
  }

  handleKeyboardButton = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREENS.Keyboard
      }
    });
  }

  /*handleModeButton = () => {
    if (this.state.backImageSource == images.imageLight) {
      this.setState({ backImageSource: images.imageDark });
      this.setState({ keyboardSource: images.keyboardDark });
      this.setState({ modeSource: images.modeDark });
      this.setState({ logoSource: images.logoDark });
      this.setState({ color: 'white' });
    }
    else {
      this.setState({ backImageSource: images.imageLight });
      this.setState({ keyboardSource: images.keyboardLight });
      this.setState({ modeSource: images.modeLight });
      this.setState({ logoSource: images.logoLight });
      this.setState({ color: 'black' });
    }
  }*/

  render() {
    const { currentTime, currentDay } = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground style={{ width: '100%', height: '100%' }} source={this.state.backImageSource}>

          <View style={styles.container1}>
            <Text style={styles.clock} >{currentTime}</Text>
            <Text style={styles.date} >{currentDay}</Text>
          </View>

          <View style={styles.container2}>
            <Text numberOfLines={3} style={[styles.welcome, { color: this.state.color }]} >Cześć, {'\n'}przyłóż kartę lub wprowadź swój kod</Text>
          </View>

          <View style={styles.container3}>
            <View style={styles.container3a}></View>
            
            <View style={styles.container3b}>
              <View style={styles.container3b1}>
                <TouchableOpacity onPress={this.handleKeyboardButton}>
                  <Image
                    style={{ width: 102, height: 102, marginHorizontal: 15 }}
                    resizeMode="contain"
                    source={this.state.keyboardSource}
                  />
                </TouchableOpacity>

                {/*<TouchableOpacity onPress={this.handleModeButton}>                       przycisk do zmiany trybu dzień-noc 
                  <Image
                    style={{ width: 120, height: 120, marginHorizontal: 15 }}               czeka na implementacje funkcji
                    resizeMode="contain"
                    source={this.state.modeSource}
                  />
                </TouchableOpacity>*/}
              </View>


              <View style={styles.container3b2}>
                <Image
                  style={{ width: 200, height: 200 }}
                  resizeMode="contain"
                  source={this.state.logoSource}
                />
              </View>


            </View>
          </View>

        </ImageBackground>
      </View>
    );
  }
}

export default Home;


