import React from 'react'

import { UserAuthForm } from '@/forms'
// import { setUserId } from '@/redux'
import { Alert, View } from 'react-native'
// import Toast from 'react-native-toast-message'
import { setUserId } from '@/redux'
import { useDispatch } from 'react-redux'

export const AuthKeyScreen = () => {
  const dispatch = useDispatch()

  const setAuthToken = (authEmail: { authToken: string }) => {
    try {
      dispatch(setUserId(authEmail.authToken))
      Alert.alert(`Поздравляем, ${authEmail.authToken}!`, 'Вы успешно авторизировались')
    } catch (error: any) {
      Alert.alert('Something went wrong', 'Please, try again later')
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <UserAuthForm setAuthToken={setAuthToken} />
    </View>
  )
}
