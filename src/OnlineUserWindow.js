import React from 'react';
import './App.css';
import { Button, Card } from 'react-bootstrap';

export default class OnlineUserWindow extends React.Component {
    render() {
        return (
            <Card style={{ width: 300 }}>
                <Card.Header>Online Users</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    }
}