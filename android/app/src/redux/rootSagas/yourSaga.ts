import { takeEvery, put, delay } from 'redux-saga/effects'

function* handleSampleAction() {
  yield delay(1000)
  yield put({ type: 'SAMPLE_SUCCESS' })
}

export default function* yourSaga() {
  yield takeEvery('SAMPLE_REQUEST', handleSampleAction)
}
