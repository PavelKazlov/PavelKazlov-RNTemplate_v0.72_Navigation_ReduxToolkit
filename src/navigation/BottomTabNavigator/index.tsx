import React from 'react'

import { Colors, Screens } from '@/constants'
import { HomeScreen, InfoScreen, SettingsScreen } from '@/screens'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

const getTabBarIconColor = (focused: boolean, activeTintColor: string, inActiveTintColor: string) =>
  focused ? activeTintColor : inActiveTintColor

const Tab = createBottomTabNavigator()

export const BottomTabNavigator = () => {
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
  }

  return (
    <>
      <Tab.Navigator initialRouteName={Screens.home} screenOptions={screenOptions}>
        <Tab.Screen
          name={Screens.home}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                size={28}
                name='home-outline'
                color={getTabBarIconColor(focused, Colors.primary, Colors.secondary)}
              />
            ),
          }}
        />
        <Tab.Screen
          name={Screens.info}
          component={InfoScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                size={28}
                // name='checkbox-outline'
                name='apps-outline'
                color={getTabBarIconColor(focused, Colors.primary, Colors.secondary)}
              />
            ),
          }}
        />

        <Tab.Screen
          name={Screens.settings}
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name='settings-outline'
                size={28}
                color={getTabBarIconColor(focused, Colors.primary, Colors.secondary)}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  )
}
