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

  public async list(request: Request, response: Response) {
    const result = await prisma.clients.findMany({});

    return response.json(result);
  }

  public async read(request: Request, response: Response) {
    const { id } = request.params;
    const toId = Number(id);

    const clientExists = await prisma.clients.findUnique({
      where: {
        id: toId,
      },
    });

    if (!clientExists) {
      throw new Error("Client not found.");
    }

    const result = await prisma.clients.findMany({
      where: {
        id: toId,
      },
      select: {
        name: true,
        phone: true,
        email: true,
        active: true,
      },
    });

    return response.json(result);
  }
}
