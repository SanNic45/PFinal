import React from 'react';

const MessageComponent = ({ type, message }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  );
};

export default MessageComponent;
