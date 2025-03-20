import React from "react";
import { useNotification } from "./notificationProvider";

function App() {
  const { notification } = useNotification();

  return (
    <div className="container">
      <h1>Orders</h1>
      {notification ? (
        <div>
          <p><strong>Title:</strong> {notification.order.title || "No title"}</p>
          <p><strong>User:</strong> {notification.order.data?.user || "No user"}</p>
          <p><strong>Time:</strong> {notification.time.toLocaleString()}</p>
        </div>
      ) : (
        <p>No orders yet</p>
      )}
    </div>
  );
}

export default App;
