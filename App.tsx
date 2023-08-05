import Welcome from '@/app/welcome';
import {SplashScreen} from 'expo-router';
import {useFonts} from 'expo-font';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded] = useFonts({
    LatinFont: require('./assets/fonts/JosefinSans-Regular.ttf'),
    ArabicFont: require('./assets/fonts/NotoSansArabic-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Welcome/>
  );
}
