
import PaginatedVacancies from './PaginateVacancies';
import requestPasswordAuth from '../function/requestPasswordAuth';
import requestUpdateAccessToken from '../function/requestUpdateAccessToken';
import KeyWordArea from './KeyWordArea';
import Filters from './Filters'; 
import '../styles/VacanciesSearch.css';

function getTokenStorage () {
  let data = localStorage.getItem('dataTokens');
  console.log(JSON.parse(data));
}

function VacanciesSearch({dataVacancies,getParametryFind, message, payment_from, payment_to, catalogues }) {

  return (
    <>
    {/* <button onClick={requestPasswordAuth}>Authorization</button>
    <button onClick={requestUpdateAccessToken}>UPDATE_ACCESS_TOKEN</button> */}
    {/* <button onClick={getTokenStorage}>LocalStorage</button> */}
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
