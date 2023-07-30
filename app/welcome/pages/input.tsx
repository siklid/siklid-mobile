import {StyleSheet} from 'react-native';
import {WelcomePageProps} from '@/app/welcome';
import {InvertedView} from '@/components/themed/InvertedView';
import {Header} from '@/components/elements/text/Header';

export default function Input(props: WelcomePageProps) {
  return (
      <InvertedView key={props.key} style={styles.container}>
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
