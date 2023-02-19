import { all, call } from 'redux-saga/effects';
import chatSaga from './firebase/chatSaga';
import quizManagerUserSaga from './quizSagas/quizManagerUserSaga';
import firebaseAuthSagaWatcher from './firebase/firebaseAuthSaga';
import localStorageManagerSaga from './localStorage/saga';

const sagasList = [
    chatSaga,
    quizManagerUserSaga,
    localStorageManagerSaga,
    firebaseAuthSagaWatcher,
];

export default function* watchRootSaga() {
    yield all(sagasList.map(saga => call(saga)));
};