import { useParams } from 'react-router-dom';
import { useState, React } from 'react';
import { addToSelected, subtractFromSelected, checkSelected } from './PaginatedItems';
import Star1 from "../images/Star_1.svg";
import Star2 from "../images/Star_2.svg";
import Icon from "../images/Icon.svg";
import '../styles/VacancyCard.css';

function VacancyCard({ dataVacancies }) {
    const params = useParams();
    const prodId = params.id;
    const vacancy = dataVacancies.find(p => p.id == prodId);
    
    let details = { __html: vacancy.vacancyRichText };
    const [starClick, setStarClick] = useState(true);


    return (
        <div className='container-card' >
            <div className='vacancy-short short-card'
                key={vacancy.id}
            >
                <div className='upper-container'>
                    <div className='name-vacancy'>{vacancy.profession}</div>
                    {
                        checkSelected(vacancy) ?
                            <button className='btn-link' onClick={() => { subtractFromSelected(vacancy); setStarClick(!starClick) }}>
                                <img className='image-link' key={vacancy.id} src={Star2} title='star' alt='star'></img>
                            </button>
                            :
                            <button className='btn-link' onClick={() => { addToSelected(vacancy); setStarClick(!starClick) }}>
                                <img className='image-link' key={vacancy.id} src={Star1} title='star' alt='star'></img>
                            </button>
                    }
                </div>

                {
                    vacancy.payment_to
                        ?
                        <div className='middle-container middle-card'>
                            <b>з/п от {vacancy.payment_from} до {vacancy.payment_to} {vacancy.currency}</b> <span className='mnemonic'>&bull;</span>   {vacancy.type_of_work.title}
                        </div>
                        :
                        <div className='middle-container middle-card'>
                            <b>з/п от {vacancy.payment_from} {vacancy.currency}</b> <span className='mnemonic'>&bull;</span>  {vacancy.type_of_work.title}
                        </div>
                }

                <div className='down-container'>
                    <img className='image-icon' src={Icon} title='star' alt='star'></img>
                    <span>{vacancy.town.title}</span>
                </div>

            </div>

            <div className='vacancy-describe' dangerouslySetInnerHTML={details} />
        </div>
    );
}

export default VacancyCard;