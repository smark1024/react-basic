import { useState } from "react";
import { DarkModeContext } from "./DarkModeContext";

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((prev) => !prev);

    return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}
