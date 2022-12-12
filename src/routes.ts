import { Router } from "express";

import ClientController from "./app/controllers/ClientController";
const clientController = new ClientController();

const route = Router();

route.post("/client", clientController.create);
route.get("/client", clientController.list);
route.get("/client/:id", clientController.read);

export default route;
