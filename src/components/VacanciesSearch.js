
import PaginatedVacancies from './PaginateVacancies';
import RequestPasswordAuth from './RequestPasswordAuth';
import RequestUpdateAccessToken from './RequestUpdateAccessToken';
import KeyWordArea from './KeyWordArea';
import Filters from './Filters'; 

function getInfo () {
  let data = localStorage.getItem('dataTokens');
  console.log(JSON.parse(data));
}

function VacanciesSearch({dataVacancies,getParametryFind, message, getVacancies }) {

  return (
    <>
    <button onClick={RequestPasswordAuth}>Authorization</button>
    <button onClick={RequestUpdateAccessToken}>UPDATE_ACCESS_TOKEN</button>
    <button onClick={getInfo}>LocalStorage</button>
    <div>{message}</div>
    <Filters getParametryFind={getParametryFind} message={message}/>
    <KeyWordArea getParametryFind={getParametryFind}/>
    <PaginatedVacancies dataVacancies={dataVacancies}  itemsPerPage={10}/>
    </>
  );
}

export default VacanciesSearch;
