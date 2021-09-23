import React, {useCallback, useState} from "react";
import useRequest from "./hooks/useRequest";
import {UsersType} from "./types/usersType";
import User from "./components/User";
import Offline from "./components/Offline";

const Local: React.FC = () => {
    const [page, setPage] = useState(1);
    const [value] = useRequest<UsersType>(page.toString(), `https://reqres.in/api/users?page=${page}`);
    const prevPage = useCallback(() => {
        setPage(page => page - 1);
    }, []);
    const prevPageDisable = page === 1;
    const nextPage = useCallback(() => {
        setPage(page => page + 1);
    }, []);
    const total = value ? value.total_pages : 1;
    const nextPageDisable = page === value?.total_pages;
    return <div className="App">
        <div>Without store. Only localStorage</div>
        {value?.data.map((user) => <User key={user.id} {...user} />)}
        {`current page: ${page}`} | {`total pages: ${total}`}
        <div>
            <button disabled={prevPageDisable} onClick={prevPage}>
                {"<"}
            </button>
            {" | "}
            <button disabled={nextPageDisable} onClick={nextPage}>
                {">"}
            </button>
            {" | "}
            <Offline total={total}/>
        </div>
    </div>
}

export default Local;
