import React, { Component } from 'react';
import './App.css';
import ChatBox from './components/ChatBox';
class App extends Component {
  render() {
    return (
      <div className="mainContent">
       <ChatBox />
      </div>
    );
  }
}

export default App;
