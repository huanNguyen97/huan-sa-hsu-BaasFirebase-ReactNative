// Import from react
import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-elements';

// Import from owner
import CreateScreen from '../components/Create';
import HomeScreen from '../components/Home';
import SearchScreen from '../components/Search';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    title: "Game List",
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="Create" 
                component={CreateScreen}
                options={{ headerShown: false }} 
            />
            <Tab.Screen 
                name="Search" 
                component={SearchScreen}
                options={{ headerShown: false }} 
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;