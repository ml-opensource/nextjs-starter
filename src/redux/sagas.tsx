import { all } from 'redux-saga/effects';
import formsSagas from './forms/saga';

export default function* rootSaga() {
  yield all([
    formsSagas(),
  ]);
}
