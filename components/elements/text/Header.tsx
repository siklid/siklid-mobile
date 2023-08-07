import {sizeToNumber, ThemeProps, useThemeColor} from '@/components/themed';
import {Text, TextProps} from '@/components/themed/Text';
import {TextStyle} from 'react-native';

type HeaderSize = 'sm' | 'md' | 'lg' | number;

export type HeaderProps = ThemeProps & TextProps & {
  size?: HeaderSize;
  weight?: TextStyle['fontWeight'];
};

export function Header(props: HeaderProps) {
  const {
    style,
    lightColor,
    darkColor,
    size,
    ...otherProps
  } = props;
  const color = useThemeColor({light: lightColor, dark: darkColor}, 'header');
  const fontSize = sizeToNumber(size ?? 'lg');
  const lineHeight = fontSize * 1.5;
  const fontWeight = props.weight ?? '600';
  return (
      <Text style={[
        {color, fontSize, fontWeight, lineHeight},
        style]} {...otherProps} />
  );
}
