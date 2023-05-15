
import {  NavLink } from 'react-router-dom';
// import ReactPaginate from 'react-paginate';
import '../styles/PaginateVacancies.css';
// import IconStar from './IconStar';
import '../images/Star1.png';
import Star1 from "../images/Star_1.svg"

//const vacancys = [...Array(33).keys()];
//var vacancys = {vacancys};

// function vacancys({ currentvacancys }) {
//   console.log (currentvacancys);
//     return (
//       <div className="vacancys">
//       {currentvacancys && currentvacancys.map((vacancy) => (
//         <div key={vacancy.id}>
//           <h3 > {vacancy.profession}  </h3>
//         </div>
//       ))}
//         </div>
//     );
//   }



// function PaginatedVacancies({vacancys, vacancysPerPage }) {
//   // We start with an empty list of vacancys.
//   const [currentvacancys, setCurrentvacancys] = useState(null);
//   const [pageCount, setPageCount] = useState(0);
//   // Here we use vacancy offsets; we could also use page offsets
//   // following the API or data you're working with.
//   const [vacancyOffset, setvacancyOffset] = useState(0);

//   useEffect(() => {
//     // Fetch vacancys from another resources.
//     const endOffset = vacancyOffset + vacancysPerPage;
//     console.log(`Loading vacancys from ${vacancyOffset} to ${endOffset}`);
//     setCurrentvacancys(vacancys.slice(vacancyOffset, endOffset));
//     setPageCount(Math.ceil(vacancys.length / vacancysPerPage));
//   }, [vacancyOffset, vacancysPerPage]);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = event.selected * vacancysPerPage % vacancys.length;
//     console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
//     setvacancyOffset(newOffset);
//   };
//   console.log(currentvacancys);
//    let listVacancies =  currentvacancys && currentvacancys.map((vacancy) => 
//     <div key={vacancy.id}>
//       <h3 > {vacancy.profession}  </h3>
//     </div>
//     )

//   return (
//     <>
//       {/* <vacancys currentvacancys={currentvacancys} /> */}
//       <div className="vacancys">
//         {listVacancies}
//       </div>
//       <ReactPaginate
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={3}
//         marginPagesDisplayed={2}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         pageClassName="page-vacancy"
//         pageLinkClassName="page-link"
//         previousClassName="page-vacancy"
//         previousLinkClassName="page-link"
//         nextClassName="page-vacancy"
//         nextLinkClassName="page-link"
//         breakLabel="..."
//         breakClassName="page-vacancy"
//         breakLinkClassName="page-link"
//         containerClassName="pagination"
//         activeClassName="active"
//         renderOnZeroPageCount={null}
//       />
//     </>
//   );
// }

// function Product(){
//   // получаем параметры
//   const params = useParams();
//   const prodId = params.id;
//   return <h2>Товар № {prodId}</h2>;
// }

function PaginatedVacancies({dataVacancies}) {

  const listVacancies = dataVacancies.map((vacancy, index) =>

    <li
      key={vacancy.id}
    >
      <div>
        <NavLink to={`/${vacancy.id}`}>{vacancy.profession}</NavLink>
        {/* <IconStar          
        name={'document'}
         color={'#5E96FC'}
         size={'32'}
         className={'button-left-panel'}
         /> */}
         <img key={vacancy.id} src={Star1}  title='star' alt='title'></img>
        
      </div>
      
      {index} {vacancy.profession} {vacancy.firm_name} з/п от {vacancy.payment_from} {vacancy.currency} до {vacancy.payment_to} {vacancy.currency} - {vacancy.type_of_work.title} {vacancy.town.title}
    </li>
  );

  return (
    <ul>{listVacancies}</ul>
  );
}


export default PaginatedVacancies;

