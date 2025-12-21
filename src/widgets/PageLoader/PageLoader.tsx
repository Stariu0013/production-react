import {classNames} from "shared/lib/classNames/classNames";
import cls from './PageLoader.module.scss';
import Loader from "widgets/Loader/Loader";

type PageLoaderProps = {
    className?: string;
};

const PageLoader = ({className} : PageLoaderProps) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};

export default PageLoader;