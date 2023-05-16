import { useState } from 'react';


function KeyWordArea({getParametryFind, getVacancies}) {
    const [message, setMessage] = useState('');

  return (
    <div>
    <input value={message} onChange={e => setMessage(e.target.value)}></input>
    <button onClick={()=>{getParametryFind(message);}}>Поиск</button>
    </div>
  );
}

export default KeyWordArea;