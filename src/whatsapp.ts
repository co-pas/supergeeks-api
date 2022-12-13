import { create } from "venom-bot";
import { addClient } from "./app/utils/wpp_functions";

create(
  "Support",
  (base64Qrimg: string) => {
    //Nothing...
  },
  (status) => {
    //Nothing...
  }
).then(async (client) => {
  //   (await x.execute()).filter((obj) => {
  //     client.sendText(obj.phone, "Oi... BOT Testing");
  //   });
  // AO RECEBER UMA MENSAGEM:
  client.onMessage((message) => {
    if (!message.isGroupMsg) {
      //   name: message.notifyName,
      //   phone: message.from,
      //   active: false,

      addClient(message.notifyName, message.from, false);
    }
  });
});

export default this;
