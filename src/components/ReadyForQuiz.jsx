import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Container, Box, Button, Typography } from '@mui/material';
import { getUserState } from '../store';

const ReadyForQuiz = () => {

    const userState = useSelector(state => state.user.isUserReadyToStartQuiz)

    const dispatch = useDispatch();
    dispatch(getUserState())
    const [ready, setReady] = useState(true);

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
            <Box p={5} style={{display: "flex", flexDirection: "column"}}>
                <Typography marginBottom={3}>
                    {
                        ready ? 'Ready to start The Quiz' : 'START if you are ready to start Quiz'
                    }
                </Typography>
                <Button variant='outlined'>
                    {
                        ready ? 'Cancel' : 'Start'
                    }
                </Button>
            </Box>
            </Grid>
        </Grid>
        </Container>
    )
}

export default ReadyForQuiz