import {Provider} from "react-redux";
import store from "./store";
import App from "./App";
import React from "react";

const index: React.FC = () =>
    <Provider store={store}>
        <App/>
    </Provider>

export default index