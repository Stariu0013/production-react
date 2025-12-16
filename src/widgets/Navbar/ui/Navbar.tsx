import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";

type NavbarProps = {
    className?: string;
};

const Navbar = ({className} : NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to="/"
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}>
                    Main page
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/about"
                >About page
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;