import {useContext, useEffect} from "react";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeModes} from "app/providers/ThemeProvider/lib/ThemeContext";

interface UseThemeResult {
    theme: ThemeModes;
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        const body = document.querySelector('body');

        body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === ThemeModes.LIGHT ? ThemeModes.DARK : ThemeModes.LIGHT;

        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    }
}