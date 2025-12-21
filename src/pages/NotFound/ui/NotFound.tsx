import {classNames} from "shared/lib/classNames/classNames";
import cls from './NotFound.module.scss';
import {useTranslation} from "react-i18next";

type NotFoundProps = {
    className?: string;
};

const NotFound = ({className} : NotFoundProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.NotFound, {}, [className])}>
            {t(`Сторінки не знайдено`)}
        </div>
    );
};

export default NotFound;