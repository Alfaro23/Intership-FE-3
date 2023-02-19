import { apply } from 'redux-saga/effects';

export default function* watchQuizUserSaga() {
    yield apply(console, console.log, ['watchQuizUserSaga'])
};