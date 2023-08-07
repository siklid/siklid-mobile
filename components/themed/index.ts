import Colors from '@/constants/Colors';
import {useColorScheme} from 'react-native';

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  return colorFromProps ?? Colors[theme][colorName];
}

export type Size = 'sm' | 'md' | 'lg' | number;

export function sizeToNumber(size: Size): number {
  if (typeof size === 'number') {
    return size;
  }

  switch (size) {
    case 'sm':
      return 16;
    case 'md':
      return 24;
    case 'lg':
      return 32;
  }
}
