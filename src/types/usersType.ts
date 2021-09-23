import {UserType} from "./userType";

export type UsersType = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: UserType[];
    support: {
        url: string;
        text: string;
    }
};