import { put, call, takeEvery, takeLatest, all } from "redux-saga/effects";
import { auth } from "../firebase/initFirebase";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getMessages, getUserAuth } from "../store";
import { firestore } from "../firebase/initFirebase";
import { collection, getDocs } from 'firebase/firestore';

let usersLoader = false;
let messageLoader = false;

function* workGetUser(){

    try{
        if(!usersLoader){
            usersLoader = true;
            const provider = new GoogleAuthProvider()

            const data = yield call(() => {
                return signInWithPopup(auth, provider)
            }) 
            
            yield put(getUserAuth(data.user))
            }
    } catch(err) {
        console.log(err);
    }
    
}

function* workGetMessages(){
    try{
        // if(!messageLoader){
            messageLoader = true;

            let arr = [];
            const queryMessages = yield call(() => getDocs(collection(firestore, "messages")))
            
            queryMessages.forEach(element => {
                arr.push(element._document.data.value.mapValue.fields);
            });
            
            yield put(getMessages(arr))
        // }
    }catch(err){
        console.log(err);
    }
}

function* userSaga(){
    yield all([
        takeLatest("store/getUserAuth", workGetUser),
        takeEvery("store/getMessages", workGetMessages)
    ])
    
}

function* messageSaga() {
    yield takeEvery("store/getMessages", workGetMessages)
}

export default userSaga;
// export const sagas = { userSaga, messageSaga };