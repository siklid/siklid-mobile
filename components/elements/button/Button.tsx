import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Size,
  sizeToNumber,
  ThemeProps,
  useThemeColor,
} from '@/components/themed';
import {Text} from '@/components/themed/Text';

export type ButtonProps = ThemeProps & TouchableOpacity['props'] & {
  text: string;
  onPress?: () => void;
  disabled?: boolean;
  size?: Size;
};

export function Button(props: ButtonProps) {
  const {
    style,
    children,
    disabled,
    onPress,
    ...otherProps
  } = props;
  const themeProps = {light: props.lightColor, dark: props.darkColor};

  const color = useThemeColor(themeProps, 'tabIconSelected');
  const disabledColor = useThemeColor(themeProps, 'tabIconDefault');

  const buttonStyle = [
    styles.button,
    style,
    {
      backgroundColor: disabled ? disabledColor : color,
    },
  ];

  const textStyle = [
    styles.text,
    {
      color: 'white',
      fontSize: sizeToNumber(props.size ?? 'sm'),
    },
  ];

  return (
      <TouchableOpacity
          style={buttonStyle}
          onPress={onPress}
          disabled={disabled}
          {...otherProps}
      >
        <Text style={textStyle}>{props.text}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 50,
  },
  text: {},
});
