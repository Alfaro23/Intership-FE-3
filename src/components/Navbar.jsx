import React, { useContext } from 'react';
import { AppBar, Button, Grid, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/constans';

import { Context } from '../index';
import { signOut } from 'firebase/auth';

const Navbar = () => {

  const {auth} = useContext(Context);
  // const [user] = useAuthState(auth);
  const user = false;
  

  return (
    <AppBar position="static">
      <Toolbar variant='dense'>
        <Grid container justifyContent="flex-end">
          {
            user ? <Button onClick={() => signOut(auth)} style={{color: "red"}} variant="outlined">Logout</Button> : <NavLink to={LOGIN_ROUTE} style={{textDecoration: 'none', }}><Button style={{color: "red"}} variant="outlined">Login</Button></NavLink>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar