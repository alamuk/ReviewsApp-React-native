import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { globalStyles } from '../Styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import CustomButton from '../shared/CustomButton';

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={ReviewSchema}
        onSubmit={(values, action) => {
          // console.log(values);
          action.resetForm();
          addReview(values);
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={formikProps.handleChange('title')}
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.title && formikProps.errors.title}
            </Text>

            <TextInput
              multiline
              minHeight={60}
              // minWidth={300}
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={formikProps.handleChange('body')}
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.body && formikProps.errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={formikProps.handleChange('rating')}
              value={formikProps.values.rating}
              keyboardType="numeric"
              onBlur={formikProps.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.rating && formikProps.errors.rating}
            </Text>
            <CustomButton text="submit" onPress={formikProps.submitForm} />
          </View>
        )}
      </Formik>
    </View>
  );
}
