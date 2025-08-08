import React from 'react';
import './message.css'

const Message = ({ data }) => {
  const { name, title, message, imageUrl } = data;

  return (
    <div className="main-container-message">
      <div className='message-container'>
        <div className='message-info'>
          <img src={imageUrl} alt={name} />
        </div>
        <div className='message-content'>
          <h2>{name}</h2>
          <p className='message-title'>{title}</p>
          <p className='message-text'><img src='/images/icons/quote.webp' style={{ width: "60px" }} alt="quote - TIMSCDR"/><span dangerouslySetInnerHTML={{ __html: message }}></span></p>
        </div>
      </div>
    </div>
  );
};

export default Message;
