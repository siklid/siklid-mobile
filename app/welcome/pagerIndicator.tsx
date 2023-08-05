import {ThemeProps, useThemeColor} from '@/components/themed';
import {StyleSheet, View} from 'react-native';

export type PagerIndicatorProps = ThemeProps & View['props'] & {
  pages: number;
  activePage: number;
};

export function PagerIndicator(props: PagerIndicatorProps) {
  const {style, ...otherProps} = props;
  const color = useThemeColor({}, 'indicator');
  const activeColor = useThemeColor({}, 'activeIndicator');

  return (
      <View style={[styles.indicatorContainer, style]}>
        {Array.from({length: props.pages}, (_, i) => i).map((index) => (
            <View
                key={index}
                style={[
                  styles.indicator,
                  index === props.activePage - 1
                      ? {backgroundColor: activeColor}
                      : {backgroundColor: color},
                ]}
                {...otherProps}
            />
        ))}
      </View>
  );
}

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    height: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '33%',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
