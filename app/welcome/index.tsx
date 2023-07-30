import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {View} from '@/components/themed/View';
import {Text} from '@/components/themed/Text';

export default function Welcome() {
  return (
      <View style={styles.container}>
        <StatusBar style="auto"/>
        <Text>Welcome</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
