import * as React from 'react';
import { View, Image, SafeAreaView, ImageBackground, Text, TouchableOpacity, Alert, TouchableHighlight } from 'react-native';
import styles from './styles';
import { Navigation } from 'react-native-navigation';
import { SCREENS } from '../../../constants/screen';

export interface Props {
  componentId: string,
  login: Function,
  userName: string,
  showConfirmationScreen: boolean,
  userData: any,
  clearUserData: Function,
}

interface State {
  pinEntered: string;
  pressed1: boolean,
  pressed2: boolean,
  pressed3: boolean,
  pressed4: boolean,
  pressed5: boolean,
  pressed6: boolean,
  pressed7: boolean,
  pressed8: boolean,
  pressed9: boolean,
  pressed0: boolean,
}

class Keyboard extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pinEntered: '',
      pressed1: false,
      pressed2: false,
      pressed3: false,
      pressed4: false,
      pressed5: false,
      pressed6: false,
      pressed7: false,
      pressed8: false,
      pressed9: false,
      pressed0: false,
    };
  }

  clearPin = () => {
    
    this.setState({ pinEntered: "" });
  }

  setPin = (num: string) => {
    
    if (!this.props.userData) {
      let pin = this.state.pinEntered;
      if (pin.length < 4) {
        pin = pin + num;
        this.setState({ pinEntered: pin });
      }
      if (pin.length == 4) {
        this.props.login(pin);
        this.clearPin();
      }
    }
  }

  componentDidMount() { }

  componentWillReceiveProps(newProps: Props) {
    if (!!newProps.userData) {
      if (newProps.userData.IsSuccess) {
        Navigation.push(this.props.componentId, {
          component: {
            name: SCREENS.Logged,
            passProps: {
              clearPin: this.clearPin
            }
          }
        });
      }
      else {
        this.clearPin();
        this.props.clearUserData();
        Alert.alert(
          'Błędny kod', '', [{ text: 'OK' }]
        );
      }
    }

  }

  createEmptyDot = () => {
    return {
      width: 25,
      height: 25,
      borderRadius: 25/2,
      backgroundColor: '#FFFFFF50',
      borderColor: 'purple',
      borderWidth: 2,
      margin: 5,
    }
  }

  createFullDot = () => {
    return {
      width: 25,
      height: 25,
      borderRadius: 25/2,
      backgroundColor: 'purple',
      borderColor: 'purple',
      borderWidth: 2,
      margin: 5,
    }
  }

  createDot1 = () => {
    if(this.state.pinEntered.length <= 0){
      return this.createEmptyDot();
    }
    else{
      return this.createFullDot();
    }
  }
  createDot2 = () => {
    if(this.state.pinEntered.length <= 1){
      return this.createEmptyDot();
    }
    else{
      return this.createFullDot();
    }
  }
  createDot3 = () => {
    if(this.state.pinEntered.length <= 2){
      return this.createEmptyDot();
    }
    else{
      return this.createFullDot();
    }
  }
  createDot4 = () => {
    if(this.state.pinEntered.length <= 3){
      return this.createEmptyDot();
    }
    else{
      return this.createFullDot();
    }
  }

  handleBackButton = () => {
    Navigation.pop(this.props.componentId);
  }

  

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../assets/images/background_light.png')}>

          <View style={styles.headerContainer}>
            <Text style={{ fontSize: 60, }}>Wprowadź kod</Text>
          </View>

          <View style={styles.keyboardContainer}>
            <View style={styles.inputContainer}>
              <View style={{ flex: 1 }}></View>

              <View style={styles.inputContainer}>
                <View style={this.createDot1()}></View>
                <View style={this.createDot2()}></View>
                <View style={this.createDot3()}></View>
                <View style={this.createDot4()}></View>
              </View>

              <View style={{ flex: 1 }}></View>
            </View>

            <View style={styles.keyboard}>
              <View style={{ flex: 1, }}></View>

              <View style={styles.keyboardIn}>

                <View style={styles.keyboardRow}>
                  <View style={styles.keyboardButton}>
                    <TouchableHighlight
                    underlayColor="white"
                    onPress={() => {
                      let a = this.state.pinEntered.length;
                      if (a < 4) this.setPin('1');
                    }}
                    onHideUnderlay={() => {
                      this.setState({ pressed1: false });
                    }}
                    onShowUnderlay={() => {
                      this.setState({ pressed1: true });
                    }}
                    >
                      <View>
                        <View style={[this.state.pressed1 ? styles.circlePress : styles.circle]}>
                          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[this.state.pressed1 ? styles.keyboardNumPress : styles.keyboardNum]}>1</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableHighlight>
                  </View>

                  <View style={styles.keyboardButton}>
                    <TouchableHighlight 
                    underlayColor="white"
                    onPress={() => {
                      let a = this.state.pinEntered.length;
                      if (a < 4) this.setPin('2');
                    }}
                    onHideUnderlay={() => {
                      this.setState({ pressed2: false });
                    }}
                    onShowUnderlay={() => {
                      this.setState({ pressed2: true });
                    }}>
                      <View style={[this.state.pressed2 ? styles.circlePress : styles.circle]}>
                        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={[this.state.pressed2 ? styles.keyboardNumPress : styles.keyboardNum]}>2</Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                  </View>

                  <View style={styles.keyboardButton}>
                    <TouchableHighlight 
                    underlayColor="white"
                    onPress={() => {
                      let a = this.state.pinEntered.length;
                      if (a < 4) this.setPin('3');
                    }}
                    onHideUnderlay={() => {
                      this.setState({ pressed3: false });
                    }}
                    onShowUnderlay={() => {
                      this.setState({ pressed3: true });
                    }}>
                      <View style={[this.state.pressed3 ? styles.circlePress : styles.circle]}>
                        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={[this.state.pressed3 ? styles.keyboardNumPress : styles.keyboardNum]}>3</Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>

                <View style={styles.keyboardRow}>
                  <View style={styles.keyboardButton}>
                    <TouchableHighlight 
                    underlayColor="white"
                    onPress={() => {
                      let a = this.state.pinEntered.length;
                      if (a < 4) this.setPin('4');
                    }}
                    onHideUnderlay={() => {
                      this.setState({ pressed4: false });
                    }}
                    onShowUnderlay={() => {
                      this.setState({ pressed4: true });
                    }}>
                      <View style={[this.state.pressed4 ? styles.circlePress : styles.circle]}>
                        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={[this.state.pressed4 ? styles.keyboardNumPress : styles.keyboardNum]}>4</Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                  </View>

                  <View style={styles.keyboardButton}>
                    <TouchableHighlight 
                    underlayColor="white"
                    onPress={() => {
                      let a = this.state.pinEntered.length;
                      if (a < 4) this.setPin('5');
                    }}
                    onHideUnderlay={() => {
                      this.setState({ pressed5: false });
                    }}
                    onShowUnderlay={() => {
                      this.setState({ pressed5: true });
                    }}>
                      <View style={[this.state.pressed5 ? styles.circlePress : styles.circle]}>
                        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={[this.state.pressed5 ? styles.keyboardNumPress : styles.keyboardNum]}>5</Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                  </View>

                  <View style={styles.keyboardButton}>
                    <TouchableHighlight 
                    underlayColor="white"
                    onPress={() => {
                      let a = this.state.pinEntered.length;
                      if (a < 4) this.setPin('6');
                    }}
                    onHideUnderlay={() => {
                      this.setState({ pressed6: false });
                    }}
                    onShowUnderlay={() => {
                      this.setState({ pressed6: true });
                    }}>
                      <View style={[this.state.pressed6 ? styles.circlePress : styles.circle]}>
                        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={[this.state.pressed6 ? styles.keyboardNumPress : styles.keyboardNum]}>6</Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>

                <View style={styles.keyboardRow}>
                  <View style={styles.keyboardButton}>
                    <TouchableHighlight 
                    underlayColor="white"
                    onPress={() => {
                      let a = this.state.pinEntered.length;
                      if (a < 4) this.setPin('7');
                    }}
                    onHideUnderlay={() => {
                      this.setState({ pressed7: false });
                    }}
                    onShowUnderlay={() => {
                      this.setState({ pressed7: true });
                    }}>
                      <View style={[this.state.pressed7 ? styles.circlePress : styles.circle]}>
                        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={[this.state.pressed7 ? styles.keyboardNumPress : styles.keyboardNum]}>7</Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                  </View>

                  <View style={styles.keyboardButton}>
                    <TouchableHighlight 
                    underlayColor="white"
                    onPress={() => {
                      let a = this.state.pinEntered.length;
                      if (a < 4) this.setPin('8');
                    }}
                    onHideUnderlay={() => {
                      this.setState({ pressed8: false });
                    }}
                    onShowUnderlay={() => {
                      this.setState({ pressed8: true });
                    }}>
                      <View style={[this.state.pressed8 ? styles.circlePress : styles.circle]}>
                        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={[this.state.pressed8 ? styles.keyboardNumPress : styles.keyboardNum]}>8</Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                  </View>

                  <View style={styles.keyboardButton}>
                    <TouchableHighlight 
                    underlayColor="white"
                    onPress={() => {
                      let a = this.state.pinEntered.length;
                      if (a < 4) this.setPin('9');
                    }}
                    onHideUnderlay={() => {
                      this.setState({ pressed9: false });
                    }}
                    onShowUnderlay={() => {
                      this.setState({ pressed9: true });
                    }}>
                      <View style={[this.state.pressed9 ? styles.circlePress : styles.circle]}>
                        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={[this.state.pressed9 ? styles.keyboardNumPress : styles.keyboardNum]}>9</Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>

                <View style={styles.keyboardRow}>

                  <View style={styles.keyboardButton}>
                  </View>

                  <View style={styles.keyboardButton}>
                    <TouchableHighlight 
                    underlayColor="white"
                    onPress={() => {
                      let a = this.state.pinEntered.length;
                      if (a < 4) this.setPin('0');
                    }}
                    onHideUnderlay={() => {
                      this.setState({ pressed0: false });
                    }}
                    onShowUnderlay={() => {
                      this.setState({ pressed0: true });
                    }}>
                      <View style={[this.state.pressed0 ? styles.circlePress : styles.circle]}>
                        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={[this.state.pressed0 ? styles.keyboardNumPress : styles.keyboardNum]}>0</Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                  </View>

                  <View style={styles.keyboardButton}>
                  </View>
                </View>

              </View>

              <View style={{ flex: 1, }}></View>
            </View>

          </View>

          <TouchableOpacity onPress={this.handleBackButton} style={styles.bottomContainer}>
            <Text style={{ fontSize: 35, color: 'black', }}>Anuluj</Text>
          </TouchableOpacity>

        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default Keyboard;
