export const login = 'sergei.stralenia@gmail.com';
export const password = 'paralect123';
export const client_id = '2356';
export const client_secret = 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';
export const proxy_server_url = 'https://startup-summer-2023-proxy.onrender.com/2.0';
 
// export function getTokenStorage () {
//     let data = localStorage.getItem('dataTokens');
//     let dataToken = JSON.parse(data);
//     console.log(JSON.parse(data));
//   }

const PASSWORD_AUTH_URL = `${proxy_server_url}/oauth2/password/?login=${login}&password=${password}&client_id=${client_id}&client_secret=${client_secret}`;

const requestPasswordAuth = async () => {

    const settings = {
        method: 'GET',
        headers: {
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp'
        },
    }
    try{
        const response = await fetch (PASSWORD_AUTH_URL, settings);
        const data = await response.json();
        let stringData = JSON.stringify(data);
        localStorage.setItem('dataToken', stringData);
        console.log('Authentication is success!');
        console.log(data);

        
    } catch (e) {
        console.log(e);
    }
}

export default requestPasswordAuth;