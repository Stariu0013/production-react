import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getLoginUsername} from "./getLoginUsername";

describe('getLoginUsername', () => {
    it('should return error message', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'username'
            }
        };

        expect(getLoginUsername(state as StateSchema)).toBe('username');
    });

    it('should return empty string as default value', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});