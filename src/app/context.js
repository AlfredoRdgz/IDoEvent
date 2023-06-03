import { createContext } from "react";

export const GlobalContext = createContext({
    language: "es",
    setLanguage: () => {},
    
});
