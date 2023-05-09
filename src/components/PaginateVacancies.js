import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, Outlet, NavLink } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import '../styles/PaginateVacancies.css';

//const items = [...Array(33).keys()];
//var items = {items};

// function Items({ currentItems }) {
//   console.log (currentItems);
//     return (
//       <div className="items">
//       {currentItems && currentItems.map((item) => (
//         <div key={item.id}>
//           <h3 > {item.profession}  </h3>
//         </div>
//       ))}
//         </div>
//     );
//   }



// function PaginatedVacancies({items, itemsPerPage }) {
//   // We start with an empty list of items.
//   const [currentItems, setCurrentItems] = useState(null);
//   const [pageCount, setPageCount] = useState(0);
//   // Here we use item offsets; we could also use page offsets
//   // following the API or data you're working with.
//   const [itemOffset, setItemOffset] = useState(0);

//   useEffect(() => {
//     // Fetch items from another resources.
//     const endOffset = itemOffset + itemsPerPage;
//     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//     setCurrentItems(items.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(items.length / itemsPerPage));
//   }, [itemOffset, itemsPerPage]);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = event.selected * itemsPerPage % items.length;
//     console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
//     setItemOffset(newOffset);
//   };
//   console.log(currentItems);
//    let listVacancies =  currentItems && currentItems.map((item) => 
//     <div key={item.id}>
//       <h3 > {item.profession}  </h3>
//     </div>
//     )

//   return (
//     <>
//       {/* <Items currentItems={currentItems} /> */}
//       <div className="items">
//         {listVacancies}
//       </div>
//       <ReactPaginate
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={3}
//         marginPagesDisplayed={2}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         pageClassName="page-item"
//         pageLinkClassName="page-link"
//         previousClassName="page-item"
//         previousLinkClassName="page-link"
//         nextClassName="page-item"
//         nextLinkClassName="page-link"
//         breakLabel="..."
//         breakClassName="page-item"
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

function PaginatedVacancies({items}) {
  console.log (items);
  const listItems = items.map((item, index) =>
    // const params = useParams();
    // const prodId = params.item.profession;
    <li
      key={item.id}
    >
      <NavLink to={`/${item.id}`}>{item.profession}</NavLink>
      {index} {item.profession} {item.firm_name} з/п от {item.payment_from} {item.currency} до {item.payment_to} {item.currency} - {item.type_of_work.title} {item.town.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
//  

export default PaginatedVacancies;

