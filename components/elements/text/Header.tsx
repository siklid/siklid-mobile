import {ThemeProps, useThemeColor} from '@/components/themed';
import {Text, TextProps} from '@/components/themed/Text';
import {TextStyle} from 'react-native';

type HeaderSize = 'sm' | 'md' | 'lg' | number;

export type HeaderProps = ThemeProps & TextProps & {
  size?: HeaderSize;
  weight?: TextStyle['fontWeight'];
};

function headerSizeToNumber(size: HeaderSize): number {
  switch (size) {
    case 'sm':
      return 16;
    case 'md':
      return 24;
    case 'lg':
      return 32;
    default:
      return size;
  }
}

export function Header(props: HeaderProps) {
  const {
    style,
    lightColor,
    darkColor,
    size,
    ...otherProps
  } = props;
  const color = useThemeColor({light: lightColor, dark: darkColor}, 'header');
  const fontSize = headerSizeToNumber(size ?? 'lg');
  const fontWeight = props.weight ?? '600';
  return (
      <Text style={[{color, fontSize, fontWeight}, style]} {...otherProps} />
  );
}
