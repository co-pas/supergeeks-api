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
  client.onMessage((message) => {
    if (!message.isGroupMsg) {
      console.log(message.text);
    }
  });
});

export default this;
