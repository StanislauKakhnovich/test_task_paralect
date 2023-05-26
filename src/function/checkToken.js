import requestPasswordAuth from "./requestPasswordAuth";
import requestUpdateAccessToken from "./requestPasswordAuth";

export const checkToken = async () => {
  let data = localStorage.getItem('dataToken');

  if (!data) {
    await requestPasswordAuth();
  }
  else {
    let dataToken = JSON.parse(data);
    let refresh_token = dataToken.refresh_token;
    console.log(refresh_token);
    let expirationDate = dataToken.ttl;
    let currentDate = new Date();
    let currentTime = currentDate.getTime() / 1000;
    if (currentTime > expirationDate) {
      console.log(currentTime);
      console.log(expirationDate);
      await requestUpdateAccessToken(refresh_token);
    }
  }
}