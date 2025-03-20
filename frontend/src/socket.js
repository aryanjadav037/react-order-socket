import { io } from "socket.io-client";
import dotenv from "dotenv";
dotenv.config();
const SOCKET_URL = process.env.SOCKET_URL;

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