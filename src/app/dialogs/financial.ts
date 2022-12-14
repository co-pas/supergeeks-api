import { Whatsapp, Message } from "venom-bot";
import prisma from "../../database/Prisma";

class Financial {
  public async execute(client: Whatsapp, message: Message) {
    const option = parseInt(message.body);

    switch (option) {
      case 1: {
        client.sendText(message.from, "Isso é sobre Cursos.");

        break;
      }

      case 2: {
        client.sendText(message.from, "Isso é sobre  Matricula.");
        break;
      }

      case 9: {
        await prisma.supports.updateMany({
          where: {
            number: message.from,
          },
          data: {
            dialog: "wellcome",
          },
        });
        await client.sendText(
          message.from,
          "Selecione uma das opções:\n\n*1* - Sobre.\n*2* - Financeiro.\n*3* - Suporte.\n*0* - Encerrar Atendimento."
        );
        break;
      }

      case 0: {
        await prisma.supports.delete({
          where: {
            number: message.from,
          },
        });
        client.sendText(message.from, "Obrigado pelo seu contato.");
        break;
      }
    }
  }
}

export default new Financial();
