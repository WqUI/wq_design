import React from 'react';
import message from '../message';
import '../style';

export default () => {
  const showMessage = () => {
    const type = ['info', 'warning', 'success', 'error'];
    const index = Math.floor(Math.random() * 3);
    message[type[index]](`${type[index]} message...`);
  }
  return (
    <div style={{ width: 100, height: 40, backgroundColor: '#1890ff' }} onClick={showMessage} />
  )
};
