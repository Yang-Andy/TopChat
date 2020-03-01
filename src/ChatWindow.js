import React from 'react';
import './App.css';
import { Card } from 'react-bootstrap';
import ChatMessage from './ChatMessage';

export default class ChatWindow extends React.Component {
    render() {
        return (
            <Card className={'outerChatContainer'}>
                <Card.Header>You are User1</Card.Header>
                <Card.Body className={"chatBodyContainer"}>
                    <div className={"innerChatBodyContainer"}>
                        <ChatMessage timestamp={"18:93"} nickname={"Brian"} nicknameColor={"blue"} message={"Hi"} />
                        <ChatMessage timestamp={"18:98"} nickname={"Andy"} nicknameColor={"green"} message={"Hello World"} />
                        <ChatMessage timestamp={"18:93"} nickname={"Brian"} nicknameColor={"blue"} message={"Hi"} />
                        <ChatMessage timestamp={"18:98"} nickname={"Andy"} nicknameColor={"green"} message={"Hello World"} />
                        <ChatMessage timestamp={"18:93"} nickname={"Brian"} nicknameColor={"blue"} message={"Hi"} />
                        <ChatMessage timestamp={"18:98"} nickname={"Andy"} nicknameColor={"green"} message={"Hello World"} />
                        <ChatMessage timestamp={"18:93"} nickname={"Brian"} nicknameColor={"blue"} message={"Hi"} />
                        <ChatMessage timestamp={"18:98"} nickname={"Andy"} nicknameColor={"green"} message={"Hello World"} />
                        <ChatMessage timestamp={"18:93"} nickname={"Brian"} nicknameColor={"blue"} message={"Hi"} />
                        <ChatMessage timestamp={"18:98"} nickname={"Andy"} nicknameColor={"green"} message={"Hello World"} />
                        <ChatMessage timestamp={"18:93"} nickname={"Brian"} nicknameColor={"blue"} message={"Hi"} />
                        <ChatMessage timestamp={"18:98"} nickname={"Andy"} nicknameColor={"green"} message={"Hello World"} />
                        <ChatMessage timestamp={"18:93"} nickname={"Brian"} nicknameColor={"blue"} message={"Hi"} />
                        <ChatMessage timestamp={"18:98"} nickname={"Andy"} nicknameColor={"green"} message={"Hello World"} />
                        <ChatMessage timestamp={"18:93"} nickname={"Brian"} nicknameColor={"blue"} message={"Hi"} />
                        <ChatMessage timestamp={"18:98"} nickname={"Andy"} nicknameColor={"green"} message={"Hello World"} />
                        <ChatMessage timestamp={"18:93"} nickname={"Brian"} nicknameColor={"blue"} message={"Hi"} />
                        <ChatMessage timestamp={"18:98"} nickname={"Andy"} nicknameColor={"green"} message={"Hello World"} />
                        <ChatMessage timestamp={"18:93"} nickname={"Brian"} nicknameColor={"blue"} message={"Hi"} />
                        <ChatMessage timestamp={"18:98"} nickname={"Andy"} nicknameColor={"green"} message={"Hello World"} />
                    </div>
                </Card.Body>
            </Card>
        );
    }
}