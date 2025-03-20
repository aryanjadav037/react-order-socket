import React, { useContext } from "react";
import { NotificationContext } from "./notificationProvider";

function App() {
  const { orders } = useContext(NotificationContext);

  return (
    <div className="container">
      <h1>Orders</h1>
      <p>Orders: {orders?.message || "No orders yet"}</p>
    </div>
  );
}

export default App;
