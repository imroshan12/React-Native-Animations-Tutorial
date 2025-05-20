// import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './rootReducers'
import rootSaga from './rootSagas'

const createSagaMiddleware = require('redux-saga').default
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

// Added line
sagaMiddleware.run(rootSaga)

export default store
