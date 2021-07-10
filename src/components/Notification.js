import React, { useState } from 'react';

import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Notification = (props) => {
  const type = props.type
  const message = props.message

  return () => {
    console.log(type)
    switch (type) {
      // From example
      case 'info':
        NotificationManager.info('Info message'); // (message, title, timeOut, callback, priority)
        break;
      case 'success':
        NotificationManager.success('Success message', 'Title here');
        break;
      case 'warning':
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        break;
      case 'error':
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback');
        });
        break;
      // Our notificaition
      case 'apprem':
        // Appointment Reminder
        console.log('appointment reminder')
        NotificationManager.info(message, 'Appointment Reminder')
        break;
    }
  };
}

export default Notification;