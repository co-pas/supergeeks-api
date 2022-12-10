import { Router } from "express";

const routes = Router();

routes.get("/teste", (request, response) => {
  return response.status(200).json({
    message: "route ok!",
  });
});

export default routes;
