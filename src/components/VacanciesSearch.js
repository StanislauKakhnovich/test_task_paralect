
import PaginatedVacancies from './PaginateVacancies';
import RequestPasswordAuth from './RequestPasswordAuth';
import RequestUpdateAccessToken from './RequestUpdateAccessToken';
import KeyWordArea from './KeyWordArea';
import Filters from './Filters'; 
import '../styles/VacanciesSearch.css';

function getInfo () {
  let data = localStorage.getItem('dataTokens');
  console.log(JSON.parse(data));
}

function VacanciesSearch({dataVacancies,getParametryFind, message, payment_from, payment_to, catalogues, getVacancies }) {

  return (
    <>
    <button onClick={RequestPasswordAuth}>Authorization</button>
    <button onClick={RequestUpdateAccessToken}>UPDATE_ACCESS_TOKEN</button>
    <button onClick={getInfo}>LocalStorage</button>
    <div>{message}</div>
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
