import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link,  Outlet } from 'react-router-dom';
import VacanciesSearch from './VacanciesSearch';
import VacancyCard from './VacancyCard';
import Selected from './Selected';
import requestVacancies from '../function/requestVacancies';
import { checkToken } from '../function/checkToken';
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

function PagesRouters () {

    const [parametry, setParametry] = useState(['','','','','noClick']);

    const getParametryFind = (message, payment_from,payment_to,catalogues) => {
        let arrParametry = [message,payment_from,payment_to,catalogues,'onClick'];
        console.log(arrParametry);
        console.log (dataVacancies);
        return setParametry(arrParametry);
    } 
    const [dataVacancies, setDataVacancies] = useState([]);
    const [isNothing, setIsNothing] = useState(false); 
    
    const getVacancies = async () => {

            await checkToken();

            let dataRespond = await requestVacancies(parametry);
            let newVacancies = dataRespond.objects;
            setDataVacancies(newVacancies);
            console.log(parametry);
            console.log(newVacancies.length);
            if (newVacancies.length===0) setIsNothing(true);
      }

    if (isNothing) {
        return <div>По вашему запросу ничего не обнаружено</div>
    }
    if(dataVacancies.length===0 || parametry[4]==='onClick') {    

            getVacancies();

            parametry[4]='noClick';
            return <div id="preloader" className="hidden" aria-busy='true'  role={'progressbar'}></div>
        

    }
   
    else {
        return (
            <BrowserRouter>
                <div>
                  <Nav />
                  <Routes>
                    <Route path="/" element={<VacanciesSearch message={parametry[0]}  payment_from={parametry[1]} payment_to={parametry[2]} catalogues={parametry[3]} dataVacancies={dataVacancies} getParametryFind={getParametryFind} />}></Route>
                    <Route path="/:id" element={<VacancyCard dataVacancies={dataVacancies}/>} />
                    <Route path="/selected" element={<Selected/>}></Route>
                   </Routes>
                </div>
            </BrowserRouter>
        );
    }


}

export default PagesRouters;
