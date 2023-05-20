import {client_id, client_secret, proxy_server_url } from './requestPasswordAuth';

const requestUpdateAccessToken = async (refresh_token) => {

    const UPDATE_ACCESS_TOKEN_URL = `${proxy_server_url}/oauth2/refresh_token/?refresh_token=${refresh_token}&client_id=${client_id}&client_secret=${client_secret}`;

    const settings = {
        method: 'GET',
        headers: {
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp'
        },
    }
    try{
        const response = await fetch (UPDATE_ACCESS_TOKEN_URL, settings);
        const data = await response.json();
        let stringData = JSON.stringify(data);
        localStorage.setItem('dataToken', stringData);
    } catch (e) {
        console.log(e);
    }
}

export default requestUpdateAccessToken;