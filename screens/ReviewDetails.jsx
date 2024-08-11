import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../Styles/global';
import Card from '../shared/Card';

export default function ReviewDetails({ route }) {
  // console.log(route);

  const item = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}> {item.title}</Text>
        <Text style={globalStyles.paragraph}> {item.body}</Text>
        <Text style={globalStyles.paragraph}> {item.rating}</Text>
      </Card>
    </View>
  );
}
