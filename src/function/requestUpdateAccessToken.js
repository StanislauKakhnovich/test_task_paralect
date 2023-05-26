import { nothing_3, nothing_4, nothing_5, proxy_server_url } from './requestPasswordAuth';
import { decoder } from './decoder';


const requestUpdateAccessToken = async (refresh_token) => {

  const UPDATE_ACCESS_TOKEN_URL = `${proxy_server_url}/oauth2/refresh_token/?refresh_token=${refresh_token}&client_id=${decoder(nothing_3)}&client_secret=${decoder(nothing_4)}`;

  const settings = {
    method: 'GET',
    headers: {
      'x-secret-key': `${decoder(nothing_5)}`
    },
  }
  try {
    const response = await fetch(UPDATE_ACCESS_TOKEN_URL, settings);
    const data = await response.json();
    let stringData = JSON.stringify(data);
    localStorage.setItem('dataToken', stringData);
  } catch (e) {
    console.log(e);
  }
}

export default requestUpdateAccessToken;