import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

// Data
import FavoriteList from '../../utilis/mock/favoriteList.json'
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

// Styles
const styles = StyleSheet.create({
  profileIcon: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  nameSize: {
    fontSize: 20,
  },
  list:{
    display : 'flex',
  },
  profile : {
    width : 50,
  }
});

const Favorite = () => {
  return (
    <View>
      <Text>Favorites</Text>
      <ScrollView style={styles.list}>
        {
          FavoriteList.contacts.map(
            item => {
              return (
                <TouchableOpacity style={styles.profile}>
                  <View key={item.id}
                    style={
                      {
                        width: '100%',
                        height: 60,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20
                      }
                    }
                  >
                    <Image
                      style={styles.profileIcon}
                      source={{
                        uri: item.photo,
                      }}
                    />
                  </View>
                </TouchableOpacity>

              )
            }
          )
        }
      </ScrollView>
    </View>
  )
}

export default Favorite