import React, { useContext } from 'react';
import { AppBar, Button, Grid, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/constans';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from 'firebase/auth';
import { auth } from '../firebase/initFirebase';
import { getUserAuth } from '../store';

const Navbar = () => {

  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  return (
    <AppBar position="static">
      <Toolbar variant='dense'>
        <Grid container justifyContent="flex-end">
          {
            isLoading ? <Button onClick={() => {
                                                  signOut(auth);
                                                  dispatch(getUserAuth(false))
                                                }
                        } style={{color: "red"}} variant="outlined">Logout</Button>
                      : <NavLink to={LOGIN_ROUTE} style={{textDecoration: 'none', }}><Button style={{color: "red"}} variant="outlined">Login</Button></NavLink>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar