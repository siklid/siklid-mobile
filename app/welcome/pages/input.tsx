import {StyleSheet} from 'react-native';
import {WelcomePageProps} from '@/app/welcome';
import {InvertedView} from '@/components/themed/InvertedView';
import {Header} from '@/components/elements/text/Header';

import {PagerIndicator} from '@/app/welcome/pagerIndicator';

export default function Input(props: WelcomePageProps) {
  return (
      <InvertedView key={props.key} style={styles.container}>
        <PagerIndicator pages={3} activePage={1}/>
        <Header>Input</Header>
        <Header size="sm">Upload and create your own flashcard</Header>
      </InvertedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
