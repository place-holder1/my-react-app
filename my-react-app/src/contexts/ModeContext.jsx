import { createContext, useState, useContext } from "react";



export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState("light");
    const toggleMode = () => {
        setMode((prevMode === 'light' ? 'dark'));
    }

    return (
        <ModeContext.Provider value={{ mode, toggleMode }}>
            {children}
        </ModeContext.Provider>
    )
};

export const useMode = () => useContext(ModeContext)