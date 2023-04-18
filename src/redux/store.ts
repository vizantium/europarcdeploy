import { configureStore } from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";


export const store = configureStore({
    reducer: {

    },
});

type FuncType = typeof store.getState
export type StateType = ReturnType<FuncType>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()