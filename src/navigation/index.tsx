import React from 'react'

import { Navigators, Screens } from '@/constants'
import { selectUserId } from '@/redux'
import { AuthKeyScreen, CartScreen } from '@/screens'
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'
import { BottomTabNavigator } from './BottomTabNavigator'

export const Stack = createNativeStackNavigator()

const bottomTabNavigatorOptions = {
  headerShown: false,
}
const authNavigatorOptions = {
  headerShown: false,
}

const stackNavigatorOptions: NativeStackNavigationOptions = {
  headerShadowVisible: false,
  headerBackTitleVisible: false,
}

export const ApplicationStackNavigator = () => {
  const authToken = useSelector(selectUserId)

  return (
    <Stack.Navigator screenOptions={stackNavigatorOptions} initialRouteName={Navigators.authNavigator}>
      <Stack.Group>
        {authToken === '' ? (
          <Stack.Screen name={Navigators.authNavigator} component={AuthKeyScreen} options={authNavigatorOptions} />
        ) : (
          <Stack.Group>
            <Stack.Screen
              name={Navigators.bottomTabs}
              component={BottomTabNavigator}
              options={bottomTabNavigatorOptions}
            />
            <Stack.Screen name={Screens.cart} component={CartScreen} />
          </Stack.Group>
        )}
      </Stack.Group>
    </Stack.Navigator>
  )
}
