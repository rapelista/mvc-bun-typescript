import { USER_DATA } from "../models/UserData";

export const QueryUsers = () => USER_DATA;

export const QueryUserById = (id: number) => {
    return USER_DATA.find((user: any) => user.id === id);
};
