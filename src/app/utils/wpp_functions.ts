import request from "request";

export async function addClient(name: string, phone: string, active: boolean) {
  return new Promise((resolve, reject) => {
    const options = {
      method: "POST",
      url: `${process.env.SG_URL}/client`,
      body: {
        name: name,
        phone: phone,
        active: active,
      },
      json: true,
    };
    request(options, function (error, response, body) {
      if (error) return reject(error);
      if (response.statusCode === 400) return resolve(response);
      if (response.statusCode === 200) {
        resolve(body);
      }
    });
  });
}
