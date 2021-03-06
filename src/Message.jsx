import React, {Component} from 'react';


export default function Message (props) {
  if(props.type === 'incomingMessage') {
    return (
      <div className = "message">
        <span className="message-username">{props.username}</span>
        <span className="message-content">{props.content}</span>
      </div>);
      } else {
        return (
        <div className="notification">

      <span className="notification-content">{props.content}</span>
      </div>);
  }


}

