import React, { useEffect, useState } from "react";
import socket from "./socket";

function App() {
  const [orders, setOrders] = useState("");

  useEffect(() => {

    socket.connect();

    socket.on("newOrder", (order) => {
      // console.log("Received order:", order);
      setOrders(order.data);
    });

    return () => {
      // socket.off("newOrder");
      socket.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <h1>Orders</h1>
      <p>orders : {orders.message}</p>
    </div>
  );
}

export default App;
