import React from 'react'
import { StyleSheet,View } from 'react-native';
import GetList from '../../utilis/getList';


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
           <GetList />
        </View>
    )
}

export default Home