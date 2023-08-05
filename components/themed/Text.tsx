import {Text as RNText} from 'react-native';
import {ThemeProps, useThemeColor} from '@/components/themed/index';
import {getLocales} from 'expo-localization';

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
        light: lightColor,
        dark: darkColor,
      },
      'text');

  const {languageCode} = getLocales()[0];
  const isArabic = languageCode === 'ar' || languageCode === 'fa';
  const fontFamily = isArabic ? 'ArabicFont' : 'LatinFont';

  return <RNText style={[{color, fontFamily}, style]} {...otherProps} />;
}
