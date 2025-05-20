// In App.js in a new project

import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import store from './android/app/src/redux/store'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const ProfileScreenWithDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="ProfileScreen"
      drawerContent={() => {
        return (
          <View>
            <Text>Custom Drawer Content</Text>
          </View>
        )
      }}>
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
    </Drawer.Navigator>
  )
}

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to profile"
        onPress={() => {
          console.log('Go to profile')
          props.navigation.navigate('ProfileScreen')
        }}
      />
      <Text>Home Screen</Text>
    </View>
  )
}

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  )
}
const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  )
}

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreenWithDrawer} />
    </Stack.Navigator>
  )
}

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
