import prisma from "../../../database/Prisma";

interface ICreateClient {
  name: string;
  phone: string;
  email?: string;
}

export default class CreateClient {
  public async execute({ name, phone, email }: ICreateClient) {
    const phoneExists = await prisma.clients.count({
      where: {
        phone: phone,
      },
    });

    if (phoneExists) {
      throw new Error("Client already exists.");
    }

    const client = await prisma.clients.create({
      data: {
        name: name,
        phone: phone,
        email: email,
      },
    });

    return client;
  }
}
