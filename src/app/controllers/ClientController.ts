import { Request, Response } from "express";
import prisma from "../../database/Prisma";

export default class ClientController {
  public async create(request: Request, response: Response) {
    const { name, phone, email, active } = request.body;
    const phoneChange = "55" + phone + "@c.us";

    if (phone.length > 10 || phone.length < 10) {
      throw new Error("Invalid phone number.");
    }

    const phoneExists = await prisma.clients.count({
      where: {
        phone: phoneChange,
      },
    });

    if (phoneExists) {
      throw new Error("Client already exists.");
    }

    const result = await prisma.clients.create({
      data: {
        name: name,
        phone: phoneChange,
        email: email,
        active: active,
      },
    });

    return response.json(result);
  }
}
