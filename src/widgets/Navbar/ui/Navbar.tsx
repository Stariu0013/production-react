import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import Button, {ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "features/AuthByUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";

type NavbarProps = {
    className?: string;
};

const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onModalClose = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const onShowModal = () => {
        setIsAuthModalOpen(true);
    };

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button theme={ThemeButton.OUTLINE_INVERTED} onClick={onLogout}>
                        {t('Вийти')}
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ThemeButton.OUTLINE_INVERTED} onClick={onShowModal}>
                    {t('Ввійти')}
                </Button>
            </div>
            {isAuthModalOpen && <LoginModal isOpen={isAuthModalOpen} onClose={onModalClose}/>}
        </div>
    );
};

export default Navbar;