import React from 'react';
import './App.css';
import TopNavBar from "./TopNavBar";
import BottomNavBar from './BottomNavBar';
import ChatWindow from './ChatWindow';
import OnlineUserWindow from './OnlineUserWindow';

export default function App() {
  return (
    <div className={"wrapper"}>
      <TopNavBar />
      <div className={"main"}>
        <div className={"main2"}>
          <ChatWindow />
          <OnlineUserWindow />
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
}

