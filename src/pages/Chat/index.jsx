import React from 'react';
import { Container, InputWrapper, InputMessage, ChatData } from './styles.jsx'
import TopMenu from '../../components/TopMenu';
import Message from '../../components/Message';

export default function Chat(props){
    return (
        <>
            <TopMenu />
            <Container>
                <ChatData>
                    <Message 
                        content="Olá"
                        time={Date.now}
                        isMe
                    />
                    <Message
                        content="Olá"
                        time={Date.now}
                    />
                    <InputWrapper>
                        <InputMessage />
                    </InputWrapper>
                </ChatData>
            </Container>
        </>
    )
};