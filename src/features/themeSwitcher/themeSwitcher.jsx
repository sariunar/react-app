import React, { useContext } from "react";
import { useTheme } from "../../processes/contextTheme";
import { ContrastIcon } from "./images/contrast";
import "./themeSwitcher.css";

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    const handleClick = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return <div onClick={handleClick} className="contrastIcon">
        <ContrastIcon />
    </div>
}