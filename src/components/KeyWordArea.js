import { useState } from 'react';
import '../styles/KeyWordArea.css';

function KeyWordArea({getParametryFind, payment_from, payment_to, catalogues, getVacancies}) {
    const [message, setMessage] = useState('');

  return (
    <div className='FlexArea'>
      <input value={message} onChange={e => setMessage(e.target.value)}></input>
      <button onClick={()=>{getParametryFind(message,payment_from,payment_to,catalogues);}}>Поиск</button>
    </div>
  );
}

export default KeyWordArea;