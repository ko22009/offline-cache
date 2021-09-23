import React from "react";
import {UserType} from "../types/userType";

const User: React.FC<UserType> = (props: UserType) => {
    return <ul>
        <li>id: {props.id}</li>
        <li>first name: {props.first_name}</li>
        <li>last name: {props.last_name}</li>
        <li>email: {props.email}</li>
        <li>avatar: {props.avatar}</li>
    </ul>
}

export default User