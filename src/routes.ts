import { Router } from "express";

import CreateClientController from "./modules/client/create/CreateClientController";
import ReadClientController from "./modules/client/read/ReadClientController";

const createClient = new CreateClientController();
const readClient = new ReadClientController();

const routes = Router();

routes.post("/client/create", createClient.handle);
routes.get("/client/read/:id", readClient.handle);

export default routes;
