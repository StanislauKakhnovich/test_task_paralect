import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, Outlet } from 'react-router-dom';

import VacanciesSearch from './VacanciesSearch';
import VacancyCard from './VacancyCard';
import PaginatedVacancies from './PaginateVacancies';

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
                <Route path="/" element={<VacanciesSearch/>}>
                <Route index element={<PaginatedVacancies />} />
                <Route path="/:prid" element={<VacancyCard />} />
                </Route>
               </Routes>
            </div>
        </BrowserRouter>
    );
}

export default PagesRouters;
