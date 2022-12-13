import prisma from "../../database/Prisma";
import { Request, Response } from "express";

export default class SupportController {
  public async create(request: Request, response: Response) {
    const { id_client, dialog } = request.body;

    const clientExists = await prisma.clients.findUnique({
      where: {
        id: Number(id_client),
      },
    });

    if (!clientExists) {
      throw new Error("Client not found.");
    }

    const result = await prisma.supports.create({
      data: {
        id_client: Number(id_client),
        dialog: dialog,
        answered: false,
      },
    });

    return response.json(result);
  }

  public async index(request: Request, response: Response) {
    const result = await prisma.supports.findMany({});

    return response.json(result);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    const supportExists = await prisma.supports.findUnique({
      where: {
        id: id,
      },
    });

    if (!supportExists) {
      throw new Error("Client not found.");
    }

    const result = await prisma.supports.findMany({
      where: {
        id: id,
      },
      select: {
        dialog: true,
        answered: true,
        created_at: true,
      },
    });

    return response.json(result);
  }
}
