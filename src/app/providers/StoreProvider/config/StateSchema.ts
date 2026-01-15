import {CounterSchema} from "entities/Counter";
import {UserSchema} from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import {CombinedState, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // async reducer
    login?: LoginSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: any) => CombinedState<StateSchema>,
    add: (key: StateSchemaKeys, reducer: Reducer) => void,
    remove: (key: StateSchemaKeys) => void
}