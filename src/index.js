import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {getUsers} from './store/actions';

const ProgrammingAssignment = (props) => {
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch;

  return (
    <View style={styles.container}>
      <Text> Hello and Welcome To my React Native App </Text>
      <Text>{data.users}</Text>
      <Button title="Click Me" onPress={() => dispatch(getUsers)} />
    </View>
  );
};

export default ProgrammingAssignment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
