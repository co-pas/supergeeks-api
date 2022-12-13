import { Router } from "express";

import ClientController from "./app/controllers/ClientController";
const clientController = new ClientController();

import SupportController from "./app/controllers/SupportController";
const supportController = new SupportController();

const route = Router();

// Client //
route.post("/client", clientController.create);
route.get("/client", clientController.index);
route.get("/client/:id", clientController.show);
route.patch("/client/:id", clientController.update);
route.delete("/client/:id", clientController.delete);

// Support //
route.post("/support", supportController.create);
route.get("/support", supportController.index);

export default route;
