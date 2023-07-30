import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {View} from '@/components/themed/View';
import {Pager} from '@/components/themed/Pager';
import Input from '@/app/welcome/pages/input';
import Discover from '@/app/welcome/pages/discover';
import Study from '@/app/welcome/pages/study';

export type WelcomePageProps = {
  key: string;
};

export default function Welcome() {
  return (
      <View style={styles.container}>
        <StatusBar style="auto"/>
        <Pager style={styles.pager}>
          <Input key="0"></Input>
          <Discover key="1"></Discover>
          <Study key="2"></Study>
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
