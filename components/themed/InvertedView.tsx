import {View as RNView} from 'react-native';
import {ThemeProps, useThemeColor} from '@/components/themed/index';

export type ViewProps = ThemeProps & RNView['props'];

export function InvertedView(props: ViewProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
      {light: lightColor, dark: darkColor}, 'invertedBackground',
  );

  return <RNView style={[{backgroundColor}, style]} {...otherProps} />;
}
