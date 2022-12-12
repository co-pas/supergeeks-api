import { Router } from "express";

import ClientController from "./app/controllers/ClientController";
const clientController = new ClientController();

const route = Router();

route.post("/client", clientController.create);
route.get("/client", clientController.index);
route.get("/client/:id", clientController.show);
route.patch("/client/:id", clientController.update);
route.delete("/client/:id", clientController.delete);

export default route;
