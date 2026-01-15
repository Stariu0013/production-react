import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss';
import {useTranslation} from "react-i18next";
import Button, {ThemeButton} from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import Text, {TextTheme} from "shared/ui/Text/Text";
import {loginActions, loginReducer} from "../../model/slice/loginSlice";
import {getLoginUsername} from "../../model/selectors/getLoginUsername/getLoginUsername";
import {getLoginIsLoading} from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import DynamicModuleLoader, {ReducersList} from "shared/lib/components/DynamicModuleLoader";

type LoginFormProps = {
    className?: string;
};

const initialReducers: ReducersList = {
    login: loginReducer
}

const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const password = useSelector(getLoginPassword);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({
            password,
            username
        }))
    }, [dispatch, username, password]);

    const mods = {
        [cls.disabled]: isLoading
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, mods, [className])}>
                <Text title={t('Форма авторизації')}/>

                {error && <Text title={error} theme={TextTheme.ERROR}/>}
                <Input type="text" className={cls.input} onChange={onChangeUsername} value={username}
                       placeholder={t('Введіть username')}
                       autofocus/>
                <Input type="text" className={cls.input} onChange={onChangePassword} value={password}
                       placeholder={t('Введіть пароль')}/>
                <Button className={cls.loginBtn} theme={ThemeButton.OUTLINE} onClick={onLoginClick}
                        disabled={isLoading}>
                    {t('Ввійти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;