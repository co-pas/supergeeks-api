import prisma from "../../database/Prisma";
import { Request, Response } from "express";

export default class SupportController {
  public async create(request: Request, response: Response) {
    const { id_client, dialog } = request.body;

    const clientExists = await prisma.clients.findUnique({
      where: {
        id: id_client,
      },
    });

    if (!clientExists) {
      throw new Error("Client not foud.");
    }

    const result = await prisma.supports.create({
      data: {
        id_client: id_client,
        dialog: dialog,
        answered: false,
      },
    });

    return response.json(result);
  }
}
