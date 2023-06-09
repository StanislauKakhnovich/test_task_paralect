import { nothing_4, nothing_5, proxy_server_url } from './requestPasswordAuth';
import { decoder } from './decoder';

const requestVacancies = async (parametry) => {
  let access_token = JSON.parse(localStorage.getItem('dataToken')).access_token;
  let token_type = JSON.parse(localStorage.getItem('dataToken')).token_type;
  const VACANCY_URL = `${proxy_server_url}/vacancies/vacancies/?count=100&published=1&keyword=${parametry[0]}&no_agreement=1&payment_from=${parametry[1]}&payment_to=${parametry[2]}&catalogues=${parametry[3]}`;

  const settings = {
    method: 'GET',
    headers: {
      'x-secret-key': `${decoder(nothing_5)}`,
      "X-Api-App-Id": `${decoder(nothing_4)}`,
      'Authorization': `${token_type} ${access_token}`
    },
  }
  try {
    const response = await fetch(VACANCY_URL, settings);
    const dataVacancies = await response.json();
    return dataVacancies;

  } catch (e) {
    console.log(e);
  }

}

export default requestVacancies;
