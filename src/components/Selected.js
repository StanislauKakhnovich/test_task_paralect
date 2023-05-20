import { NavLink } from 'react-router-dom';
import { useState, React } from 'react';
import { subtractFromSelected } from './PaginateVacancies';
import EmptyState from './EmptyState';
import Star2 from "../images/Star_2.svg";
import Icon from "../images/Icon.svg";
import '../styles/Selected.css';

function Selected ({getParametryFind}) {
    const [starClick, setStarClick] = useState(true);
    let selectedVacancy = JSON.parse(localStorage.getItem('vacancy'));
    let arrVacancy = selectedVacancy?selectedVacancy:[];

    if (selectedVacancy.length ===0){
      return <EmptyState getParametryFind={getParametryFind} />
    }

    else {
        const listSelectedVacancy = arrVacancy.map((vacancy, index) =>

        <li className='vacancy-short'key={vacancy.id}>
          <div className='upper-container'>
            <NavLink className='name-link' to={`/${vacancy.id}`} title={vacancy.profession}>{vacancy.profession}</NavLink>
              <button className='btn-link' onClick={()=>{subtractFromSelected(vacancy); setStarClick(!starClick)}}>
              <img className='image-link' key={vacancy.id} src={Star2}  title='star' alt='star'></img>
              </button>
      
          </div>
      
          {
            vacancy.payment_to
            ?
            <div className='middle-container'>
              <b>з/п от {vacancy.payment_from} до {vacancy.payment_to} {vacancy.currency}</b> <span className='mnemonic'>&bull;</span>   {vacancy.type_of_work.title}
            </div>
            :
            <div className='middle-container'>
              <b>з/п от {vacancy.payment_from} {vacancy.currency}</b> <span className='mnemonic'>&bull;</span>  {vacancy.type_of_work.title} 
            </div>
          }
      
          <div className='down-container'>
            <img className='image-icon' src={Icon}  title='star' alt='star'></img>
            <span>{vacancy.town.title}</span>
          </div>
        
        </li>
      );
      
      return (
        <div className='container-list'>
          <ul className='vacancy-list'>{listSelectedVacancy }</ul>
        </div>
      );
    }

  
}

export default Selected;