import {Text as RNText} from 'react-native';
import {ThemeProps, useThemeColor} from '@/components/themed/index';

export type TextProps = ThemeProps & RNText['props'];

export function Text(props: TextProps) {
  const {
    style,
    lightColor,
    darkColor,
    ...otherProps
  } = props;
  const color = useThemeColor(
      {
        light:
        lightColor,
        dark: darkColor,
      },
      'text');

  return <RNText style={[{color}, style]} {...otherProps} />;
}
