import React, { useEffect, useState } from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Modal from "react-native-modal";
import { getDatabase, onValue, ref, update, child, set } from 'firebase/database';
import app from '../../utilis/firebase';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from '@rneui/themed';
import { FontAwesome } from '@expo/vector-icons';
import * as Linking from 'expo-linking';


const SharedProfile = () => {
    const navigation = useNavigation();
    const [iconColor, setIcon] = useState('hearto');
    const [isFav, setFav] = useState(false);
    const [contact, setContact] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);

    // Getting userId passed from Routes
    const route = useRoute();
    const id = route.params;
    const userId = id.itemId;

    const fetchContactData = () => {
        try {
            const db = getDatabase(app);
            const dbRef = ref(db, 'contacts');
            onValue(dbRef, (snapshot) => {
                const data = snapshot.val();
                const user = data.find((item) => item.id === userId);
                setContact(user);
            })
        } catch (error) {
            console.error('Error fetching contact data:', error);
        }
    };
    useEffect(() => {
        fetchContactData();
    }, [userId]);


    const handleIconClick = () => {
        const newIcon = iconColor === 'hearto' ? 'heart' : 'hearto';
        setIcon(newIcon);
        setModalVisible(!isModalVisible);
        const fav = isFav === true ? false : true;
        setFav(fav);
        updateData(userId, fav);
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View>
            <Card containerStyle={{}} wrapperStyle={{}}>
                <Card.Title h4>{contact.name}</Card.Title>
                <Card.Divider />
                <View
                    style={{
                        position: "relative",
                        alignItems: "center"
                    }}
                >
                    <Image
                        style={styles.profileIcon}
                        resizeMode="contain"
                        source={{
                            uri:
                                contact.photo
                        }}
                    />
                    <Text>{contact.email}</Text>
                </View>
                {/* 
                <TouchableOpacity onPress={handleLinking}>
                    <LinearGradient
                        colors={['#4c669f', '#3b5998', '#192f6a']}
                        style={styles.buttonContainer}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}>
                        <Text style={styles.buttonText} >Share Profile</Text>
                        <FontAwesome name="share-alt" size={15} color="white" />
                    </LinearGradient>
                </TouchableOpacity> */}
            </Card>

            <View>
                <Modal isVisible={isModalVisible}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            color: "#fff",
                            marginRight: 10,
                            fontSize: 25
                        }} >Add To Favorites!</Text>

                        <AntDesign name="closecircle" size={24} color="white" onPress={toggleModal} style={{ marginTop: 10 }} />
                    </View>
                </Modal>
            </View>

        </View>
    )
}

export default SharedProfile

const styles = StyleSheet.create({
    topBar: {
        display: "flex",
        alignItems: 'flex-end'
    },
    favIcon: {
        display: 'flex',
        alignItems: "flex-end"
    },
    buttonContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 15,

    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10
    },
    profileIcon: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15
    },
    nameSize: {
        fontSize: 20,
    }
});