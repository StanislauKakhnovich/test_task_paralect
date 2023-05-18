import { NavLink } from 'react-router-dom';
import { useState, React } from 'react';
import { subtractFromSelected } from './PaginateVacancies';
import Star2 from "../images/Star_2.svg";

function Selected () {
    const [starClick, setStarClick] = useState(true);
    let selectedVacancy = JSON.parse(localStorage.getItem('vacancy'));
    let arrVacancy = selectedVacancy?selectedVacancy:[];
    const listSelectedVacancy = arrVacancy.map((vacancy, index) =>

    <li
      key={vacancy.id}
    >
      <NavLink to={`/${vacancy.id}`}>{vacancy.profession}</NavLink>

        <img key={vacancy.id} src={Star2}  title='star' alt='title' onClick={()=>{subtractFromSelected(vacancy); setStarClick(!starClick)}} ></img>

        {
        vacancy.payment_to
        ?
        <div>
        {vacancy.firm_name} з/п от {vacancy.payment_from} до {vacancy.payment_to} {vacancy.currency}  - {vacancy.type_of_work.title} {vacancy.town.title}
        </div>
        :
        <div>
        {vacancy.firm_name} з/п от {vacancy.payment_from} {vacancy.currency}   - {vacancy.type_of_work.title} {vacancy.town.title}
        </div>
      }
    
    </li>
  );

 
    return (
          <>
          <ul>{listSelectedVacancy}</ul>
     </>
    );
  
}

export default Selected;