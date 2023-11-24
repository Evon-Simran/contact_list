import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'


// Contact List
import List from '../../utilis/mock/favoriteList.json'
import { Text } from 'react-native';

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 3,
        marginBottom :10
    },
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20
    },
    button: {
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: 'green',
        padding: 10,
       alignItems : 'center'
    }
});

const ContactList = List.contacts;

const AddContact = () => {
    const [contacts, setContacts] = useState(ContactList);
    const [newContact, setNewContact] = useState({
        age: '',
        name: '',
        gender: '',
        company: '',
        email: '',
        photo: "https://randomuser.me/api/portraits/men/33.jpg"
    });


    const handleInputChange = (fieldName, value) => {
        setNewContact({ ...newContact, [fieldName]: value });
    }

    const addNewContact = (contact) => {
        setContacts([...contacts, { id: contacts.length + 1, ...contact }]);
        console.log(contacts);
        // setNewContact(
        //     {
        //         age: '',
        //         name: '',
        //         gender: '',
        //         company: '',
        //         email: '',
        //         photo: "https://randomuser.me/api/portraits/men/33.jpg"
        //     }
        // )
    }

    return (
        <View style={styles.container}>
            <Text>Name</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter Name'
                onChangeText={(text) => handleInputChange('name', text)}
            />
            <Text>Gender</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter Gender'
                onChangeText={(text) => handleInputChange('gender', text)}

            />
            <Text>Company</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter Company'
                onChangeText={(text) => handleInputChange('company', text)}
            />
            <Text>Email</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter Email'
                onChangeText={(text) => handleInputChange('email', text)}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => addNewContact(newContact)}
            >
                <Text style={{ color: 'white' }}>ADD</Text>
            </TouchableOpacity>

        </View>
    )
}

export default AddContact