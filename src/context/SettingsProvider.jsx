import { useState } from "react";
import { SettingsContext } from "../hooks/useSettings"

const SettingsProvider = ({children}) => {

    const [frameDarkness, setFrameDarkness] = useState(50);

    return (
        <SettingsContext.Provider value={{frameDarkness, setFrameDarkness}}>
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsProvider