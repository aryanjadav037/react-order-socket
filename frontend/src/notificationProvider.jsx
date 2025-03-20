import React, { createContext, useState, useEffect, useContext } from "react";
import socket from "./socket";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationContext = createContext();

export const SocketProvider = ({ children }) => {
  const [notification, setNotification] = useState("");

  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }

    socket.connect();

    socket.on("newOrder", (order) => {
      setNotification({
        order: order.data,
        time: new Date
      });
      toast.success(`🛒 ${order.data.message}`);
      // Show browser notification if tab is inactive
      if (document.hidden && Notification.permission === "granted") {
        const notification = new Notification(order.data.title, {
          body: order.data.message,
          icon: "https://cdn-icons-png.flaticon.com/512/3514/3514491.png",
        });

        notification.onclick = () => {
          window.focus();
        };
      }
    });

  return () => {
    socket.disconnect();
  };
}, []);

return (
  <NotificationContext.Provider value={{ notification }}>
    {children}
    <ToastContainer />
  </NotificationContext.Provider>
);
};

export const useNotification = () => useContext(NotificationContext);
