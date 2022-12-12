import { create } from "venom-bot";

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
