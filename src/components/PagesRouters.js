import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link,  Outlet } from 'react-router-dom';
import VacanciesSearch from './VacanciesSearch';
import VacancyCard from './VacancyCard';
import Selected from './Selected';
import RequestVacancies from './RequestVacancies';
import '../styles/PagesRouters.css';





function Nav(){
    return <>
            <nav>
            <Link to="/">Поиск вакансий</Link> 
            <Link to="/selected">Избранное</Link>
        </nav>
        <hr />
        <Outlet />
        </>;
}


const selectedVacancy = [{'id':'1','profession':'x', 'firm_name': 'nothing', 'payment_from': '0', 'payment_to': '0', 'currency':'0', 'type_of_work': {'title': 'full day'}, 'town': {'title': 'Minsk'}},
 {'id':'2','profession':'y', 'firm_name': 'nothing', 'payment_from': '0',  'payment_to': '0', 'currency':'0', 'type_of_work': {'title': 'full day'}, 'town': {'title': 'Minsk'}}]



function PagesRouters () {
    // const [select, setSelect] = useState([]);
    // const getSelected = () => {
    //     setSelect()
    // }
    // const items = [];
    const [dataVacancies, setCount] = useState([]);
    const getVacancies = async () => {
        let dataRespond = await RequestVacancies();
        let newItems = dataRespond.objects
        setCount(newItems);
      }
    if(dataVacancies.length===0) {
        getVacancies();
        return <div id="preloader" className="hidden" aria-busy='true' aria-label='Загрузка данных, пожалуйста подождите.' role={'progressbar'}>
        </div>
    }
    
    else {
        return (
            <BrowserRouter>
                <div>
                  <Nav />
                  <Routes>
                    <Route path="/" element={<VacanciesSearch dataVacancies={dataVacancies}/>}></Route>
                    <Route path="/:id" element={<VacancyCard dataVacancies={dataVacancies}/>} />
                    <Route path="/selected" element={<Selected selectedVacancy={selectedVacancy}/>}></Route>
                   </Routes>
                </div>
            </BrowserRouter>
        );
    }


}

export default PagesRouters;
