// import exprss
import express from "express";

// import controllers
import { getAll } from "./3controller.js";
import { create } from "./3controller.js";
import { getOne } from "./3controller.js";
import { update } from "./3controller.js";
import { remove } from "./3controller.js";

// route setup
const route = express.Router();

// routes
route.get("/", getAll);
route.post("/add", create);
route.get("/detail/:id", getOne);
route.put("/edit/:id", update);
route.delete("/remove/:id", remove);

// export route
export default route;
