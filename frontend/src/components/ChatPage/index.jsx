import React from 'react';
import Navbar from '../Navbar'
import Header from '../Header';
import Form from '../Form';
import { ReactComponent as Chat } from '../../assets/images/chat-sec.svg';
import './ChatPage.css';

const ChatPage = () => {
  return (
    <div className="ChatPage Page">
      <Navbar showClose />

      <Header label="Chat with a support person" icon={<Chat className="Icon" />} />

      <section>
        <div className="ChatMessage PhoneMessage">This is a secret chat.<br />Your identity is not disclosed during this chat.</div>
        <Form placeholder="Write message..." />
      </section>
    </div>
  )
}

export default ChatPage;
