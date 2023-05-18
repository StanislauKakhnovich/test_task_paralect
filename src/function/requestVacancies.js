import {client_secret, proxy_server_url } from './requestPasswordAuth';

// let keyword = 'менеджер';
// let payment_from=10000;
// let payment_to=300000;
// let catalogues=33;
// keyword, payment_from, payment_to, catalogues

const requestVacancies = async (parametry) => {
    let access_token = JSON.parse(localStorage.getItem('dataToken')).access_token;
    let token_type = JSON.parse(localStorage.getItem('dataToken')).token_type;
    //const VACANCY_URL = `${proxy_server_url}/catalogues/parent/33`;
    //const VACANCY_URL = `${proxy_server_url}/vacancies`;
    //const VACANCY_URL = `${proxy_server_url}/vacancies/?count=100`;
    const VACANCY_URL = `${proxy_server_url}/vacancies/vacancies/?count=100&published=1&keyword=${parametry[0]}&no_agreement=1&payment_from=${parametry[1]}&payment_to=${parametry[2]}&catalogues=${parametry[3]}`;
    ///catalogues/parent/33
    //GET https://api.superjob.ru/2.0/vacancies/?keyword=%D0%91%D1%83%D1%85%D0%B3%D0%B0%D0%BB%D1%82%D0%B5%D1%80&order_field=payment&order_direction=asc&payment_from=10000&payment_to=300000&no_agreement=1&town=4&catalogues=33%2C151%2C11%2C438%2C327%2C306%2C478%2C86&place_of_work=1&moveable=1&agency=1&type_of_work=6&age=30&gender=2&education=2&experience=3&driving_licence%5B0%5D=B&driving_licence%5B1%5D=C&language=1&lang_level=3&languages_particular=1
    // Для поиска используй следующие парамерты запроса:
    // published=1
    // keyword=строка из поиска
    // payment_from=сумма оклада от
    // payment_to=сумма оклада до
    // catalogues=33 - поле key из каталога отраслей
    
    
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
        return dataVacancies

    } catch (e) {
        console.log(e);
    }
    
}

export default requestVacancies;
// export default dataVacancies;