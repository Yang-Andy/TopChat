import React from 'react';
import './App.css';
import { Card } from 'react-bootstrap';
import ScrollToBottom from 'react-scroll-to-bottom';

export default function OnlineUserWindow(props) {
    //console.log(props.currentUsers)

    return (
        <Card style={{ width: 300, marginBottom: "50px" }}>
            <Card.Header>Online Users</Card.Header>
            <Card.Body className={"chatBodyContainer"}>
                <ScrollToBottom>
                    {props.currentUsers.map((username, i) => {
                        return (
                            <div key={i}>
                                <Card.Title>{username}</Card.Title>
                            </div>
                        )
                    })}
                </ScrollToBottom>
            </Card.Body>
        </Card>
    );
}