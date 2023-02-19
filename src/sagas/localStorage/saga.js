import { apply } from 'redux-saga/effects';

export default function* rootLocalStorageSaga() {
    yield apply(console, console.log, ['rootLocalStorageSaga'])
};