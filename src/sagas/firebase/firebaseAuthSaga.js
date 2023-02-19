import { apply } from 'redux-saga/effects';

export default function* firebaseAuthSagaWatcher() {
    yield apply(console, console.log, ['firebaseAuthSagaWatcher'])
}