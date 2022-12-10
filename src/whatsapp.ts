import { create } from "venom-bot";
import ListClient from "./database/client/list/ListClient";

const x = new ListClient();

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
});

export default this;
