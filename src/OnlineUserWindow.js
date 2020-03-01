import React from 'react';
import './App.css';
import { Button, Card } from 'react-bootstrap';

export default class OnlineUserWindow extends React.Component {
    render() {
        return (
            <Card style={{ width: 300, marginBottom: "50px" }}>
                <Card.Header>Online Users</Card.Header>
                <Card.Body className={"chatBodyContainer"}>
                    <div className={"innerChatBodyContainer"}>
                        <Card.Title>Jimmy</Card.Title>
                        <Card.Title>Dave</Card.Title>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}