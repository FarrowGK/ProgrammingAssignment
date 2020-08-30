import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetails = ({ navigation }) => {
  return(
    <View>
      <Text> { navigation.getParam('name') } </Text>
      <Text> { navigation.getParam('username') } </Text>
      <Text> { navigation.getParam('email') } </Text>
      <Text> { navigation.getParam('addressStreet') } </Text>
      <Text> { navigation.getParam('addressSuite') } </Text>
      <Text> { navigation.getParam('addressCity') } </Text>
      <Text> { navigation.getParam('addressGeoLat') } </Text>
      <Text> { navigation.getParam('addressGeoLng') } </Text>
      <Text> { navigation.getParam('phone') } </Text>
      <Text> { navigation.getParam('website') } </Text>
      <Text> { navigation.getParam('companyName') } </Text>
      <Text> { navigation.getParam('catchPhrase') } </Text>
      <Text> { navigation.getParam('bs') } </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserDetails
