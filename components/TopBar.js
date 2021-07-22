import React from 'react';
import StackChat from './StackChat';
import MiPerfil from './MiPerfil';
import { colors } from '../config';
import HomeScreen from '../Screens/HomeScreen';
import { StyleSheet } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const inactiveColor = 'white';
const iconSize = 30;

const TabTopBar = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showIcon: true,
                showLabel: false,
                style: { ...styles.container },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    color: colors.PURPLE,
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5
                            name="fire"
                            size={iconSize}
                            color={focused ? colors.PURPLE : inactiveColor}
                        ></FontAwesome5>
                    ),
                }}
            />

            <Tab.Screen
                name="Chat"
                component={StackChat}
                options={{
                    title: 'Chat',
                    tabBarBadge: 3,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name="comments"
                            size={iconSize}
                            color={focused ? colors.YELLOW : inactiveColor}
                        ></FontAwesome>
                    ),
                }}
            />

            <Tab.Screen
                name="MiPerfil"
                component={MiPerfil}
                options={{
                    title: 'Me',
                    showIcon: true,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name="user"
                            size={iconSize}
                            color={focused ? colors.PINK : inactiveColor}
                        ></FontAwesome>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: colors.ORANGE,
    },
});

export default TabTopBar;
