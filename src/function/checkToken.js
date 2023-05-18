import requestPasswordAuth from "./requestPasswordAuth";
import requestUpdateAccessToken from "./requestPasswordAuth";

export  const checkToken = async () => {
    let data = localStorage.getItem('dataToken');
    console.log('There is '+ data + ' in LocalStorage' );
    
    if(!data) {
        console.log('You are not authenticated. Authentication in progress.');
        await requestPasswordAuth();
    }
    else {
        let dataToken = JSON.parse(data);
        let refresh_token = dataToken.refresh_token;
        let expirationDate = dataToken.ttl;
        let currentDate = new Date ();
        let currentTime = currentDate.getTime()/1000;
        if (currentTime > expirationDate) {
            console.log('The refresh token has expired. The refresh token is being updated.');
            await requestUpdateAccessToken(refresh_token);
        }
    }
}