import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title }) {
  const navigation = useNavigation();

  const openManuHandler = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
      <MaterialIcons
        name="menu"
        size={20}
        onPress={openManuHandler}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 10,
  },

  headerTitle: {
    flexDirection: 'row',
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },

  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
