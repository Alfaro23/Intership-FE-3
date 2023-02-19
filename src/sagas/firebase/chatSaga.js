import { apply } from 'redux-saga/effects';

export default function* watchChatSaga() {
    yield apply(console, console.log, ['watchChatSaga'])
};