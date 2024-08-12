import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { globalStyles } from '../Styles/global';
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [review, setReview] = useState([
    { title: 'Zelda , Breath of fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gota catch them all', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'This is a rating text', rating: 2, body: 'lorem ipsum', key: '3' },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReview((currentReview) => {
      return [review, ...currentReview];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="fade">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />

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

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    alignItems: 'center',
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 1,
    alignSelf: 'center',
  },

  modalClose: {
    marginTop: 50,
    marginBottom: 0,
  },
});
