import express from "express";
import * as path from "node:path";
import { routerUser } from "./src/routes/User";

/**
 * Express Configuration
 */
const app = express();
const port = Bun.env.SERVER_PORT || 3000;

/**
 * App Settings
 */
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

/**
 * App Routes
 */
app.use("/users", routerUser);

/**
 * App Listen
 */
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
