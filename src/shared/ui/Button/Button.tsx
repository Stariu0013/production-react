import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outline_inverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
};

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props;

    const mods = {
        [cls[theme]]: theme
    };

    return (
        <button {...otherProps} className={classNames(cls.Button, mods, [className])}>
            {children}
        </button>
    );
};

export default Button;