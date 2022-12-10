import prisma from "../../Prisma";

interface ICreateClient {
  name: string;
  phone: string;
  email?: string;
  active: boolean;
}

export default class CreateClient {
  public async execute({ name, phone, email, active }: ICreateClient) {
    const phoneChange = "55" + phone + "@c.us";
    const phoneExists = await prisma.clients.count({
      where: {
        phone: phoneChange,
      },
    });

    if (phoneExists) {
      throw new Error("Client already exists.");
    }

    if (phone.length > 10 || phone.length < 10) {
      throw new Error("Invalid phone number.");
    }

    const client = await prisma.clients.create({
      data: {
        name: name,
        phone: phoneChange,
        email: email,
        active: active,
      },
    });

    return client;
  }
}
