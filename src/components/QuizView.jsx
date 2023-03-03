import { ClassNames } from '@emotion/react';
import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestions } from '../store';
import QuizResult from './QuizResult';

const QuizView = () => {

    const questions = useSelector((state) => state.user.questions)
    
    const dispatch = useDispatch();
    const [trueAnswer, setTrueAnswer] = useState(0);
    const [view, setView] = useState(false);

    useEffect(() => {
        dispatch(getQuestions())
    }, [dispatch])

    console.log(questions);

    const test = (value, index, elem) => {
        
        let parent = elem.parentNode.parentNode;
        let parent2 = elem.parentNode;
        if(parent.classList.contains(`test${index}`)){
            for(let elemOfQuestions of questions){
                
                if(elemOfQuestions.correct_answer === value){
                    elem.parentNode.style.color="green";
                    setTrueAnswer(trueAnswer + 1)
                }
                
            }
        }
        
    }

  return (
    questions ? (
        <Grid>
            <Box>
                {
                    questions.map((elem, index) => (
                        <Box key={index}  style={{
                            border: "1px solid black",
                            borderRadius: "20px",
                            marginBottom: "20px",
                            padding: "15px 5px",
                        }}>
                            <Typography style={{marginBottom: "5px", fontWeight: "bold"}}>{elem.category}</Typography>
                            <Typography style={{marginBottom:"10px"}}>{elem.question}</Typography>
                            <Box>
                                <div>
                                    <form className={`test${index}`}>
                                        <label style={{marginRight: "10px"}}><input name={elem.category} type="radio" value={elem.correct_answer} onClick={e => test(e.target.value, index, e.target)}></input> {elem.correct_answer}</label>
                                        {
                                            elem.incorrect_answers.map(item => (
                                                <label style={{marginRight: "10px"}}><input name={elem.category} type="radio" value={item} onClick={e => test(e.target.value, index, e.target)}></input> {item}</label>
                                            ))
                                        }
                                    </form>
                                    
                                </div>
                            </Box>
                        </Box>
                    ))
                }
                <Button onClick={() => setView(true)}>View result</Button>
                <QuizResult view={view} setView={() => setView(false)} result={trueAnswer} total={questions.length}/>
            </Box>
        </Grid>
    ) : (<div>Loading...</div>)
  )
}

export default QuizView