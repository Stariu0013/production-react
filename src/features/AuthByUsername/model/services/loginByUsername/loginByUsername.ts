import {createAsyncThunk} from "@reduxjs/toolkit";
import {User, userActions} from "entities/User";
import axios from "axios";
import i18n from "i18next";
import {USER_LOCALSTORAGE_KEY} from "shared/consts";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error('User not found');
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(i18n.t('Логін або пароль не вірні'));
        }
    }
);