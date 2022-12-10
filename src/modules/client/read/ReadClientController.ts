import { Request, Response } from "express";
import ReadClient from "./ReadClient";

export default class ReadClientController {
  public async handle(request: Request, response: Response) {
    const { id } = request.params;

    const readClient = new ReadClient();

    const result = await readClient.execute(id);

    return response.json(result);
  }
}
