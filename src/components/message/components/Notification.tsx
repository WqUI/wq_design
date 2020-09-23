import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { MessageProps } from '../interface';
import Notice from './Notice';

function getNoticeKey() {
  return `notice-${new Date().getTime()}`;
}

class Notification extends Component {
  transitionTime: number;

  state: { notices: MessageProps[] } = {
    notices: []
  };

  constructor(props: any) {
    super(props);
    this.transitionTime = 300;
    this.removeNotice = this.removeNotice.bind(this);
  }

  addNotice(notice: MessageProps) {
    const { notices } = this.state;
    const tempNotice = { ...notice };
    if (!tempNotice.key) {
      tempNotice.key = getNoticeKey();
    }
    if (notices.every(item => item.key !== tempNotice.key)) {
      notices.push({ ...tempNotice });
      if (notices.length > 0 && notices[notices.length - 1].type === 'loading') {
        setTimeout(() => {
          this.setState({
            notices
          });
        }, this.transitionTime);
      } else {
        this.setState({
          notices
        });
      }
      if (tempNotice.duration && tempNotice.duration > 0) {
        setTimeout(() => {
          this.removeNotice(tempNotice.key!);
        }, tempNotice.duration);
      }
    }
  }

  removeNotice(key: string) {
    const { notices } = this.state;
    this.setState({
      notices: notices.filter(notice => {
        if (notice.key === key) {
          if (notice.onClose) setTimeout(() => notice.onClose!(), this.transitionTime);
          return false;
        }
        return true;
      })
    });
  }

  render() {
    const { notices } = this.state;
    return (
      <TransitionGroup className="wq-message-notification">
        {notices.map(notice => (
          <CSSTransition
            key={notice.key}
            classNames="wq-message-notice-wrapper notice"
            timeout={{
              appear: this.transitionTime,
              enter: this.transitionTime,
              exit: this.transitionTime
            }}
          >
            <Notice {...notice} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

function createNotification() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const ref = createRef<any>();
  ReactDOM.render(<Notification ref={ref} />, div);
  return {
    addNotice(notice: MessageProps) {
      return ref.current.addNotice(notice);
    },
    delNotice(key: string) {
      return ref.current.removeNotice(key);
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  }
}

export default createNotification();