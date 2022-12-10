import { Request, Response } from "express";
import CreateClient from "./CreateClient";

export default class CreateClientController {
  public async handle(request: Request, response: Response) {
    const { name, phone, email } = request.body;

    const createClient = new CreateClient();

    const result = await createClient.execute({
      name: name,
      phone: phone,
      email: email,
    });

    return response.json(result);
  }
}
