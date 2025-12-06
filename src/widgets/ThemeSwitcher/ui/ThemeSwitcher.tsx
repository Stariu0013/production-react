import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import {ThemeModes, useTheme} from "app/providers/ThemeProvider";
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import Button, {ThemeButton} from "shared/ui/Button/Button";

type ThemeSwitcherProps = {
    className?: string;
};

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            {
                theme === ThemeModes.DARK ? <DarkThemeIcon/> : <LightThemeIcon/>
            }
        </Button>
    );
};

export default ThemeSwitcher;