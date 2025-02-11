import React, {FC, useMemo} from 'react';
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeModes} from "app/providers/ThemeProvider/lib/ThemeContext";

const ThemeProvider: FC = ({ children }) => {
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeModes || ThemeModes.DARK;
    const [theme, setTheme] = React.useState<ThemeModes>(defaultTheme);

    const memoizedValue = useMemo(() => {
        return {
            theme,
            setTheme,
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={memoizedValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;