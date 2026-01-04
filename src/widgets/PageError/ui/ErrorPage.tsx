import {classNames} from "shared/lib/classNames/classNames";
import cls from './ErrorPage.module.scss';
import {useTranslation} from "react-i18next";

type ErrorPageProps = {
    className?: string;
};

const ErrorPage = ({className} : ErrorPageProps) => {
    const {t} = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            {t('Трапилася неочікувана помилка')}

            <button onClick={reloadPage}>
                {t('Перезагрузити сторінку')}
            </button>
        </div>
    );
};

export default ErrorPage;