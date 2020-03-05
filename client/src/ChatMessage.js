import React from 'react';
import './App.css';
import { Card } from 'react-bootstrap';

export default function ChatMessage(props) {
    return (
        <div style={{ display: "flex" }}>
            <Card.Text style={{ marginRight: "5px", color: "grey" }}>
                {props.timestamp}
            </Card.Text>
            <Card.Text style={{ color: props.nicknameColor }}>
                {props.nickname}
            </Card.Text>
            <Card.Text style={{ marginRight: "5px" }}>
                :
            </Card.Text>
            <Card.Text>
                {props.message}
            </Card.Text>
        </div>
    );

}