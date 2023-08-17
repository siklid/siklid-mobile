import {StyleSheet, View} from 'react-native';
import {WelcomePageProps} from '@/app/welcome';
import {InvertedView} from '@/components/themed/InvertedView';
import {Header} from '@/components/elements/text/Header';

import {PagerIndicator} from '@/app/welcome/pagerIndicator';
import {Image} from 'expo-image';
import Sizes from '@/constants/Sizes';
import Colors from '@/constants/Colors';
import {Button} from '@/components/elements/button/Button';

export default function Input(props: WelcomePageProps) {
  return (
      <InvertedView key={props.key} style={styles.container}>
        <View style={styles.indicator}>
          <PagerIndicator pages={3} activePage={1}/>
        </View>

        <View style={styles.text}>
          <Header style={styles.mainText}>Input</Header>
          <Header style={styles.subText} size="sm">
            Upload and create your own flashcard</Header>
        </View>

        <View style={styles.imageContainer}>
          <Image
              source={require('@/assets/images/welcome/input.svg')}
              style={styles.image}
              contentFit={'contain'}
          />
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button text="Get Started"/>
          </View>
        </View>
      </InvertedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  indicator: {
    marginTop: Sizes.spacing.xl,
    marginBottom: Sizes.spacing.xl * 2,
    padding: Sizes.spacing.md,
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Sizes.spacing.xl * 2,
    marginBottom: Sizes.spacing.xl * 2,
  },
  mainText: {
    textAlign: 'center',
    marginBottom: Sizes.spacing.lg,
  },
  subText: {
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    width: 300,
    height: 300,
    position: 'absolute',
    bottom: -73,
  },
  buttonContainer: {
    backgroundColor: Colors.light.background,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: Sizes.radius.xl * 2 + 7,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: Sizes.device.width / 2,
  },
});
