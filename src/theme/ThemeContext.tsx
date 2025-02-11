import {createContext} from "react";

export enum ThemeModes {
    LIGHT = "light",
    DARK = "dark"
}

export interface ThemeContextProps {
    theme?: ThemeModes;
    setTheme?: (theme: ThemeModes) => void;
}

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const ThemeContext = createContext<ThemeContextProps>({});