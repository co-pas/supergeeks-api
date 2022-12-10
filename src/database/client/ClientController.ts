import { Request, Response } from "express";

import CreateClient from "./create/CreateClient";
export default class ClientController {
  //
  public async Create(request: Request, response: Response) {
    const { name, phone, email, active } = request.body;
    const createClient = new CreateClient();

    const result = await createClient.execute({
      name: name,
      phone: phone,
      email: email,
      active: active,
    });

    return response.json(result);
  }
  //
}
