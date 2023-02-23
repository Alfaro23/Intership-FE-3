import { Container, Grid, Box, Button } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../index';
import { useSelector, useDispatch } from 'react-redux';
import { getUserAuth } from '../store';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {

  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch();

  const {auth} = useContext(Context);

  const login = async () => {

    dispatch(getUserAuth())
    console.log(user);
  }
  
  return (
    <Container>
      <Grid 
        container
        alignItems={"center"}
        justifyContent={"center"}
        style={{
          height: window.innerHeight - 50,
        }}
      >
        <Grid style={{width: 400, background: "lightgray"}}
          container
          alignItems="center"
          direction="column"
        >
          <Box p={5}>
            <Button onClick={login} variant='outlined'>Enter with Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login