import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index";
import {UserType} from "../../types/userType";
import {UsersObjectType} from "../../types/usersObjectType";

type initialType = {
    page: number;
    users: UsersObjectType;
    total: number;
};

const initialState: initialType = {
    page: 1,
    users: {},
    total: 1,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<UserType>) => ({
            ...state,
            users: {
                ...state.users,
                [action.payload.id]: action.payload
            },
        }),
        setTotal: (state, action: PayloadAction<number>) => ({
            ...state,
            total: action.payload
        }),
        prevPage: (state) => ({
            ...state,
            page: state.page === 1 ? 1 : state.page - 1
        }),
        nextPage: (state) => ({
            ...state,
            page: state.page === state.total ? state.total : state.page + 1
        })
    }
});

export const getPage = (state: RootState): number => state.users.page
export const getUsers = (state: RootState): UsersObjectType => state.users.users
export const getTotal = (state: RootState): number => state.users.total

export const {
    add,
    setTotal,
    prevPage,
    nextPage
} = usersSlice.actions;
export const users = usersSlice.reducer;
