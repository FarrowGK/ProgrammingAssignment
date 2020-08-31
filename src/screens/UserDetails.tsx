import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Linking, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import openMap from 'react-native-open-maps';

  let openDialScreen = (phoneNumber: any) => {
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${phoneNumber}`;
    }
    else {
      phoneNumber = `telprompt:${phoneNumber}`;
    }

    Linking.openURL(phoneNumber);
  };

const UserDetails = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState(navigation.getParam('phone'));
  const [location, setLocation] = useState({ latitude: parseInt(navigation.getParam('addressGeoLat')),
  longitude: parseInt(navigation.getParam('addressGeoLng')) });

  return(
    <View>
      <Text style={styles.name}> { navigation.getParam('name') } </Text>
      <Text style={styles.companyName}> { navigation.getParam('companyName') } </Text>
      <Text style={styles.headingStyles}> Contact Information </Text>
      <Text style={styles.plainText}> { navigation.getParam('email') } </Text>

      <Text style={styles.plainText}> { navigation.getParam('addressStreet') } </Text>
      <Text style={styles.plainText}> { navigation.getParam('addressSuite') } </Text>
      <Text style={styles.plainText}> { navigation.getParam('addressCity') } </Text>
      <Text style={styles.plainText}> { navigation.getParam('phone') } </Text>

      <Text style={styles.headingStyles}> Other Information </Text>
      <Text style={styles.plainText}> User Name: { navigation.getParam('username') } </Text>
      <Text style={styles.plainText}> Website: { navigation.getParam('website') } </Text>

      <TouchableOpacity onPress={() => openMap({ latitude: location.latitude, longitude: location.longitude })} >
        <Text style={styles.touchEventContainer}>Press to open Address in Maps</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openDialScreen(phoneNumber)} >
        <Text style={styles.touchEventContainer}>Press to make a phone call.</Text>
      </TouchableOpacity>
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
  name: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: "1%"
  },
  headingStyles: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: "2%"
  },
  companyName: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "100",
    marginBottom: "6%"
  },
  plainText: {
    fontSize: 15,
    marginBottom: "0.5%"
  },
  touchEventContainer: {
    backgroundColor: "pink",
    borderWidth: 5,
    padding: 20
  }
});

export default UserDetails;
