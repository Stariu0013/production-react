import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getLoginPassword} from "./getLoginPassword";

describe('getLoginPassword', () => {
    it('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                password: 'Password'
            }
        };

        expect(getLoginPassword(state as StateSchema)).toBe('Password');
    });

    it('should return empty string as default value', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});