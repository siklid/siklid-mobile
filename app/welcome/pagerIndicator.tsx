import {ThemeProps, useThemeColor} from '@/components/themed';
import {StyleSheet, View} from 'react-native';

export type PagerIndicatorProps = ThemeProps & View['props'] & {
  pages: number;
  activePage: number;
};

export function PagerIndicator(props: PagerIndicatorProps) {
  const {style, ...otherProps} = props;
  const themeProps = {light: props.lightColor, dark: props.darkColor};

  const color = useThemeColor(themeProps, 'indicator');
  const activeColor = useThemeColor(themeProps, 'activeIndicator');

  const indicatorStyle = [styles.indicator, {backgroundColor: color}];
  const activeStyle = [styles.indicator, {backgroundColor: activeColor}];

  const buildStyle = (index: number): object[] => (
      index === props.activePage - 1 ? activeStyle : indicatorStyle
  );

  return (
      <View style={[styles.container, style]}>
        <View style={styles.section}/>

        <View style={[styles.section, styles.middle]}>
          {Array.from({length: props.pages}, (_, i) => i).map((index) => (
              <View key={index} style={buildStyle(index)}{...otherProps}/>
          ))}
        </View>

        <View style={styles.section}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  section: {
    flex: 1,
  },
  beginning: {},
  middle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  end: {},
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
