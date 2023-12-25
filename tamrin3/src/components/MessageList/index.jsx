import React from 'react';
import Message from '../Message'
import "./style.css"
function messages({ messages }) {
    return (
        <div className='messages-List'>
            {messages.map((item) =>
                <Message key={item.id} id={item.id} body={item.body} isPeer={item.isPeer} />)}
        </div>
    )
}

export default messages;