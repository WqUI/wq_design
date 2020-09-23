import notificationDom from './components/Notification';
import { Type } from './interface';
import './style';

let notification: typeof notificationDom;
const message = (type: Type, content: React.ReactNode | string, duration: number = 3000, onClose?: Function) => {
  if (!notification) notification = notificationDom;
  return notification.addNotice({ type, content, duration, onClose });
}

export default {
  info(content: React.ReactNode | string, duration: number = 3000, onClose?: Function) {
    return message('info', content, duration, onClose)
  },
  success(content: React.ReactNode | string, duration: number = 3000, onClose?: Function) {
    return message('success', content, duration, onClose)
  },
  warning(content: React.ReactNode | string, duration: number = 3000, onClose?: Function) {
    return message('warning', content, duration, onClose)
  },
  error(content: React.ReactNode | string, duration: number = 3000, onClose?: Function) {
    return message('error', content, duration, onClose)
  },
  loading(content: React.ReactNode | string, duration: number = 3000, onClose?: Function) {
    return message('loading', content, duration, onClose)
  },
  destroy(key: string) {
    return notification.delNotice(key);
  }
}