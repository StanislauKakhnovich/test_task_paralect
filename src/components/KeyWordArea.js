import { useState } from 'react';
import '../styles/KeyWordArea.css';
import Search from "../images/Search.svg";

function KeyWordArea({ getParametryFind, payment_from, payment_to, catalogues }) {
  const [message, setMessage] = useState('');

  return (
    <div className='container-search'>
      <div>
        <img className='search-glass' src={Search} title='star' alt='title' ></img>
        <input data-elem="search-input" className='search-text' placeholder='Введите название вакансии' value={message} onChange={e => setMessage(e.target.value)}></input>
      </div>
      <button data-elem="search-button" className='search-btn' onClick={() => { getParametryFind(message, payment_from, payment_to, catalogues); }}>Поиск</button>
    </div>
  );
}

export default KeyWordArea;