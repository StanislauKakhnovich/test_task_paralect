import {client_secret, proxy_server_url } from './RequestPasswordAuth';

const RequestVacancies = async () => {
    let access_token = JSON.parse(localStorage.getItem('dataTokens')).access_token;
    let token_type = JSON.parse(localStorage.getItem('dataTokens')).token_type;
    const VACANCY_URL = `${proxy_server_url}/vacancies/?count=100`;

    const settings = {
        method: 'GET',
        headers: {
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            "X-Api-App-Id": `${client_secret}`,
            'Authorization': `${token_type} ${access_token}`
        },
    }
    try{
        const response = await fetch (VACANCY_URL, settings);
        const dataVacancies = await response.json();
        console.log(dataVacancies);

    } catch (e) {
        console.log(e);
    }
}

export default RequestVacancies;
// export default dataVacancies;