import { NavLink } from 'react-router-dom';

function Selected ({selectedVacancy}) {
    const listSelectedVacancy = selectedVacancy.map((vacancy, index) =>

    <li
      key={vacancy.id}
    >
      <NavLink to={`/${vacancy.id}`}>{vacancy.profession}</NavLink>
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