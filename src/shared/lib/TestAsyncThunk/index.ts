import {AsyncThunkAction} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";

type ActionCreatorType<Returned, Args, RejectedValue> = (args: Args) => AsyncThunkAction<Returned, Args, { rejectValue: RejectedValue}>

export class TestAsyncThunk<Returned, Args, RejectedValue> {
    dispatch: jest.MockedFn<any>
    getState: () => StateSchema;
    actionCreator: ActionCreatorType<Returned, Args, RejectedValue>;

    constructor(actionCreator: ActionCreatorType<Returned, Args, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(args: Args) {
        const action = this.actionCreator(args);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}