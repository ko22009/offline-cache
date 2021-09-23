import {combineReducers} from "@reduxjs/toolkit";
import {users} from "./page";

export const index = combineReducers({
    users,
})

export type RootState = ReturnType<typeof index>;
