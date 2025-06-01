import { takeEvery, put, delay } from 'redux-saga/effects'
import { yourAction, yourActionSuccess } from '../rootReducers/yourReducer'

function* handleSampleAction() {
  yield delay(1000)
  console.log('Redux handle action')
  yield put(yourActionSuccess({ type: 'SAMPLE_SUCCESS', status: 'completed' }))
}

export default function* yourSaga() {
  yield takeEvery(yourAction, handleSampleAction)
}
