import { React, useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header';
import VacanciesSearch from './VacanciesSearch';
import VacancyCard from './VacancyCard';
import Selected from './Selected';
import EmptyState from './EmptyState';
import requestVacancies from '../function/requestVacancies';
import { checkToken } from '../function/checkToken';
import '../styles/MainPage.css';



function MainPage () {

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
        return (
            <BrowserRouter>
                <Header/>
                <EmptyState isNothing={isNothing}/>
            </BrowserRouter>
        ) 
    }
    if(dataVacancies.length===0 || parametry[4]==='onClick') {    

            getVacancies();

            parametry[4]='noClick';
            return <div id="preloader" className="hidden" aria-busy='true'  role={'progressbar'}></div>
        

    }
   
    else {
        return (
            <BrowserRouter>
                  <Header/>
                  <Routes>
                    <Route path="/" element={<VacanciesSearch message={parametry[0]}  payment_from={parametry[1]} payment_to={parametry[2]} catalogues={parametry[3]} dataVacancies={dataVacancies} getParametryFind={getParametryFind} />}></Route>
                    <Route path="/:id" element={<VacancyCard dataVacancies={dataVacancies}/>} />
                    <Route path="/selected" element={<Selected isNothing={isNothing}/>}></Route>
                    
                   </Routes>
            </BrowserRouter>
        );
    }


}

export default MainPage;
