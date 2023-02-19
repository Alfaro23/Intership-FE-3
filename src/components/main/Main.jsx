import React from 'react';
import {
    QuizWrapper,
} from './styledComponents';
import Quiz from './components/quiz/Quiz';
import Chat from './components/chat/Chat';

const Main = () => {
    return (
        <QuizWrapper>
            <Quiz/>
            <Chat/>
        </QuizWrapper>
    )
};

export default Main;