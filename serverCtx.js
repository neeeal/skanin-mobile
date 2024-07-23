import React, { createContext, useContext, useEffect, useState } from 'react';
import URL_SERVER from './helpers/utils'; // Adjust the import path accordingly

const ServerContext = createContext(null);

export function useServer() {
    return useContext(ServerContext);
}

export function ServerProvider({ children }) {
    const [server, setServer] = useState(null);

    useEffect(() => {
        const serverInstance = new URL_SERVER({
            BASE_URL: 'https://example.com', // Replace with your base URL
            RELATIVE_URL: '/api', // Adjust as necessary
            HEADERS: { 'Content-Type': 'application/json' },
            BODY: {},
            METHOD: 'GET',
            SAVE_CONTEXT: true,
        });

        setServer(serverInstance);
    }, []);

    return (
        <ServerContext.Provider value={server}>
            {children}
        </ServerContext.Provider>
    );
}
