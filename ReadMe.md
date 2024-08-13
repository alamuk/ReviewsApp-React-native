### custom font import - expo
https://docs.expo.dev/versions/latest/sdk/font/#configuration-in-appjsonappconfigjs

### Control + Space bar
= to see the option of an object. 

### React Navigation 
https://reactnavigation.org/

### Formic Library 
https://formik.org/


### Navigation install
``` 
install: 
~ npm install @react-navigation/native
~ npx expo install react-native-screens react-native-safe-area-context
~ npx expo install react-native-gesture-handler react-native-reanimated
~ npm install @react-navigation/native-stack
~ npm install @react-navigation/drawer


* Layout Library
5. npm install react-native-screens 
6. npm install react-native-safe-area-context




* Animation Library
7. npm install @react-native-community/mask-view
8. npm install react-native-reanimated
9. npm install react-native-paper
10. fom validation = npm install yup 
https://www.npmjs.com/package/yup




Import: 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';



More-Deatails: Navigator.js


  <Button title="go to review details"
        onPress={() => navigation.navigate('ReviewDetails')}/>

[Function anonymous]
```

### {} / ''
``` 
jsx = {} bring the input = component={ReviewDetails}
normal Text = " " = name="ReviewDetails"
e.g =  <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
```

### navigation Bar: 
```
screenOptions: for Stake.navigate

options: {{
title: 'GameZone', 
headerStyle: { backgroundColor: '#eee',},
statusBarColor : 'white,
headerTintColor: '#fff', 
headerTitleAlign = 'certer', 
headerShown: false, 
headerBackVisible: false,
headerLeft:()=> {
return ( <Text> Hi <Text> )
}
}}

```
### letter spacing 

```
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './routes/HomeStack';
import About from './screens/About';
import AboutStack from './routes/AboutStack';
import DrawerNavigator from './routes/DrawerNavigator';

// import DrawerNavigator from './routes/DrawerNavigator';

export default function App() {
  const [fontsLoading,error] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (fontsLoading || error) {
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


```