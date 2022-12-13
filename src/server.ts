import "express-async-errors";
import "./whatsapp.ts";
import express, { NextFunction, Request, Response } from "express";
import route from "./routes";

const server = express();

server.use(express.json());
server.use(route);

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

server.listen(Number(process.env.PORT), String(process.env.HOST));

console.log(process.env.SG_URL);
