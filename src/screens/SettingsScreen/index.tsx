import { setUserId } from '@/redux'
import React from 'react'

import { Button, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

export const SettingsScreen = () => {
  const dispatch = useDispatch()

  const signOut = () => {
    dispatch(setUserId(''))
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Info Screen</Text>
      <Button onPress={signOut} title={'Sign Out User'} />
    </View>
  )
}
