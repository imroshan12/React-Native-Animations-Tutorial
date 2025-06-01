import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

// Change it to false if you don't want to see console.log in ReactoTron.
const useReactNativeLogs = true

const reactoTronConfig = Reactotron.configure()
  .configure()
  .use(reactotronRedux())
  .connect()

const reactoTron = useReactNativeLogs
  ? reactoTronConfig.useReactNative()
  : reactoTronConfig

export default reactoTron
