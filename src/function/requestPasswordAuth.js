import { decoder } from "./decoder";
export const nothing_1 = '}o|qos8}~|kvoxskJqwksv8myw';
export const nothing_2 = 'zk|kvom~;<=';
export const nothing_3 = '<=?@';
export const nothing_4 = '=8|8;=A>>:;:?8ppnlkl;;>pC<lB<;okm>o<;p>B?=>=C<>kAA=;=;8:@m=lnllB>>@kolC;m=?lB:m><pp@ColCm>?AC>B';
export const nothing_5 = 'QO_>xn=|ot4tor8o{z';

export const proxy_server_url = 'https://startup-summer-2023-proxy.onrender.com/2.0';

// export const proxy_server_url = 'https://startup-summer-proxy-production.up.railway.app/2.0';

const PASSWORD_AUTH_URL = `${proxy_server_url}/oauth2/password/?login=${decoder(nothing_1)}&password=${decoder(nothing_2)}&client_id=${decoder(nothing_3)}&client_secret=${decoder(nothing_4)}`;

const requestPasswordAuth = async () => {

  const settings = {
    method: 'GET',
    headers: {
      'x-secret-key': `${decoder(nothing_5)}`
    },
  }
  try {
    const response = await fetch(PASSWORD_AUTH_URL, settings);
    const data = await response.json();
    let stringData = JSON.stringify(data);
    localStorage.setItem('dataToken', stringData);
  } catch (e) {
    console.log(e);
  }
}

export default requestPasswordAuth;