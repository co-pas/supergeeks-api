import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";

const server = express();

server.use(express.json());

server.listen(3000, "localhost", () => {
  console.log("Server started.");
});
