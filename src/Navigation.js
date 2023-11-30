import React from 'react'


// Navigation
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Icons
import {
    FontAwesome,
    Ionicons,
    MaterialIcons
} from '@expo/vector-icons';


// Screens
// import Home from './screens/Home'
// import Favorite from './screens/favorite'
// import Profile from './screens/profile';
// import AddContact from './screens/AddContact';
// import Setting from './screens/Setting';
import { StyleSheet } from 'react-native';

import {
    Home,
    Favorite,
    Profile,
    AddContact,
    Setting,
    ProfileCard
} from './screens/Index'
import { NativeScreenContainer } from 'react-native-screens';
// Styles
const styles = StyleSheet.create({
    home: {
        color: 'red'
    }
});


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
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
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Ionicons
                            name="md-arrow-back"
                            size={24}
                            color="black"
                            onPress={() => navigation.goBack()}
                        />
                    ),
                    tabBarIcon: () => (
                        <MaterialIcons name="favorite" size={24} color="black" />
                    ),
                })}
            />
            <Tab.Screen
                name="AddContact"
                component={AddContact}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Ionicons
                            name="md-arrow-back"
                            size={24}
                            color="black"
                            onPress={() => navigation.goBack()}
                        />
                    ),
                    tabBarIcon: () => (
                        <Ionicons
                            name="add-circle-sharp"
                            size={24}
                            color="black" />
                    )
                })}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Ionicons
                            name="md-arrow-back"
                            size={24}
                            color="black"
                            onPress={() => navigation.goBack()}
                        />
                    ),
                    tabBarIcon: () => (
                        <FontAwesome
                            name="user"
                            size={24}
                            color="black" />
                    )
                })}
            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Ionicons
                            name="md-arrow-back"
                            size={24}
                            color="black"
                            onPress={() => navigation.goBack()}
                        />
                    ),
                    tabBarIcon: () => (
                        <Ionicons
                            name="settings"
                            size={24}
                            color="black" />
                    )
                })}
            />
        </Tab.Navigator>
    );
};


const Navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="ProfileCard" component={ProfileCard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
