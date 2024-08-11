import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import DrawerNavigator from './routes/DrawerNavigator';

// import DrawerNavigator from './routes/DrawerNavigator';

export default function App() {
  const [fontsLoading] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoading) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <>
      <DrawerNavigator />
    </>
  );
}
