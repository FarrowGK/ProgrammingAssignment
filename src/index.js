import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ProgrammingAssignment = (props) => {
  const [users, getUsers] = useState([
    {
      address: {
        city: '',
        geo: {lat: '', lng: ''},
        street: '',
        suite: '',
        zipcode: '',
      },
      company: {
        bs: '',
        catchPhrase: '',
        name: '',
      },
      email: '',
      id: -1,
      name: '',
      phone: '',
      username: '',
      website: '',
    },
  ]);

  const getUsersFromApiHandler = async () => {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      let json = await response.json();
      getUsers(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text> Hello and Welcome To my React Native App </Text>
      <Text>{users[0].name}</Text>
      <Button
        title="Click Me"
        onPress={() => {
          getUsersFromApiHandler();
        }}
      />
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
