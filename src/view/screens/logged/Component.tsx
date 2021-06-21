import * as React from 'react';
import { View, SafeAreaView, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Navigation } from 'react-native-navigation';
import images from '../../../constants/imageConstants';
//import { useState } from 'react';

export interface Props {
  userData: any;
  update: Function,
  componentId: string,
  clearUserData: Function;
}

interface State {
  timeLeft: number,
  timer: any,
  time: string,
  userFirstName: string,
  event: string,
  firstOption: string,
  secondOption: string,
  updateEvent: number,
  keyboardSource: any,
}


class Logged extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      timeLeft: 5,
      timer: null,
      time: '',
      userFirstName: '',
      event: '',
      firstOption: '',
      secondOption: '',
      updateEvent: 0,
      keyboardSource: images.keyboardLight,
    };
  }

  componentDidMount() {
    this.countTime();
    this.getCurrentTime();
    this.getFirstName();
    this.generateEventTypes();
  }

  componentWillReceiveProps() {
    if (!!this.props.userData) {
      this.getFirstName();
    }
  }

  getFirstName = () => {
    let fullName = this.props.userData.UserFullName;
    let name = fullName.split(' ');
    let firstName = name[1];
    this.setState({ userFirstName: firstName })
  }

  createAvatar = () => {
    let color = this.props.userData.Color;
    return {
      width: 140,
      height: 140,
      borderRadius: 150 / 2,
      backgroundColor: color,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 20,
    } 
  }
  
  handleBackButton = () => {
    this.setState({timeLeft: 0});
    this.props.clearUserData();
    clearInterval(this.state.timer);
    Navigation.popToRoot(this.props.componentId);
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
      this.props.clearUserData();
      Navigation.popToRoot(this.props.componentId);
    }
  }

  getCurrentTime = () => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let minutesStr, hoursStr;

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

    this.setState({ time: hoursStr + ':' + minutesStr })
  }

  generateEventTypes = () => {
    let eventName = '';
    let firstOptionName = '';
    let secondOptionName = '';
    switch (this.props.userData.EventTypeId) {
      case 100:
        eventName = "WEJŚCIE";
        firstOptionName = "WYJŚCIE";
        secondOptionName = "WYJŚCIE SŁUŻBOWE";
        break;
      case 200:
        eventName = "WYJŚCIE";
        firstOptionName = "WEJŚCIE";
        secondOptionName = "WYJŚCIE SŁUŻBOWE";
        break;
      case 300:
        eventName = "WYJŚCIE SŁUŻBOWE";
        firstOptionName = "WEJŚCIE";
        secondOptionName = "WYJŚCIE";
        break;
    }
    this.setState({ event: eventName, firstOption: firstOptionName, secondOption: secondOptionName })
  }

  changeEventType = (newEvent: string) => {
    //debugger
    //clearInterval(this.state.timer);
    //this.setState({timeLeft: 5});
    //this.countTime();
    switch(newEvent){
      case "ERROR":
        this.setState({updateEvent: 400});
        this.props.update(this.props.userData.CardScanLogId, 400);
        break;
      case "WEJŚCIE":
        this.setState({updateEvent: 100, event: "WEJŚCIE", firstOption: "WYJŚCIE", secondOption: "WYJŚCIE SŁUŻBOWE"});
        this.props.update(this.props.userData.CardScanLogId, 100);
        break;
      case "WYJŚCIE":
        this.setState({updateEvent: 200, event: "WYJŚCIE", firstOption: "WEJŚCIE", secondOption: "WYJŚCIE SŁUŻBOWE"});
        this.props.update(this.props.userData.CardScanLogId, 200);
        break;
      case "WYJŚCIE SŁUŻBOWE":
        this.setState({updateEvent: 300, event: "WYJŚCIE SŁUŻBOWE", firstOption: "WEJŚCIE", secondOption: "WYJŚCIE"});
        this.props.update(this.props.userData.CardScanLogId, 300);
        break;
    }
    //this.props.clearUserData();
    //Navigation.popToRoot(this.props.componentId);
  }

  render() {
    if (!!this.props.userData) {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../assets/images/background_light.png')}>

            <View style={styles.headerContainer}>
              <Text style={{ fontSize: 60, }}>Cześć {this.state.userFirstName}!</Text>
            </View>

            <View style={styles.middleContainer}>

              <View style={this.createAvatar()}>
                <Text style={{ color: 'white', fontSize: 60 }}>{this.props.userData.UserAcronym}</Text>
              </View>

              <View style={{ flex: 4.5, paddingTop: 20, alignItems: 'center', justifyContent: 'center', paddingBottom: 40 }}>

                <Text style={{ fontSize: 30, color: "black", paddingBottom: 10, paddingTop: 10 }}>Rodzaj odbicia: </Text>

                <TouchableOpacity onPress={() => {this.handleBackButton()}}>
                  <View style={{ width: 470, height: 75, backgroundColor: '#73016f', borderColor: '#73016f', borderWidth: 2, borderRadius: 100, alignItems: 'center', justifyContent: 'center', margin: 7, elevation: 10 }}>
                    <Text style={{ fontSize: 45, color: 'white' }}>{this.state.event}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.changeEventType(this.state.firstOption)}}>
                  <View style={{  width: 450, height: 70, backgroundColor: '#b6b6b6', borderColor: '#b6b6b6', borderWidth: 2, borderRadius: 100, alignItems: 'center', justifyContent: 'center', margin: 6, elevation: 10 }}>
                    <Text style={{ fontSize: 40, color: 'white' }}>{this.state.firstOption}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.changeEventType(this.state.secondOption)}}>
                  <View style={{  width: 450, height: 70, backgroundColor: '#b6b6b6', borderColor: '#b6b6b6', borderWidth: 2, borderRadius: 100, alignItems: 'center', justifyContent: 'center', margin: 6, elevation: 10 }}>
                    <Text style={{ fontSize: 40, color: 'white' }}>{this.state.secondOption}</Text>
                  </View>
                </TouchableOpacity>

              </View>

              <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center', paddingTop: 70 }}>
                <Text style={{ color: 'black', fontSize: 30, }}>Godzina zgłoszenia:</Text>
                <Text style={{ color: 'black', fontSize: 90, }}>{this.props.userData.WorkEntryTime}</Text>
              </View>

              <View style={{ flex: 0.5, paddingTop: 70 }}>
                <Text style={{ fontSize: 25 }}>Ekran zniknie za {this.state.timeLeft} sekundy</Text>
              </View>

            </View>

            <View style={styles.bottomContainer}>

              <TouchableOpacity  style={styles.backButton} onPress={this.handleBackButton}>
                <Text style={{ fontSize: 35, color: 'black'}}>Zamknij</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {this.changeEventType("ERROR"); Navigation.popToRoot(this.props.componentId);}} style={styles.backButton}>
                <Text style={{ fontSize: 35, color: 'black'}}>Anuluj</Text>
              </TouchableOpacity>

            </View>

          </ImageBackground>


        </SafeAreaView>

      );
    }
    return (<View></View>)
  }

}


export default Logged;
