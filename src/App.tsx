// In App.js in a new project

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import store from './redux/store'
import NavigationStack from './navigation/NavigationStack'

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <NavigationContainer>
          <NavigationStack />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  )
}
