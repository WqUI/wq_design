import React from 'react';
import PropTypes from 'prop-types';
import { TypeMap, NoticeProps } from '../interface';

const Notice = ({ type = "info", content }: NoticeProps) => {
  const icons: TypeMap = {
    info: 'icon-info-circle-fill',
    success: 'icon-check-circle-fill',
    warning: 'icon-warning-circle-fill',
    error: 'icon-close-circle-fill',
    loading: 'icon-loading'
  };

  return (
    <div className="wq-message">
      <div className={type}>
        <svg className="wq-message-icon" aria-hidden="true">
          <use xlinkHref={`#${icons[type]}`} />
        </svg>
        <span>{content}</span>
      </div>
    </div>
  )
}

Notice.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'error', 'warning', 'loading']),
  content: PropTypes.string
}

export default Notice;