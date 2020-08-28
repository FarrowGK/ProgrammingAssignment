import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ProgrammingAssignment = (props) => {
  const [users, getUsers] = useState([]);

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
      <Text> {users[0].address.street} </Text>
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
