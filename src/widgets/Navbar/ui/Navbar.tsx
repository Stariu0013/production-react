import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import Button, {ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "features/AuthByUsername";

type NavbarProps = {
    className?: string;
};

const Navbar = ({className} : NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onModalClose = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const onShowModal = () => {
        setIsAuthModalOpen(true);
    };

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ThemeButton.OUTLINE_INVERTED} onClick={onShowModal}>
                    {t('Ввійти')}
                </Button>
            </div>
            <LoginModal isOpen={isAuthModalOpen} onClose={onModalClose}/>
        </div>
    );
};

export default Navbar;