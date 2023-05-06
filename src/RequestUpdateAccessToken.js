import {client_id, client_secret } from './RequestPasswordAuth';


const RequestUpdateAccessToken = async () => {
    let refresh_token = JSON.parse(localStorage.getItem('dataTokens')).refresh_token;
    const UPDATE_ACCESS_TOKEN_URL = `https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/refresh_token/?refresh_token=${refresh_token}&client_id=${client_id}&client_secret=${client_secret}`;

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
        localStorage.setItem('dataTokens', stringData);
        console.log(data);

        
    } catch (e) {
        console.log(e);
    }
}

export default RequestUpdateAccessToken;