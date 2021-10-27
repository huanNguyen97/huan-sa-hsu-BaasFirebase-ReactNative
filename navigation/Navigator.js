// Import from react native
import React from 'react';
import { Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import components owner
import HomeScreen from '../components/Home';
import DetailScreen from '../components/Details';
import EditScreen from '../components/Edit';

import TabScreen from '../navigation/TabNavigator';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (    
        <Stack.Navigator>
            <Stack.Screen 
                name="Tab" 
                component={TabScreen} 
                options={{
                    headerBackVisible: false,
                    headerStyle: {
                        backgroundColor: "#008B8B",
                    },
                }}
            />
            <Stack.Screen 
                name="Detail" 
                component={DetailScreen} 
                options={{
                    headerStyle: {
                        backgroundColor: "#87CEEB"
                    }
                }}
            />
            <Stack.Screen 
                name="Edit" 
                component={EditScreen} 
                options={{
                    title: "Edit game",
                    headerStyle: {
                        backgroundColor: "rgba(127, 220, 103, 1)",
                    }
                }}
            />
        </Stack.Navigator>
    )
};

export default Navigator;