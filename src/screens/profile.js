import React from 'react'
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
const Profile = ({navigation}) => {
  return (
    <View>
      <Ionicons 
      name="add-circle-sharp"
       size={24}
       color="black"
       onPress={ () => navigation.navigate('Home'
      )}
       />
    </View>
  )
}

export default Profile