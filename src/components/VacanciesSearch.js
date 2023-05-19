
import PaginatedVacancies from './PaginateVacancies';
import KeyWordArea from './KeyWordArea';
import Filters from './Filters'; 
import '../styles/VacanciesSearch.css';


function VacanciesSearch({dataVacancies,getParametryFind, message, payment_from, payment_to, catalogues }) {

  return (
    <>
    <div className='Main'>
      <Filters getParametryFind={getParametryFind} message={message}/>
      <div className='RightSideMain'>
        <KeyWordArea getParametryFind={getParametryFind} payment_from={payment_from} payment_to={payment_to} catalogues={catalogues}/>
        <PaginatedVacancies dataVacancies={dataVacancies}  itemsPerPage={10}/>
      </div>
    </div>
    </>
  );
}

export default VacanciesSearch; 
