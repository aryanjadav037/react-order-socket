import React, { createContext, useState, useEffect } from "react";
import socket from "./socket"; 

export const NotificationContext = createContext();

export const SocketProvider = ({ children }) => {
  const [notification, setnotification] = useState("");

  useEffect(() => {
    socket.connect();

    socket.on("newOrder", (order) => {
      setnotification(order.data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <NotificationContext.Provider value={{ notification }}>
      {children}
    </NotificationContext.Provider>
  );
};
