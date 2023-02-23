import { put, call, takeEvery } from "redux-saga/effects";
import { auth } from "../firebase/initFirebase";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getUserAuth } from "../store";

function* workGetUser(){

    const provider = new GoogleAuthProvider()

    const data = yield call(() => signInWithPopup(auth, provider)) 
    
    yield put(getUserAuth(data.user))
    
}

function* userSaga(){
    yield takeEvery("store/getUserAuth", workGetUser)
}

export default userSaga;