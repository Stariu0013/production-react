import {ReactNode, useEffect} from "react";
import {useDispatch, useStore} from "react-redux";
import {ReduxStoreWithManager, StateSchemaKeys} from "app/providers/StoreProvider";
import {Reducer} from "@reduxjs/toolkit";

export type ReducersList = {
    [name in StateSchemaKeys]?: Reducer;
}

type ReducerListEntry = [StateSchemaKeys, Reducer];

type DynamicModuleLoaderProps = {
    children: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
};

const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        children,
        removeAfterUnmount,
        reducers
    } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({type: `@INIT ${name} reducer`});
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({type: `@DESTROY ${name} reducer`});
                })
            }
        }
    }, []);

    return (
        <>
            {children}
        </>
    );
};

export default DynamicModuleLoader;