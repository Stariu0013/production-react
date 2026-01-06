import {counterActions, counterReducer} from "./counterSlice";
import {CounterSchema} from "entities/Counter";

describe('counterSlice', () => {
    test('should decrement value', () => {
        const state: CounterSchema = {value: 10};

        expect(
            counterReducer(state, counterActions.decrement())
        ).toEqual({value: 9});
    });

    test('should increment value', () => {
        const state: CounterSchema = {value: 10};

        expect(
            counterReducer(state, counterActions.increment())
        ).toEqual({value: 11});
    });

    test('should increment empty state(default value is 0 for counterReducer)', () => {
        expect(
            counterReducer(undefined, counterActions.increment())
        ).toEqual({value: 1});
    });
})