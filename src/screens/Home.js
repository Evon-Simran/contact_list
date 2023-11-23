import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import ContactList from '../../utilis/mock/contactList.json'



// Styles
const styles = StyleSheet.create({
    profileIcon: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    nameSize: {
        fontSize: 20,
    }
});


const Home = () => {
    return (
        <View>
            <ScrollView>
                {
                    ContactList.contacts.map(
                        item => {
                            return (
                                <TouchableOpacity>
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
                                        <Text
                                            style={styles.nameSize}
                                        > {item.name} </Text>
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

export default Home