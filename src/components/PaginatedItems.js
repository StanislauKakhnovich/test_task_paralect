
import { NavLink } from 'react-router-dom';
import { useState, React } from 'react';
import ReactPaginate from 'react-paginate';
import '../styles/PaginatedItems.css';
import Star1 from "../images/Star_1.svg";
import Star2 from "../images/Star_2.svg";
import Icon from "../images/Icon.svg";


export function checkSelected(vacancy) {
  let vacancyStorage = localStorage.getItem('vacancy');
  if (!vacancyStorage) return false;
  else {
    let arrVacancy = JSON.parse(vacancyStorage);
    return arrVacancy.find((item) => vacancy.id === item.id);
  }
}

export function addToSelected(vacancy) {

  let arrVacancy = [];
  let vacancyStorage = localStorage.getItem('vacancy');
  if (vacancyStorage) {
    arrVacancy = JSON.parse(vacancyStorage);
    arrVacancy = [...arrVacancy, vacancy];
  }
  else {
    arrVacancy = [...arrVacancy, vacancy];
  }
  let stringData = JSON.stringify(arrVacancy)
  localStorage.setItem('vacancy', stringData);

}

export function subtractFromSelected(vacancy) {
  let vacancyStorage = JSON.parse(localStorage.getItem('vacancy'));
  let arrVacancy = vacancyStorage ? vacancyStorage : [];
  arrVacancy = arrVacancy.filter((item) => item.id !== vacancy.id)
  let stringData = JSON.stringify(arrVacancy)
  localStorage.setItem('vacancy', stringData);

}

export function Items({ currentItems }) {
  const [starClick, setStarClick] = useState(true);
  return (
    <>
      {currentItems &&
        currentItems.map((vacancy) => (
          <li data-elem={`vacancy-${vacancy.id}`} className='vacancy-short' key={vacancy.id}>
            <div className='upper-container'>
              <NavLink className='name-link' to={`/${vacancy.id}`} title={vacancy.profession}>{vacancy.profession}</NavLink>
              {
                checkSelected(vacancy) ?
                  <button data-elem={`vacancy-${vacancy.id}-shortlist-button`} className='btn-link' onClick={() => { subtractFromSelected(vacancy); setStarClick(!starClick) }}>
                    <img className='image-link' key={vacancy.id} src={Star2} title='star' alt='star'></img>
                  </button>
                  :
                  <button data-elem={`vacancy-${vacancy.id}-shortlist-button`} className='btn-link' onClick={() => { addToSelected(vacancy); setStarClick(!starClick) }}>
                    <img className='image-link' key={vacancy.id} src={Star1} title='star' alt='star'></img>
                  </button>
              }
            </div>

            {
              vacancy.payment_to
                ?
                <div className='middle-container'>
                  <b>з/п от {vacancy.payment_from} до {vacancy.payment_to} {vacancy.currency}</b> <span className='mnemonic'>&bull;</span>   {vacancy.type_of_work.title}
                </div>
                :
                <div className='middle-container'>
                  <b>з/п от {vacancy.payment_from} {vacancy.currency}</b> <span className='mnemonic'>&bull;</span>  {vacancy.type_of_work.title}
                </div>
            }

            <div className='down-container'>
              <img className='image-icon' src={Icon} title='star' alt='star'></img>
              <span>{vacancy.town.title}</span>
            </div>

          </li>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage, dataVacancies }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = dataVacancies.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dataVacancies.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dataVacancies.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='vacancy-list'>
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate className='PaginationFooter'
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;

