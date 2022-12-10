import prisma from "../../../database/Prisma";

export default class ListClient {
  public async execute() {
    const clients = await prisma.clients.findMany({});

    return clients;
  }
}
