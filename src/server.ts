import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";

const server = express();

server.use(express.json());
server.use(routes);

server.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(400).json({
        status: "error",
        message: error.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "internal server error",
    });
  }
);

server.listen(3000, "localhost", () => {
  console.log("Server started.");
});
