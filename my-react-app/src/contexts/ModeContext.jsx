import { createContext } from "react";



export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState("light");

    const handleModeChange = () => {
            ((prevMode) => (prevMode === "light" ? "dark" : "light"));
        };

    return (
        <ModeContext.Provider value={{ mode, handleModeChange }}>
            {children}
        </ModeContext.Provider>
    )
};