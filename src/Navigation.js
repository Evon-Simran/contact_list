import React from 'react'


// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Icons
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// Screens
import Home from './screens/Home'
import Favorite from './screens/favorite'
import Profile from './screens/profile';
import AddContact from './screens/AddContact';
import Setting from './screens/Setting';
import { StyleSheet } from 'react-native';


// Styles
const styles = StyleSheet.create({
    home: {
        color: 'red'
    }
});


const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'grey'
            }}>
                <Tab.Screen
                    name="Contact List"
                    component={Home}
                    options={{
                        tabBarIcon: () => (
                            <FontAwesome
                                name="home"
                                size={24}
                                color="black"
                            />
                        )
                    }}

                />
                <Tab.Screen
                    name="Favorite"
                    component={Favorite}
                    options={{
                        tabBarIcon: () => (
                            <MaterialIcons
                                name="favorite"
                                size={24}
                                color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name="AddContact"
                    component={AddContact}
                    options={{
                        tabBarIcon: () => (
                            <Ionicons
                                name="add-circle-sharp"
                                size={24}
                                color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: () => (
                            <FontAwesome
                                name="user"
                                size={24}
                                color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name="Setting"
                    component={Setting}
                    options={{
                        tabBarIcon: () => (
                            <Ionicons
                                name="settings"
                                size={24}
                                color="black" />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
