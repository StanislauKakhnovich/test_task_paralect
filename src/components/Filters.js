import { useState } from 'react';
import '../styles/Filters.css';
import cross from "../images/cross.svg";

//  let keyword = 'менеджер';
//  let payment_from=10000;
//  let payment_to=300000;
//  let catalogues=33;

function Filters({getParametryFind, message, getVacancies}) {
    
    const [payment_from, setPayment_from] = useState('');
    const [payment_to, setPayment_to] = useState('');
    const [catalogues, setCatalogues] = useState('');

  return (
    <div className='container-form'>
      <div className='inner-container-form'>
        
          <div className='head-form'>
            <span className='filters'>Фильтры</span>
            {/* <span className='reset-all'>Сбросить все</span> */}
            <button className='reset-all'>Сбросить все <img src={cross}  title='cross' alt='title'></img> </button>
          </div>
          
          {/* <input value={catalogues} onChange={e => setCatalogues(e.target.value)}></input> */}
        <div className='board-form'>
          <div className='catalogues-field'>
            <div className='catalogues-head'>Отрасль</div>
            <select className='catalogues'  name="catalogues"  onChange={e => setCatalogues(e.target.value)}>
              <option value="">Выберите отрасль</option>
              <option value="33">IT</option>
            </select>
          </div>
          <div className='payment-field'>
            <div className='payment-head'>Оклад</div>
            <input className='payment' type="number"  step="10000" placeholder='От'min="0"value={payment_from} onChange={e => setPayment_from(e.target.value)}></input>
            <input className='payment' type="number"  step="10000" placeholder='До'min="0" value={payment_to} onChange={e => setPayment_to(e.target.value)}></input>
          </div>
          <button className='applay-button' onClick={()=>{getParametryFind(message,payment_from,payment_to,catalogues);}}>Применить</button>
        </div>
      </div>
    </div>
  );
}

export default Filters;