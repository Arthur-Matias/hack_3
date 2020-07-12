import React from 'react';
import { MessageContainer } from './styles.jsx'
export default function Cliente(props){
    return (
        <>
            <MessageContainer
                className={props.isMe?'me':''}
            >
                <p>{props.content}</p>
                <aside>24/05/2020</aside>
            </MessageContainer>
        </>
    )
};