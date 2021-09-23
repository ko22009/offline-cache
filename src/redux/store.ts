import {configureStore} from "@reduxjs/toolkit";
import {index} from "./reducers";

export default configureStore({
    reducer: index,
})
