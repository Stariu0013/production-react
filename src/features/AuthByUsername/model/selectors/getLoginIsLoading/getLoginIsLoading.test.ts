import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getLoginIsLoading} from "./getLoginIsLoading";

describe('getLoginIsLoading', () => {
    it('should return loading state', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
               isLoading: true
            }
        };

        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    });

    it('should return false as default value', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    });
});