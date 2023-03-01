import { put, call, takeEvery, takeLatest, all } from "redux-saga/effects";
import { auth } from "../firebase/initFirebase";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getMessages, getUserAuth, getUserState, storeSlice } from "../store";
import { firestore } from "../firebase/initFirebase";
import { collection, getDocs } from 'firebase/firestore';

let usersLoader = false;
let messageLoader = false;
let userCheck;

function* workGetUser(){

    try{
        if(!usersLoader){
            usersLoader = true;
            const provider = new GoogleAuthProvider()

            const data = yield call(() => {
                return signInWithPopup(auth, provider)
            }) 
            
            userCheck = data.user;
            yield put(getUserAuth(data.user))
            }
    } catch(err) {
        console.log(err);
    }
    
}

function* workGetMessages(){
    
    try{
        if(!messageLoader){
            messageLoader = true;

            let arr = [];
            const queryMessages = yield call(() => getDocs(collection(firestore, "messages")))
            
            queryMessages.forEach(element => {
                arr.push(element._document.data.value.mapValue.fields);
            });
            
            arr.sort((elem1, elem2) => {
                if(elem1.createdAt.timestampValue > elem2.createdAt.timestampValue){
                    return 1;
                }
                if(elem1.createdAt.timestampValue < elem2.createdAt.timestampValue){
                    return -1;
                }

                return 0;
            })

            yield put(getMessages(arr))
        }
    }catch(err){
        console.log(err);
    }
}

function* setIsUserReadyToStartQuiz(){
    try{
        let userState = yield call( () => storeSlice.getInitialState().isUserReadyToStartQuiz )
        
        if(!userState){
            yield put(getUserState(true))
            
            yield put(getUserState([
                {
                    userId: userCheck.uid
                }
            ]))
        } else {
            yield put(getUserState(false))
            yield put(getUserState([]))
        }
    }catch(err){
        console.log(err);
    }
}

function* userSaga(){
    yield all([
        takeLatest("store/getUserAuth", workGetUser),
        takeEvery("store/getMessages", workGetMessages),
        takeEvery("store/getUserState", setIsUserReadyToStartQuiz),
    ])
    
}

export default userSaga;