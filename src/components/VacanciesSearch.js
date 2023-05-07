
import PaginatedVacancies from './PaginateVacancies';
import RequestPasswordAuth from './RequestPasswordAuth';
import RequestUpdateAccessToken from './RequestUpdateAccessToken';
import RequestVacancies from './RequestVacancies';

function getInfo () {
  let data = localStorage.getItem('dataTokens');
  console.log(JSON.parse(data));
}

function VacanciesSearch() {
  return (
    <>
    <button onClick={RequestPasswordAuth}>Authorization</button>
    <button onClick={RequestUpdateAccessToken}>UPDATE_ACCESS_TOKEN</button>
    <button onClick={getInfo}>LocalStorage</button>
    <button onClick={RequestVacancies}>Get vacancies</button>
    <PaginatedVacancies itemsPerPage={10} />
    </>
  );
}

export default VacanciesSearch;
