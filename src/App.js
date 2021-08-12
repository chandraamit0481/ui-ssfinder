import './App.scss';
import React, { useState } from 'react';
import ChatBox from './ChatBox/chatbox'

function App() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const openChatBox = () => setToggle1(true);
  const closeChatBox = () => setToggle1(false);
  const openOrMinimizeChatBox = () => toggle2 ? setToggle2(false) : setToggle2(true);
  return (
    <div className="App container-fluid">
      <h1>Welcome to SSFinder Bot</h1>
      <ChatBox toggle1={toggle1} toggle2={toggle2} openChatBox={openChatBox} closeChatBox={closeChatBox} openOrMinimizeChatBox={openOrMinimizeChatBox} />
    </div>
  );
}

export default App;
