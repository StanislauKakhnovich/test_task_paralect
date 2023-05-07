import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';



import VacanciesSearch from './VacanciesSearch';
import VacancyCard from './VacancyCard';

//const Routes = ReactRouterDOM.Routes;
//const Link = ReactRouterDOM.Link;

function Nav(){
    return <nav>
            <Link to="/">Поиск вакансий</Link>  
            <Link to="/selected">Избранное</Link>
        </nav>;
}

function PagesRouters () {
    return (
        <BrowserRouter>
            <div>
              <Nav />
              <Routes>
                {/* <Route path="/" element={<Home />} />
                
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<NotFound />} /> */}
                <Route path="/" element={<VacanciesSearch/>} />
                <Route path=":id" element={<VacancyCard />} />
               </Routes>
            </div>
        </BrowserRouter>
    );
}

export default PagesRouters;
