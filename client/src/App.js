import React, { useState, useEffect } from 'react';
import './App.css';
import TopNavBar from "./TopNavBar";
import BottomNavBar from './BottomNavBar';
import ChatWindow from './ChatWindow';
import OnlineUserWindow from './OnlineUserWindow';
import io from 'socket.io-client';

let socket;

export default function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const endpoint = 'localhost:5000'


  useEffect(() => {
    socket = io(endpoint);

    socket.emit('join', () => { });

    return () => {
      socket.emit("disconnect");
      socket.off();
    }
  }, [endpoint]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    })

    return () => {
      socket.emit('disconnect');
      socket.off();
    }

  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => {
        setMessage("");
      })
    }
  }

  console.log(message, messages)


  return (
    <div className={"wrapper"}>
      <TopNavBar />
      <div className={"main"}>
        <div className={"main2"}>
          <ChatWindow />
          <OnlineUserWindow />
        </div>
      </div>
      <BottomNavBar value={message} valueChangeHandler={(value) => { setMessage(value) }} sendMessageHandler={sendMessage} />
    </div>
  );
}

