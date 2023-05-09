import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, Outlet } from 'react-router-dom';
import PaginatedVacancies from './PaginateVacancies';
import RequestPasswordAuth from './RequestPasswordAuth';
import RequestUpdateAccessToken from './RequestUpdateAccessToken';
import RequestVacancies from './RequestVacancies';
import VacancyCard from './VacancyCard';

function getInfo () {
  let data = localStorage.getItem('dataTokens');
  console.log(JSON.parse(data));
}

//var items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

// const getVacancies = async () => {
//   let x = await RequestVacancies();
//   items = x.objects
//    console.log (items);
// }

function VacanciesSearch() {
  const [items, setCount] = useState([{'id':'1','profession':'x', 'firm_name': 'nothing', 'payment_from': '0', 'payment_to': '0', 'currency':'0', 'type_of_work': {'title': 'full day'}, 'town': {'title': 'Minsk'}},
  {'id':'2','profession':'y', 'firm_name': 'nothing', 'payment_from': '0',  'payment_to': '0', 'currency':'0', 'type_of_work': {'title': 'full day'}, 'town': {'title': 'Minsk'}}]);

  const getVacancies = async () => {
    let dataRespond = await RequestVacancies();
    let newItems = dataRespond.objects
    setCount(newItems);
    
  }


  return (
    <>
    <button onClick={RequestPasswordAuth}>Authorization</button>
    <button onClick={RequestUpdateAccessToken}>UPDATE_ACCESS_TOKEN</button>
    <button onClick={getInfo}>LocalStorage</button>
    <button onClick={getVacancies}>Get vacancies</button>
    <PaginatedVacancies items={items}  itemsPerPage={10} />
    <Outlet/>
    {/* <VacancyCard items={items}/> */}
    

    </>
  );
}

export default VacanciesSearch;
