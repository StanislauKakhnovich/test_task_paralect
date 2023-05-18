import {  useParams } from 'react-router-dom';
import { useState, React } from 'react';
import { addToSelected, subtractFromSelected, checkSelected } from './PaginateVacancies';
import Star1 from "../images/Star_1.svg";
import Star2 from "../images/Star_2.svg";


function VacancyCard ({dataVacancies}) {
    const params = useParams();
    const prodId = params.id;
    console.log(prodId);

    const vacancy = dataVacancies.find(p=>p.id == prodId);
    console.log(vacancy);
    let details = {__html: vacancy.vacancyRichText};

    const [starClick, setStarClick] = useState(true);

 
        return (
            <div>
                <div>{vacancy.profession}</div>
                    {
                    checkSelected(vacancy)?
                    <img key={vacancy.id} src={Star2}  title='star' alt='title' onClick={()=>{subtractFromSelected(vacancy); setStarClick(!starClick)}} ></img>
                    :
                    <img key={vacancy.id} src={Star1}  title='star' alt='title' onClick={()=>{addToSelected(vacancy); setStarClick(!starClick)}} ></img>
                    }

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
                
                <div dangerouslySetInnerHTML={details} />
            </div>
        );
  

}

export default VacancyCard;