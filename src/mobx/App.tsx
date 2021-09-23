import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import RootStore from "./RootStore";
import useRequest from "../hooks/useRequest";
import User from "../components/User";
import {UsersType} from "../types/usersType";
import Offline from "../components/Offline";

const App: React.FC = () => {
    const page = RootStore.users.page;
    const [value] = useRequest<UsersType>(page.toString(), `https://reqres.in/api/users?page=${page}`);
    const prevPageDisable = page === 1;
    const nextPageDisable = page === RootStore.users.total;
    useEffect(() => {
        RootStore.users.setTotal(value?.total_pages ?? 1);
    }, [value?.total_pages]);

    value?.data.map(user => !RootStore.users.users[user.id] && RootStore.users.add(user));

    return <div className="App">
        <div>Mobx</div>
        {Object.keys(RootStore.users.users).map((index) => parseInt(index) > (value?.per_page ?? 1) * (page - 1) && parseInt(index) <= (value?.per_page ?? 1) * page &&
            <User key={index} {...RootStore.users.users[index]} />)}
        {`current page: ${RootStore.users.page}`} | {`total pages: ${value?.total_pages}`}
        <div>
            <button disabled={prevPageDisable} onClick={() => RootStore.users.prevPage()}>
                {"<"}
            </button>
            {" | "}
            <button disabled={nextPageDisable} onClick={() => RootStore.users.nextPage()}>
                {">"}
            </button>
            {" | "}
            <Offline total={RootStore.users.total}/>
        </div>
    </div>
};

export default observer(App);
