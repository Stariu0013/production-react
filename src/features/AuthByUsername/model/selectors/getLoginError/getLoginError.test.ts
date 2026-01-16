import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getLoginError} from "./getLoginError";

describe('getLoginError', () => {
    it('should return error message', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                error: 'error'
            }
        };

        expect(getLoginError(state as StateSchema)).toBe('error');
    });

    it('should return empty string as default value', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginError(state as StateSchema)).toBe('');
    });
});