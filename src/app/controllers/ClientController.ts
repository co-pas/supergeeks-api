import { Request, Response } from "express";
import prisma from "../../database/Prisma";

export default class ClientController {
  public async create(request: Request, response: Response) {
    const { name, phone, email, active } = request.body;

    if (!name || !phone || !active) {
      throw new Error("Required values to create.");
    }

    if (phone.length > 10 || phone.length < 10) {
      throw new Error("Invalid phone number.");
    }

    const phoneChange = "55" + phone + "@c.us";

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

  public async index(request: Request, response: Response) {
    const result = await prisma.clients.findMany({});

    return response.json(result);
  }

  public async show(request: Request, response: Response) {
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

  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const toId = Number(id);
    const { name, phone, email, active } = request.body;

    const clientExists = await prisma.clients.findUnique({
      where: {
        id: toId,
      },
    });

    if (!clientExists) {
      throw new Error("Client not found.");
    }

    const result = await prisma.clients.updateMany({
      where: {
        id: toId,
      },
      data: {
        name: name,
        phone: phone,
        email: email,
        active: active,
      },
    });

    return response.json(result);
  }

  public async delete(request: Request, response: Response) {
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

    const result = await prisma.clients.delete({
      where: {
        id: toId,
      },
    });

    return response.json(result);
  }
}
