/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ApplicationStackNavigator } from '@/navigation'
import { persistor, store } from '@/redux/store/store'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const safeAreaViewStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {/* <SafeAreaView style={safeAreaViewStyle}> */}
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={safeAreaViewStyle.backgroundColor}
        />
        <NavigationContainer>
          <ApplicationStackNavigator />
        </NavigationContainer>
        {/* </SafeAreaView> */}
      </PersistGate>
    </Provider>
  )
}

export default App
