// import axios from 'axios';
// import {StateSchema} from "app/providers/StoreProvider";
// import {Dispatch} from "@reduxjs/toolkit";
// import {loginByUsername} from "./loginByUsername";
// import {TestAsyncThunk} from "shared/lib/TestAsyncThunk";
// import {userActions} from "entities/User";
//
// jest.mock('axios');
//
// const mockedAxios = jest.mocked(axios);
//
// describe('loginByUsername', () => {
//     test('success login', async () => {
//         const userValue = { username: '123', id: '1'};
//
//         mockedAxios.post.mockReturnValue(Promise.resolve({
//             data: userValue
//         }));
//
//         const thunk = new TestAsyncThunk(loginByUsername);
//         const result = await thunk.callThunk({ username: 'username', password: 'password'});
//
//         expect(thunk.dispatch).toHaveBeenCalledTimes(3);
//         expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(result.payload).toEqual(userValue);
//         expect(result.meta.requestStatus).toBe('fulfilled');
//     });
//
//     test('error login', async () => {
//         mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
//
//         const thunk = new TestAsyncThunk(loginByUsername);
//         const result = await thunk.callThunk({ username: 'username', password: 'password'});
//
//         expect(thunk.dispatch).toHaveBeenCalledTimes(2);
//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(result.meta.requestStatus).toBe('rejected');
//         expect(result.payload).toBe('error');
//     });
// })