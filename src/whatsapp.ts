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
  client.onMessage((message) => {
    if (!message.isGroup && !message.isGroupMsg) {
      addClient(message.notifyName, message.from, false);
    }
  });
});

export default this;
