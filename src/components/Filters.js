import { useState } from 'react';
import '../styles/Filters.css';

//  let keyword = 'менеджер';
//  let payment_from=10000;
//  let payment_to=300000;
//  let catalogues=33;

function Filters({getParametryFind, message, getVacancies}) {
    
    const [payment_from, setPayment_from] = useState('');
    const [payment_to, setPayment_to] = useState('');
    const [catalogues, setCatalogues] = useState('');

  return (
    <div className='ContainerForm'>
      <div className='FlexForm' >Отрасль
        <input value={catalogues} onChange={e => setCatalogues(e.target.value)}></input>
      </div>
      <div className='FlexForm'>Оклад
        <input value={payment_from} onChange={e => setPayment_from(e.target.value)}></input>
        <input value={payment_to} onChange={e => setPayment_to(e.target.value)}></input>
      </div>
      <button onClick={()=>{getParametryFind(message,payment_from,payment_to,catalogues);}}>Поиск</button>
    </div>
  );
}

export default Filters;