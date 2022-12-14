import { create } from "venom-bot";
import prisma from "./database/Prisma";

create(
  "Support",
  (base64Qrimg: string) => {
    //Nothing...
  },
  (status) => {
    //Nothing...
  }
).then(async (client) => {
  client.onMessage(async (message) => {
    if (message.isGroupMsg === false) {
      const support = await prisma.supports.findUnique({
        where: { number: message.from },
      });

      if (!support) {
        await prisma.supports.create({
          data: {
            number: message.from,
            dialog: "wellcome",
            stage: 0,
          },
        });

        await client.sendText(
          message.from,
          "Olá eu sou a *Julia*, sua atendente virtual.\nSeja bem vindo(a) a central de atendimento da *SuperGeeks - Asa Norte!*"
        );
        await client.sendText(
          message.from,
          "Selecione uma das opções:\n\n*1* - Sobre.\n*2* - Financeiro.\n*3* - Suporte.\n*0* - Encerrar Atendimento."
        );
        return;
      }

      try {
        const dialogFileName = support.dialog;
        const {
          default: { execute },
        } = require(`./app/dialogs/${dialogFileName}`);
        execute(client, message);
      } catch (error) {
        client.sendText(
          message.from,
          "❌ Desculpe, mas não conseguimos processar seu pedido.\n Tente novamente mais tarde."
        );
        await prisma.supports.delete({ where: { number: message.from } });
      }
    }
  });
});

export default this;
