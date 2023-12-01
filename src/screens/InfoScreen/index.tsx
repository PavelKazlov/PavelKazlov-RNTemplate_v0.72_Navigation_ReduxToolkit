import { Screens } from '@/constants'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

export const InfoScreen = () => {
  const navigation = useNavigation()

  const signOut = () => {
    navigation.navigate(Screens.cart)
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Info Screen</Text>
      <Button onPress={signOut} title={'Go To Cart Screen'} />
    </View>
  )
}
