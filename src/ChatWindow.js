import React from 'react';
import './App.css';
import { Button, Card } from 'react-bootstrap';

export default class ChatWindow extends React.Component {
    render() {
        return (
            <Card className={'outerChatContainer'}>
                <Card.Header>You are User1</Card.Header>
                <Card.Body className={"chatBodyContainer"}>
                    <div className={"innerChatBodyContainer"}>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>1</Card.Text>
                        <Card.Text>2</Card.Text>
                        <Card.Text>2</Card.Text>
                        <Card.Text>1</Card.Text>
                        <Card.Text>2</Card.Text>
                        <Card.Text>1</Card.Text>
                        <Card.Text>2</Card.Text>
                        <Card.Text>1</Card.Text>
                        <Card.Text>2</Card.Text>
                        <Card.Text>1</Card.Text>
                        <Card.Text>2</Card.Text>
                        <Card.Text>1</Card.Text>
                        <Card.Text>2</Card.Text>
                        <Card.Text>1</Card.Text>
                        <Card.Text>2</Card.Text>
                        <Card.Text>1</Card.Text>
                        <Card.Text>2</Card.Text>
                        <Card.Text>1</Card.Text>
                        <Card.Text>2</Card.Text>
                        <Card.Text>1</Card.Text>
                        <Card.Text>2</Card.Text>
                        <Card.Text>2</Card.Text>

                    </div>
                </Card.Body>
            </Card>
        );
    }
}