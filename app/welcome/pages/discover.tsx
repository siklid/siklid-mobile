import {View} from '@/components/themed/View';
import {Text} from '@/components/themed/Text';
import {StyleSheet} from 'react-native';
import {WelcomePageProps} from '@/app/welcome';

export default function Discover(props: WelcomePageProps) {
  return (
      <View key={props.key} style={styles.container}>
        <Text>Discover</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
