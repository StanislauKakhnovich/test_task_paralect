import React from 'react';
import { useState, useEffect } from 'react';
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

//  let keyword = 'менеджер';
//  let payment_from=10000;
//  let payment_to=300000;
//  let catalogues=33;

 


// keyword, payment_from, payment_to, catalogues
function PagesRouters () {
    // const [select, setSelect] = useState([]);
    // const getSelected = () => {
    //     setSelect()
    // }
    // const items = [];
    //'менеджер',10000,300000,33
    const [parametry, setParametry] = useState(['','','','','noClick']);
    // const [markerClick, setmarkerClick] = useState(false);
    const getParametryFind = (message, payment_from,payment_to,catalogues, markerClick) => {
        let arrParametry = [message,payment_from,payment_to,catalogues,'onClick'];
        console.log(arrParametry);
        console.log (dataVacancies);
        return setParametry(arrParametry);
    } 
    const [dataVacancies, setDataVacancies] = useState([]);
    const [isRequest, setIsRequest] = useState(false); 
    
    const getVacancies = async () => {
        let dataRespond = await RequestVacancies(parametry);
        let newVacancies = dataRespond.objects
        setDataVacancies(newVacancies);
        console.log(newVacancies.length);
        if(newVacancies.length==0) setIsRequest(true);
        else if (newVacancies.length>0) setIsRequest(false);

      }





        // useEffect(() => {
        //         if(dataVacancies.length===0&&!isRequest) {
        //             getVacancies();
        //             return <div id="preloader" className="hidden" aria-busy='true' aria-label='Загрузка данных, пожалуйста подождите.' role={'progressbar'}></div>
        //         }
        //         if (dataVacancies.length===0&&isRequest) {
        //             return <div>По вашему запросу ничего не обнаружено</div>
        //         }
                
        //         else {
        //             return (
        //                 <BrowserRouter>
        //                     <div>
        //                     <Nav />
        //                     <Routes>
        //                         <Route path="/" element={<VacanciesSearch message={parametry[0]} dataVacancies={dataVacancies} getParametryFind={getParametryFind}/>}></Route>
        //                         <Route path="/:id" element={<VacancyCard dataVacancies={dataVacancies}/>} />
        //                         <Route path="/selected" element={<Selected selectedVacancy={selectedVacancy}/>}></Route>
        //                     </Routes>
        //                     </div>
        //                 </BrowserRouter>
        //             );
        //         }
        // }, [parametry]);




   
    if((dataVacancies.length===0&&!isRequest) || (parametry[4]==='onClick'&&!isRequest)) {
        getVacancies();
        parametry[4]='noClick';
        return <div id="preloader" className="hidden" aria-busy='true' aria-label='Загрузка данных, пожалуйста подождите.' role={'progressbar'}></div>
    }
        


    // if (dataVacancies.length===0&&isRequest) {
    //     return <div>По вашему запросу ничего не обнаружено</div>
    // }
    
    else {
        return (
            <BrowserRouter>
                <div>
                  <Nav />
                  <Routes>
                    <Route path="/" element={<VacanciesSearch message={parametry[0]} dataVacancies={dataVacancies} getParametryFind={getParametryFind} getVacancies={getVacancies} />}></Route>
                    <Route path="/:id" element={<VacancyCard dataVacancies={dataVacancies}/>} />
                    <Route path="/selected" element={<Selected selectedVacancy={selectedVacancy}/>}></Route>
                   </Routes>
                </div>
            </BrowserRouter>
        );
    }


}

export default PagesRouters;
