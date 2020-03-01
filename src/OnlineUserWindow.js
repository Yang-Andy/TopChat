import React from 'react';
import './App.css';
import { Button, Card } from 'react-bootstrap';

export default class OnlineUserWindow extends React.Component {
    render() {
        return (
            <Card style={{ width: 300 }}>
                <Card.Header>Online Users</Card.Header>
                <Card.Body>
                    <Card.Title>Jimmy</Card.Title>
                    <Card.Title>Dave</Card.Title>
                </Card.Body>
            </Card>
        );
    }
}