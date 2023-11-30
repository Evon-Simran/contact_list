import React, { useState } from 'react'
import { Button, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Modal from "react-native-modal";

const ProfileCard = () => {
    const [iconColor, setIcon] = useState('hearto');
    const route = useRoute();
    const id = route.params;


    const handleIconClick = () => {
        const newIcon = iconColor === 'hearto' ? 'heart' : 'hearto';
        setIcon(newIcon);
        setModalVisible(!isModalVisible);
    };
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View>
            <View>
                <Text>
                    Name
                </Text>
                <Text>
                    {id.item.name}
                </Text>
            </View>
            <View>
                <Text>
                    Email
                </Text>
                <Text>
                    {id.item.email}
                </Text>
            </View>
            <View>
                <TouchableOpacity onPress={handleIconClick}>
                    <AntDesign name={iconColor} size={24} color="pink" />
                </TouchableOpacity>
            </View>
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
                        }}>Add To Favorites!</Text>
                        <AntDesign name="closecircle" size={24} color="white" onPress={toggleModal} style={{ marginTop: '10' }} />
                    </View>
                </Modal>
            </View>
        </View>

    )
}

export default ProfileCard