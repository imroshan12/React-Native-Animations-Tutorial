import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'
import ProfileScreen from '../screens/ProfileScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const CustomDrawerContent = () => (
  <View>
    <Text>Custom Drawer Content</Text>
  </View>
)

const renderCustomDrawerContent = () => <CustomDrawerContent />

const ProfileScreenWithDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="ProfileScreen"
      drawerContent={renderCustomDrawerContent}>
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
    </Drawer.Navigator>
  )
}

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 300,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreenWithDrawer} />
    </Stack.Navigator>
  )
}

export default RootStack
