import React from "react";

export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => { alert("Você precisa me configurar primeiro")},
    toogleMode: () => { alert("Você precisa me configurar primeiro")}
});

export default function ColorModeProvider( props ) {
    const [mode, setMode] = React.useState(props.initialMode);

    function toogleMode () {
    if (mode === "dark") setMode("light");
    if (mode === "light") setMode("dark");
    }


        return (
            <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toogleMode: toogleMode }}>
                {props.children}
            </ColorModeContext.Provider>
        )
}