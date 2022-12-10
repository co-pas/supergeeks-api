import { Router } from "express";

import ClientController from "./database/client/ClientController";
const client = new ClientController();

const route = Router();

route.post("/client", client.Create);

export default route;
