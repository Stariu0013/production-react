import {classNames} from "shared/lib/classNames/classNames";
import cls from './Modal.module.scss';
import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import Portal from "shared/ui/Portal/Portal";

type ModalProps = {
    children?: ReactNode;
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
};

const MODAL_CLOSE_TIMEOUT = 300;

const Modal = ({className, children, onClose, isOpen}: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const mods = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing
    }

    const closeModal = useCallback(() => {
        if (onClose) {
            setIsClosing(true);

            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, MODAL_CLOSE_TIMEOUT);
        }
    }, [onClose]);
    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    }, [closeModal]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeModal}>
                    <div className={cls.content} onClick={handleContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;