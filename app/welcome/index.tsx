import {StatusBar} from 'expo-status-bar';
import {StyleSheet, useColorScheme} from 'react-native';
import {View} from '@/components/themed/View';
import {Pager} from '@/components/themed/Pager';
import Input from '@/app/welcome/pages/input';
import Discover from '@/app/welcome/pages/discover';
import Study from '@/app/welcome/pages/study';

export type WelcomePageProps = {
  key: string;
  theme: 'light' | 'dark';
};

export default function Welcome() {
  const theme = useColorScheme() ?? 'light';
  return (
      <View style={styles.container}>
        <StatusBar style="auto"/>
        <Pager style={styles.pager}>
          <Input theme={theme} key="0"/>
          <Discover theme={theme} key="1"/>
          <Study theme={theme} key="2"/>
        </Pager>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pager: {
    flex: 1,
  },
});
