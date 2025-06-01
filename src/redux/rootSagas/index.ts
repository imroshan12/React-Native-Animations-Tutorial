import { all, fork } from 'redux-saga/effects'
import yourSaga from './yourSaga'

export default function* rootSaga() {
  yield all([fork(yourSaga)])
}
