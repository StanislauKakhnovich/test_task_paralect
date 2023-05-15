
import PaginatedVacancies from './PaginateVacancies';
import RequestPasswordAuth from './RequestPasswordAuth';
import RequestUpdateAccessToken from './RequestUpdateAccessToken';

function getInfo () {
  let data = localStorage.getItem('dataTokens');
  console.log(JSON.parse(data));
}

function VacanciesSearch({dataVacancies}) {

  return (
    <>
    <button onClick={RequestPasswordAuth}>Authorization</button>
    <button onClick={RequestUpdateAccessToken}>UPDATE_ACCESS_TOKEN</button>
    <button onClick={getInfo}>LocalStorage</button>
    <PaginatedVacancies dataVacancies={dataVacancies}  itemsPerPage={10} />
    </>
  );
}

export default VacanciesSearch;
