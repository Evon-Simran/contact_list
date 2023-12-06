import React, { useEffect, useState } from 'react'
import app from './firebase'
import { onValue, ref, getDatabase } from 'firebase/database'
import {
    ScrollView,
    TouchableOpacity,
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

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


const GetList = () => {
    const [contactList, setContactList] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const db = getDatabase(app);
        const dbRef = ref(db, 'contacts');
        onValue(dbRef, (snapshot) => {
            let data = snapshot.val();
            setContactList(data);
        })
    }, []);


    const SortedContactList = contactList.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });

    const handleClick = (itemId,item) => {
        navigation.navigate('Profile', { itemId, item});
    }
    return (
        <View>
            <ScrollView>
                {
                    SortedContactList.map(
                        item => {
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    onPress={() => handleClick(item.id,item)}

                                >
                                    <View
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

export default GetList