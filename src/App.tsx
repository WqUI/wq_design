import React from 'react';
import { Alert } from '../components';

export default function App() {
  return (<div>
    <Alert kind="warning">这是一条警告···</Alert>
    <Alert kind="info">这是一条info···</Alert>
    <Alert kind="negative">这是一条negative···</Alert>
    <Alert kind="positive">这是一条positive···</Alert>
  </div>)
}