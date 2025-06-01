// import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './rootReducers'
import rootSaga from './rootSagas'

const createSagaMiddleware = require('redux-saga').default
const sagaMiddleware = createSagaMiddleware()
const createEnhancers = (getDefaultEnhancers: any) => {
  if (__DEV__) {
    const reactotron = require('../../ReactotronConfig').default
    return getDefaultEnhancers().concat(reactotron.createEnhancer())
  } else {
    return getDefaultEnhancers()
  }
}

const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  enhancers: createEnhancers,
})

// Added line
sagaMiddleware.run(rootSaga)

export default store
