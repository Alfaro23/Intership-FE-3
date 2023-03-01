import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth, firestore } from '../firebase/initFirebase';
import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { getMessages } from '../store';

const Chat = () => {

  const userLoading = useSelector(state => state.user.isLoading);
  const user = useSelector(state => state.user.user);
  const messages2 = useSelector(state => state.user.messages)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages())
  }, [dispatch])
  
  const [value, setValue] = useState("");

  const sendMessage = async () => {
    try{
      const testData = await addDoc(collection(firestore, "messages"),{
        createdAt: serverTimestamp(),
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        uid: user.uid,
      })

      setValue("")

    } catch(err) {
      console.log(err);
    }
  }
    
  return (
    <Container style={{width: "700px",}}>
      <Grid 
        container
        justifyContent={"center"}
        style={{
          height: window.innerHeight - 50,
          marginTop: "50px",
          justifyContent: "flex-end"
        }}
      >
        <div style={{
          width: "80%",
          height: "60vh",
          border: "1px solid gray",
          overflowY: "auto",
        }}
        >
          {
            messages2 ? 
              messages2.map(elem => {
                return(
                  <div key={elem.uid.stringValue} style={{
                                margin: 10, 
                                border: user.uid === elem.uid.stringValue ? "2px solid green" : "2px solid red",
                                marginLeft: user.uid === elem.uid.stringValue ? "auto" : "10px",
                                width: "fit-content",
                                padding: 5,
                              }}>
                    <Grid container alignItems="center">
                      <Avatar style={{marginRight: "10px"}} src={elem.photoURL.stringValue} />
                      <div>{elem.displayName.stringValue}</div>
                    </Grid>
                    <div style={{marginTop: "10px"}}>{elem.text.stringValue}</div>
                  </div>
                )
              })
             : <div>Loading...</div>
            
          }
        </div>

        <Grid container direction="column" alignItems="flex-end" style={{width: "80%"}}>
          <TextField 
            fullWidth
            maxRows={2}
            value={value}
            variant='outlined'
            onChange={e => setValue(e.target.value)}  
          />
          <Button onClick={sendMessage} variant='outlined'>Send</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Chat