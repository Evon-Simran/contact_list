import React, { useEffect } from 'react'
import * as Linking from 'expo-linking';

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
import SharedProfile from './screens/SharedProfile';
// Styles
const styles = StyleSheet.create({
    home: {
        color: 'red'
    }
});


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const prefix = Linking.createURL('mycontact://app');


const HomeStack = () => {
    // useEffect()
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
                name="Account"
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
                            onPress={() => navigation.goBack().setParams({})}
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
    const deepLinking = {
        prefixes: [prefix],
        config: {
            screens: {
                Profile : {
                    path : "profile/:itemId",
                    parse: {
                        itemId:(itemId) => `${itemId}`
                    }
                },
                SharedProfile : {
                    path : "shared-profile/:itemId",
                    parse: {
                        itemId:(itemId) => `${itemId}`
                    }
                }
            }
        }
    };
    return (
        <NavigationContainer linking={deepLinking}>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Profile" component={ProfileCard} />
                <Stack.Screen name="SharedProfile" component={SharedProfile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
