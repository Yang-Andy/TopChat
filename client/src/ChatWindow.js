import React from 'react';
import './App.css';
import { Card } from 'react-bootstrap';
import ChatMessage from './ChatMessage';
import ScrollToBottom from 'react-scroll-to-bottom';
// <div className={"innerChatBodyContainer"}>
//<ChatMessage timestamp={"18:93"} nickname={"Brian"} nicknameColor={"blue"} message={"Hi"} />

export default function ChatWindow(props) {
    return (
        <Card className={'outerChatContainer'}>
            <Card.Header>You are {props.username}</Card.Header>
            <Card.Body className={"chatBodyContainer"}>
                <ScrollToBottom>
                    {props.messages.map((message, i) => {
                        return (
                            <div key={i}>
                                <ChatMessage timestamp={"18:93"} username={props.username} nicknameColor={"blue"} message={message} />
                            </div>
                        )
                    })}
                </ScrollToBottom>
            </Card.Body>
        </Card>
    );

}