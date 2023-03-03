import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Container, Box, Button, Typography } from '@mui/material';
import { getUserState } from '../store';
import QuizView from './QuizView';

const ReadyForQuiz = () => {

    const userState = useSelector(state => state.user.isUserReadyToStartQuiz)

    const dispatch = useDispatch();
    dispatch(getUserState())
    const [ready, setReady] = useState(true);

    return (
        <Container>
        {
            ready ? (
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
                        
                        <Typography marginBottom={3}>Ready to start The Quiz</Typography>
                            
                        <Button variant='outlined' onClick={() => setReady(false)}>Start</Button>
                                
                    </Box>
                    </Grid>
                </Grid>
            ) : (
                <Grid
                    container
                    style={{
                        marginTop: "30px"
                    }}
                >
                    <QuizView />
                </Grid>
            )
        }
        </Container>
    )
}

export default ReadyForQuiz