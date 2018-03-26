import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

// Actions
import actions from './actions';

// Services
import { postGenericForm } from '../../services/forms.service';

export function* postGenericFormSaga(action: any) {
  try {
    yield call(postGenericForm, action.path, action.params);
    yield delay(2000);
    yield put(actions.formSuccess());
  } catch (error) {
    yield put(actions.formFailure());
  }
}

export default function* rootSaga() {
  yield takeLatest(actions.POST_GENERIC_FORM, postGenericFormSaga);
}
