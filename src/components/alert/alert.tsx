import React from 'react';
import PropTypes from 'prop-types';
import './style';
import { AlertProps, KindMap } from './interface';

const prefixCls = 'wq-alert';

const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
);

Alert.propTypes = {
  kind: PropTypes.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Alert;
