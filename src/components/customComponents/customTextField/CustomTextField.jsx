import React, { useRef, useState } from 'react';
import {
    TextField,
    TextFieldButton,
    TextFieldWrapper,
    TextfieldContainer,
} from './styledComponents';

const CustomTextField = () => {
    const [value, setValue] = useState('');

    const textRef = useRef();

    const onClickHandler = () => {
        if (value) {
            console.log(value);

            setValue('');
        }
    };

    const onChangeHandler = event => {
        const { target: { value } } = event;

        setValue(value);
    };

    const handleOnFocus = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();

            if (value) {
                console.log(value);
                setValue('');
            }
        }
    };

    return (
        <TextfieldContainer>
            <TextFieldWrapper>
                <TextField
                    ref={textRef}
                    value={value}
                    placeholder={'Send a message...'}
                    onChange={onChangeHandler}
                    onKeyDown={handleOnFocus}
                />
            </TextFieldWrapper>
            <TextFieldButton onClick={onClickHandler}>
                SEND
            </TextFieldButton>
        </TextfieldContainer>
     );
};

export default CustomTextField;
