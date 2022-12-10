import { Router } from "express";

import CreateClientController from "./modules/client/create/CreateClientController";

const createClient = new CreateClientController();

const routes = Router();

routes.post("/client/add", createClient.handle);

routes.get("/teste", (request, response) => {
  return response.status(200).json({
    message: "route ok!",
  });
});

export default routes;
