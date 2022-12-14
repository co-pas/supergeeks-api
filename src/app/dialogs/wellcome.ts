import { Whatsapp, Message } from "venom-bot";
import prisma from "../../database/Prisma";

class Wellcome {
  public async execute(client: Whatsapp, message: Message) {
    const option = parseInt(message.body);

    switch (option) {
      // Sobre
      case 1: {
        await prisma.supports.updateMany({
          where: {
            number: message.from,
          },
          data: {
            dialog: "about",
          },
        });
        client.sendText(
          message.from,
          "Selecione uma das opções:\n\n*1* - Levels.\n*2* - Metodologia.\n*9* - Voltar.\n*0* - Encerrar atendimento."
        );
        break;
      }

      case 2: {
        // Financeiro
        await prisma.supports.updateMany({
          where: {
            number: message.from,
          },
          data: {
            dialog: "financial",
          },
        });
        client.sendText(
          message.from,
          "Selecione uma das opções:\n\n*1* - Cursos.\n*2* - Matricula.\n*9* - Voltar.\n*0* - Encerrar atendimento."
        );
        break;
      }

      case 3: {
        // Suporte
        await prisma.supports.updateMany({
          where: {
            number: message.from,
          },
          data: {
            dialog: "support",
          },
        });
        client.sendText(
          message.from,
          "Selecione uma das opções:\n\n*1* - Falar com atendente.\n*2* - Outras opções de suporte.\n*9* - Voltar.\n*0* - Encerrar atendimento."
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

export default new Wellcome();
