import React from 'react'
import messages from './messages.json'
import './style.css'
import Actions from '../Actions'
import MessagesList from '../MessageList'
const ChatBox = () => {
    return ( 
        <div className="chatBox">
             <MessagesList messages={messages} />
            <Actions />
        </div>
     );
}
 
export default ChatBox;