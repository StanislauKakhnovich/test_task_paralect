import { useState } from 'react';
import '../styles/Filters.css';
import cross from "../images/cross.svg";

function Filters({ getParametryFind, message }) {

  const [payment_from, setPayment_from] = useState('');
  const [payment_to, setPayment_to] = useState('');
  const [catalogues, setCatalogues] = useState('');

  function resetAll() {
    setPayment_from('');
    setPayment_to('');
    setCatalogues('');
  }

  return (
    <div className='container-form'>
      <div className='inner-container-form'>
        <div className='head-form'>
          <span className='filters'>Фильтры</span>
          <button className='reset-all' onClick={() => resetAll()}>
            <span>Сбросить все </span>
            <img src={cross} title='cross' alt='title'></img>
          </button>
        </div>
        <div className='board-form'>
          <div className='catalogues-field'>
            <div className='catalogues-head'>Отрасль</div>
            <select data-elem="industry-select" className="industry-select" value={catalogues} name="industry-select" onChange={e => setCatalogues(e.target.value)}>
              <option value="">Выберите отрасль</option>
              <option value="33">IT, Интернет, связь, телеком</option>
            </select>
          </div>
          <div className='payment-field'>
            <div className='payment-head'>Оклад</div>
            <input data-elem="salary-from-input" className="salary-from-input" type="number" step="10000" placeholder='От' min="0" value={payment_from} onChange={e => setPayment_from(e.target.value)}></input>
            <input data-elem="salary-to-input" className="salary-to-input" type="number" step="10000" placeholder='До' min="0" value={payment_to} onChange={e => setPayment_to(e.target.value)}></input>
          </div>
          <button data-elem="search-button" className='applay-button' onClick={() => { getParametryFind(message, payment_from, payment_to, catalogues); }}>Применить</button>
        </div>
      </div>
    </div>
  );
}

export default Filters;