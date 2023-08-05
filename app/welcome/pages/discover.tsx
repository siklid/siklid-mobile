import {StyleSheet} from 'react-native';
import {WelcomePageProps} from '@/app/welcome';
import {InvertedView} from '@/components/themed/InvertedView';
import {PagerIndicator} from '@/app/welcome/pagerIndicator';
import {Header} from '@/components/elements/text/Header';

export default function Discover(props: WelcomePageProps) {
  return (
      <InvertedView key={props.key} style={styles.container}>
        <PagerIndicator pages={3} activePage={2}/>
        <Header>Discover</Header>
        <Header size="sm">Search and find flashcards</Header>
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
