import { Request, Response } from "express";
import ListClient from "./ListClient";

export default class ListClientController {
  public async handle(request: Request, response: Response) {
    const listClient = new ListClient();

    const result = await listClient.execute();

    return response.json(result);
  }
}
