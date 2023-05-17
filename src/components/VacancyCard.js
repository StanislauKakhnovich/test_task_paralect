import {  useParams } from 'react-router-dom';
import { addToSelected } from './PaginateVacancies';
import Star1 from "../images/Star_1.svg"


function VacancyCard ({dataVacancies}) {
    const params = useParams();
    const prodId = params.id;
    console.log(prodId);

        const vacancy = dataVacancies.find(p=>p.id == prodId);
        console.log(vacancy);
        let details = {__html: vacancy.vacancyRichText};

 
        return (
            <div>
                <div>{vacancy.profession}</div>
                <img key={vacancy.id} src={Star1}  title='star' alt='title' onClick={()=>addToSelected(vacancy)} ></img>

                <div> {vacancy.firm_name} з/п от {vacancy.payment_from} {vacancy.currency} до {vacancy.payment_to} {vacancy.currency} - {vacancy.type_of_work.title} {vacancy.town.title}</div>
                <div dangerouslySetInnerHTML={details} />
            </div>
        );
  

}

export default VacancyCard;