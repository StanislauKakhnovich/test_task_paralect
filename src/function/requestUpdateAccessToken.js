import {client_id, client_secret, proxy_server_url } from './requestPasswordAuth';
// let refresh_token = JSON.parse(localStorage.getItem('dataTokens')).refresh_token;

const requestUpdateAccessToken = async (refresh_token) => {

// const requestUpdateAccessToken = async () => {
    
    const UPDATE_ACCESS_TOKEN_URL = `${proxy_server_url}/oauth2/refresh_token/?refresh_token=${refresh_token}&client_id=${client_id}&client_secret=${client_secret}`;
    // GET https://api.superjob.ru/2.0/oauth2/refresh_token/?refresh_token=c907a&client_id=1&client_secret=yourAppSecretKey
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
        console.log('Update access token is success!');
        console.log(data);

        
    } catch (e) {
        console.log(e);
    }
}

export default requestUpdateAccessToken;