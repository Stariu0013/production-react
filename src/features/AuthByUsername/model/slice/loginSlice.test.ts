import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {loginActions, loginReducer} from "features/AuthByUsername/model/slice/loginSlice";
import {LoginSchema} from "features/AuthByUsername";

describe('loginSlice', () => {
    test('set username', () => {
        const state: DeepPartial<StateSchema> = { login: { username: 'username' } };

        expect(loginReducer(state as LoginSchema, loginActions.setUserName('123'))).toEqual({ username: '123' });
    });

    test('set password', () => {
        const state: DeepPartial<StateSchema> = { login: { password: 'password' } };

        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual({ username: '123' });
    });
})