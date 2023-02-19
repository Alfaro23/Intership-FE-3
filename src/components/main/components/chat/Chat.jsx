import React, { useEffect, useRef } from 'react';
import chatBackgroundImage from '../../../../assets/images/bgchat.png';
import CustomImage from '../../../customComponents/customImage/CustomImage';
import CustomTextField from '../../../customComponents/customTextField/CustomTextField';
import {
    Name,
    Message,
    UserName,
    UserInfo,
    UserMessage,
    ChatContainer,
    MessagesWrapper,
    UserMessageContainer,
} from './styledComponents';

const Chat = () => {
    const messageEl = useRef(null);

    useEffect(() => {
        if (messageEl) {
            messageEl.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }
    }, []);

    return (
        <ChatContainer
            chatBackgroundImage={chatBackgroundImage}
        >
            <MessagesWrapper ref={messageEl}>
            </MessagesWrapper>
                <CustomTextField
                    type={'text'}
                    sendMessage={() => console.log('send Message')}
                />
        </ChatContainer>
    );
};

export default Chat;