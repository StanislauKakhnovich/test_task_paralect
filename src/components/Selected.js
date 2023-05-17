import { NavLink } from 'react-router-dom';
import Star2 from "../images/Star_1.svg"

function Selected () {
    let selectedVacancy = JSON.parse(localStorage.getItem('vacancy'));
    const listSelectedVacancy = selectedVacancy.map((vacancy, index) =>

    <li
      key={vacancy.id}
    >
      <NavLink to={`/${vacancy.id}`}>{vacancy.profession}</NavLink>
      <img key={vacancy.id} src={Star2}  title='star' alt='title'></img>
      {index} {vacancy.profession} {vacancy.firm_name} з/п от {vacancy.payment_from} {vacancy.currency} до {vacancy.payment_to} {vacancy.currency} - {vacancy.type_of_work.title} {vacancy.town.title}
    </li>
  );

 
    return (
          <>
          <ul>{listSelectedVacancy}</ul>
     </>
    );
  
}

export default Selected;