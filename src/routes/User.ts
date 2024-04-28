import express from "express";
import { getAllUser, getUserById } from "../controllers/User";

export const routerUser = express.Router();

routerUser.get("/", getAllUser);
routerUser.get("/:userId", getUserById);
