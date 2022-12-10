import { Router } from "express";

import CreateClientController from "./modules/client/create/CreateClientController";
import ReadClientController from "./modules/client/read/ReadClientController";
import ListClientController from "./modules/client/list/ListClientController";

const createClient = new CreateClientController();
const readClient = new ReadClientController();
const listClient = new ListClientController();

const routes = Router();

routes.post("/client/create", createClient.handle);
routes.get("/client/read/:id", readClient.handle);
routes.get("/client/list", listClient.handle);

export default routes;
