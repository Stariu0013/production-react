import {classNames} from "shared/lib/classNames/classNames";
import './Loader.scss';

type LoaderProps = {
    className?: string;
};

const Loader = ({className}: LoaderProps) => {
    return (
        <div className={classNames('lds-spinner', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;