import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import Modal from "shared/ui/Modal/Modal";
import Button, {ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

type NavbarProps = {
    className?: string;
};

const Navbar = ({className} : NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const toggleAuthModal = useCallback(() => {
        setIsAuthModalOpen(prevState => !prevState);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ThemeButton.OUTLINE_INVERTED} onClick={toggleAuthModal}>
                    {t('Ввійти')}
                </Button>
            </div>
            <Modal isOpen={isAuthModalOpen} onClose={toggleAuthModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic in inventore ipsam iusto natus nobis numquam optio placeat soluta? Incidunt minus nemo velit vitae voluptatum. Ipsam magnam repellendus sed velit!
            </Modal>
        </div>
    );
};

export default Navbar;