import {  useParams } from 'react-router-dom';


function VacancyCard ({dataVacancies}) {
    const params = useParams();
    const prodId = params.id;
    console.log(prodId);

        const vacancy = dataVacancies.find(p=>p.id == prodId);
        console.log(vacancy);
        let details = {__html: vacancy.vacancyRichText};

 
        return (
            <>
            <div>{vacancy.profession}</div>
            <div> {vacancy.firm_name} з/п от {vacancy.payment_from} {vacancy.currency} до {vacancy.payment_to} {vacancy.currency} - {vacancy.type_of_work.title} {vacancy.town.title}</div>
            <div dangerouslySetInnerHTML={details} />
            </>
        );
  

}

export default VacancyCard;