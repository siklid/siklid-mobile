import PagerView from 'react-native-pager-view';
import {ThemeProps} from '@/components/themed/index';

export type PagerProps = ThemeProps & PagerView['props'];

export function Pager(props: PagerProps) {
  const {style, ...otherProps} = props;

  return <PagerView style={[style]} {...otherProps} />;
}
