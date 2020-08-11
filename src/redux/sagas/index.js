import { all } from 'redux-saga/effects';

//Add saga modules to all array to be used on index.js for rootSaga
import getEmployeeSaga from './getEmployeeSaga';

export default function* rootSaga() {
  yield all([
    getEmployeeSaga(),
  ]);
}