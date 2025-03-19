import { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext();

const SOCKET_URL = process.env.REACT_APP_SOCKET_URI

const socket = io(SOCKET_URL); // Change to your server URL

export const SocketProvider = ({ children }) => {
    const [session, setSession] = useState(null);
    const [messages, setMessages] = useState([]);

    // Listen for events from the server
    useEffect(() => {
        if (!socket.connected) {
            console.log('Socket is not connected, retrying...');
            socket.connect();
        }

        socket.on('sessionStarted', (sessionData) => {
            setSession(sessionData);
        });

        socket.on('sessionClosed', () => {
            setSession(null);
            setMessages([]);
        });

        socket.on('server-message', (message) => {
            console.log('Received message:', message);
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off('sessionStarted');
            socket.off('sessionClosed');
            socket.off('server-message'); // Correct event name
        };
    }, []);

    const startChat = (userId) => {
        socket.emit('startChat', { userId });
    };

    const sendMessage = (message) => {
        console.log('Sending message:', message);
        setMessages((prevMessages) => [...prevMessages, message]);
        socket.emit('user-message', { message, sessionID: session?._id });
    };

    const closeChat = () => {
        socket.emit('closeChat');
    };

    return (
        <SocketContext.Provider value={{ session, messages, startChat, sendMessage, closeChat }}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => useContext(SocketContext);

