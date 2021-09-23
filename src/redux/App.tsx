import React, {useEffect} from "react";
import useRequest from "../hooks/useRequest";
import {UsersType} from "../types/usersType";
import User from "../components/User";
import {useDispatch, useSelector} from "react-redux";
import {add, getPage, getTotal, getUsers, nextPage, prevPage, setTotal} from "./reducers/page";
import Offline from "../components/Offline";

const App: React.FC = () => {
    const users = useSelector(getUsers);
    const page = useSelector(getPage);
    const total = useSelector(getTotal);
    const dispatch = useDispatch();
    const [value] = useRequest<UsersType>(page.toString(), `https://reqres.in/api/users?page=${page}`);
    const prevPageDisable = page === 1;
    const nextPageDisable = page === total;
    useEffect(() => {
        dispatch(setTotal(value?.total_pages ?? 1));
    }, [value?.total_pages]);
    value?.data.map(user => !users[user.id] && dispatch(add(user)));
    return <div className="App">
        <div>Redux</div>
        {Object.keys(users).map((index) => parseInt(index) > (value?.per_page ?? 1) * (page - 1) && parseInt(index) <= (value?.per_page ?? 1) * page &&
            <User key={index} {...users[index]} />)}
        {`current page: ${page}`} | {`total pages: ${value?.total_pages}`}
        <div>
            <button disabled={prevPageDisable} onClick={() => dispatch(prevPage())}>
                {"<"}
            </button>
            {" | "}
            <button disabled={nextPageDisable} onClick={() => dispatch(nextPage())}>
                {">"}
            </button>
            {" | "}
            <Offline total={total}/>
        </div>
    </div>
}

export default App;
