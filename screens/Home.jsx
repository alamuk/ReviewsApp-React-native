import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../Styles/global';
import Card from '../shared/Card';

export default function Home({ navigation }) {
  const [review] = useState([
    { title: 'Zelda , Breath of fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gota catch them all', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'This is a rating text', rating: 2, body: 'lorem ipsum', key: '3' },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={review}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
