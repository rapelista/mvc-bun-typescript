import type { Request, Response } from "express";
import { QueryUserById, QueryUsers } from "../services/User";

export const getAllUser = (req: Request, res: Response) => {
    const users = QueryUsers();

    return res.render("user/index", {
        users,
    });
};

export const getUserById = (req: Request, res: Response) => {
    const userId = req.params.userId;
    const user = QueryUserById(parseInt(userId));

    return res.render("user/show", {
        user,
    });
};
