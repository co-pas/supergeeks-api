import { Router } from "express";

import ClientController from "./app/controllers/ClientController";
const client = new ClientController();

const route = Router();

route.post("/client", client.create);

export default route;
