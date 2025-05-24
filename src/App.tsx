// In App.js in a new project

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import store from '../android/app/src/redux/store'
import RootStack from './navigation'

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  )
}
