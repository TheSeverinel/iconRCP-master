import { Navigation } from 'react-native-navigation';

import { SCREENS } from '../../constants/screen';

import * as Splash from './splash';
import * as Home from './home';
import * as Settings from './settings';
import * as Keyboard from './keyboard';
import * as Login from './login';
import * as Logged from './logged';

const registerComponentWithRedux = (redux: any) => (
  name: string,
  component: any,
) => {
  Navigation.registerComponentWithRedux(
    name,
    () => component,
    redux.Provider,
    redux.store,
  );
};

export function registerScreens(redux: any) {
  registerComponentWithRedux(redux)(SCREENS.Splash, Splash.default);
  registerComponentWithRedux(redux)(SCREENS.Home, Home.default);
  registerComponentWithRedux(redux)(SCREENS.Settings, Settings.default);
  registerComponentWithRedux(redux)(SCREENS.Keyboard, Keyboard.default);
  registerComponentWithRedux(redux)(SCREENS.Login, Login.default);
  registerComponentWithRedux(redux)(SCREENS.Logged, Logged.default);

}
