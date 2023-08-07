// write a react native typescript function component that works as a Link component
// that takes an element as a child and onPress as a prop
// it could be disabled or not. if it is disabled, it should not be clickable
// it could be underlined or not. if it is underlined, it should have a line under it

import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Size,
  sizeToNumber,
  ThemeProps,
  useThemeColor,
} from '@/components/themed';
import {Text} from '@/components/themed/Text';

export type LinkProps = ThemeProps & TouchableOpacity['props'] & {
  text: string;
  onPress?: () => void;
  disabled?: boolean;
  underlined?: boolean;
  size?: Size;
};

export function Link(props: LinkProps) {
  const {
    style,
    children,
    disabled,
    underlined,
    onPress,
    ...otherProps
  } = props;
  const themeProps = {light: props.lightColor, dark: props.darkColor};

  const color = useThemeColor(themeProps, 'tabIconSelected');
  const disabledColor = useThemeColor(themeProps, 'tabIconDefault');

  const textStyle = [
    styles.text, {
      color: disabled ? disabledColor : color,
      fontSize: sizeToNumber(props.size ?? 'sm'),
    }];

  return (
      <TouchableOpacity
          style={[style]}
          onPress={onPress}
          disabled={disabled}
          {...otherProps}
      >

        <Text style={textStyle}>{props.text}</Text>

      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {},
});
