import React from 'react';
import {createPortal} from "react-dom";

interface PortalProps {
    children: React.ReactNode;
    container?: HTMLElement;
}

const Portal = (props: PortalProps) => {
    const {
        children,
        container = document.body
    } = props;

    return createPortal(children, container);
};

export default Portal;