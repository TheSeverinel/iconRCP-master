import * as React from 'react';
import { TouchableOpacity, TextProps, Image } from 'react-native';

import { GLOBAL } from '../styles/global';
import { CText } from './custom';

type Callback = () => any;

export interface Props {
  title?: string;
  onClick: Callback;
  style?: TextProps;
  imgSource: string; 
  width: number;
  height: number;
  marginHorizontal: number
}

/**
 * Image Button
 
const BUTTON_IMAGE = ({ onClick, width, height, marginHorizontal, imgSource }: Props) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    onPress={() => onClick()}
  >
    <Image
      style={{width: width, height: height, marginHorizontal: marginHorizontal}}
      resizeMode="contain"
      source = {require(imgSource.toString())}
    />
  </TouchableOpacity>
);

export { BUTTON_IMAGE };
*/
/**
 * Default Button
 
const BUTTON_DEFAULT = ({ title, onClick, style }: Props) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.primary, GLOBAL.LAYOUT.shadow, style]}
    onPress={() => onClick()}
  >
    <CText style={GLOBAL.CTA.Style.primaryText}>{title}</CText>
  </TouchableOpacity>
);
export { BUTTON_DEFAULT };
*/


