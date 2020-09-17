import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Button({ children }) {
  return <button className="btn default">{children}</button>;
}

Button.propTypes = {
  children: React.ReactNode,
  // type?: 
};

export default Button;