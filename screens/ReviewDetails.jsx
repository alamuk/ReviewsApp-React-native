import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../Styles/global';
import Card from '../shared/Card';
import { images } from '../Styles/global';

export default function ReviewDetails({ route }) {
  const item = route.params;
  const rating = item.rating;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text> {item.title}</Text>
        <Text> {item.body}</Text>
        <View style={styles.rating}>
          <Text> GameZone Rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
