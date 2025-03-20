import { io } from "socket.io-client";

const SOCKET_URL = "https://api.gagold.in";

const socket = io(SOCKET_URL, {
    transports: ["websocket"],
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
});

socket.on("connect", () => {
    console.log("Connected to the socket server");
});

socket.on("disconnect", () => {
    console.log("Disconnected from the socket server");
});

export default socket;