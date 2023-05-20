
import PaginatedItems from './PaginatedItems';
import KeyWordArea from './KeyWordArea';
import Filters from './Filters'; 
import '../styles/VacanciesSearch.css';


function VacanciesSearch({dataVacancies,getParametryFind, message, payment_from, payment_to, catalogues, startPreloader }) {

  return (
    <>
    <div className='Main'>
      <Filters getParametryFind={getParametryFind} message={message}/>
      <div className='RightSideMain'>
        <KeyWordArea getParametryFind={getParametryFind} payment_from={payment_from} payment_to={payment_to} catalogues={catalogues}/>
        <PaginatedItems dataVacancies={dataVacancies}  itemsPerPage={4}/>
      </div>
      {startPreloader&&<div id="preloader" className="hidden" aria-busy='true'  role={'progressbar'}></div>}
    </div>
    </>
  );
}

export default VacanciesSearch; 
