import { LegacyRef, ReactNode } from 'react';

export type Type = 'info' | 'success' | 'error' | 'warning' | 'loading';
export type TypeMap = Record<Type, string>;

export interface NoticeProps {
  key?: string
  type?: Type
  content: React.ReactNode | string
  ref?: LegacyRef<ReactNode>
}

export interface MessageProps extends NoticeProps {
  duration?: number
  onClose?: Function
}