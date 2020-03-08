import React from 'react';
import './App.css';
import { Card } from 'react-bootstrap';

export default function ChatMessage(props) {
    let messageFromCurrentUser = false;

    if (props.username === props.message.user) {
        messageFromCurrentUser = true;
    }

    return (messageFromCurrentUser
        ? (
            <div className="messageContainer justifyEnd">
                <div>
                    <p className="timeStampText pr-10 ">{"10:45"}</p>
                    <p className="sentText pr-10 ">{props.username}</p>
                </div>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{props.message.text}</p>
                </div>
            </div>
        )
        : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{props.message.text}</p>
                </div>
                <div>
                    <p className="timeStampText pl-10 ">{"10:45"}</p>
                    <p className="sentText pl-10 ">{props.message.text}</p>
                </div>

            </div>
        )

    );

}

{/* <div style={{ display: "flex" }}>
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
        </div> */}