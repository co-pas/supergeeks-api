import prisma from "../../../database/Prisma";

export default class ReadClient {
  public async execute(id: string) {
    const toId = Number(id);

    const clientExists = await prisma.clients.findUnique({
      where: {
        id: toId,
      },
    });

    if (!clientExists) {
      throw new Error("Client not found.");
    }

    const client = await prisma.clients.findMany({
      where: {
        id: toId,
      },
      select: {
        name: true,
        phone: true,
        email: true,
      },
    });

    return client;
  }
}
