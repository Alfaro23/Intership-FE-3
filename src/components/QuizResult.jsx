import React from 'react';
import { Modal, Box } from '@mui/material';

const QuizResult = ({view, setView, result, total}) => {

    const handleClose = () => {
        setView(false);
    };

    return (
        <>
            {
                view ? (<Modal
                        open={view}
                        onClose={handleClose}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                        >
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                            width: 400 
                        }}>
                            <h2 id="parent-modal-title">Your result</h2>
                            <p id="parent-modal-description">
                                <b>Correct: {result}</b> <br></br>
                                <b>Total: {total}</b>
                            </p>
                        </Box>
                        </Modal>) 
                     : (<></>)
            }
        </>
    )
}

export default QuizResult