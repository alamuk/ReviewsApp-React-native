import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import AboutStack from './AboutStack';
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="Main" component={HomeStack} />
        <Drawer.Screen name="About GameZone" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
