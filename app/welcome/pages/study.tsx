import {StyleSheet} from 'react-native';
import {WelcomePageProps} from '@/app/welcome';
import {InvertedView} from '@/components/themed/InvertedView';
import {PagerIndicator} from '@/app/welcome/pagerIndicator';
import {Header} from '@/components/elements/text/Header';

export default function Study(props: WelcomePageProps) {
  return (
      <InvertedView key={props.key} style={styles.container}>
        <PagerIndicator pages={3} activePage={3}/>
        <Header>Study</Header>
        <Header size="sm">Practice your flashcards whenever you want</Header>
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
