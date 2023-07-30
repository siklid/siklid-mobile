import {View as RNView} from 'react-native';
import {ThemeProps, useThemeColor} from '@/components/themed/index';

export type ViewProps = ThemeProps & RNView['props'];

export function View(props: ViewProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor({light: lightColor, dark: darkColor},
      'background');

  return <RNView style={[{backgroundColor}, style]} {...otherProps} />;
}
