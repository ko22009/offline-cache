import React from "react";
import useRequest from "../../hooks/useRequest";
import {UsersType} from "../../types/usersType";

type Props = {
    page: number
}

const Requester: React.FC<Props> = ({page}) => {
    useRequest<UsersType>(page.toString(), `https://reqres.in/api/users?page=${page}`)
    return <></>
}

export default Requester