import React from 'react';
import './style.css'

function actions() {
    return (
    <div className="actions">
        <button className='actions_button'>ارسال</button>
        <input type="text"  className='actions_input' placeholder="پیام خود را اینجا بنویسید ..."/>
    </div>
    )
}

export default actions;