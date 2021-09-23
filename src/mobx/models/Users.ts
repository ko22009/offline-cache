import {action, makeObservable, observable} from 'mobx';
import {UsersObjectType} from "../../types/usersObjectType";
import {UserType} from "../../types/userType";

class Users {
    page = 1
    total = 1
    users: UsersObjectType = {}

    constructor() {
        makeObservable(this, {
            page: observable,
            total: observable,
            users: observable.ref,
            add: action.bound,
            setTotal: action.bound,
            prevPage: action.bound,
            nextPage: action.bound,
        });
    }

    add(user: UserType): void {
        this.users = {
            ...this.users,
            [user.id]: user
        };
    }

    setTotal(total: number): void {
        this.total = total;
    }
    
    prevPage(): void {
        this.page--;
    }

    nextPage(): void {
        this.page++;
    }
}

export default Users;
