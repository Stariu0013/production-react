import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import Button, {ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

type LangSwitcherProps = {
    className?: string;
};

const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk');
    };

    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.LangSwitcher, {}, [className])}
                onClick={changeLanguage}>
            {t('Мова')}
        </Button>
    );
};

export default LangSwitcher;