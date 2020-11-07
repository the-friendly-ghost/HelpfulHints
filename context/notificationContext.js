import React, {useState, createContext} from 'react';

export const globalContext = createContext();

/*
  notification object 
    {
      text: 'sample notification',
      type: 'success',
      active: true,
      id: '123'
    }
*/
      
export const NotificationContext = ({children}) => {
  const [notifications, setNotifications] = useState([]);
  
  const addFunction = ( value ) => {
      setNumber(number + value)
  }

  const resetNotifications = () => {
    setNotifications([]);
  };

  const setNewNotification = (text) => {
    setNotification(
      [...notifications, {
        text,
        type: 'success',
        active: true,
        id: '123'
      }]);
  };

  const removeNotification = (notification) => {
    const filteredItems = notifications.filter(item => item.id !== notification.id)
    setNotifications(filteredItems)
  }

  //Pass in element ontop of {children} to have elemet across all screens.
  return (
    <NotificationContext.Provider value={{notifications, setNotifications, addFunction, removeNotification, resetNotifications, setNewNotification}}>
      {children}
    </NotificationContext.Provider>
  );
};