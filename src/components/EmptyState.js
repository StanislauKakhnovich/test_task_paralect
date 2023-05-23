import { React } from 'react';
import { Link } from 'react-router-dom';
import Nothing from "../images/Nothing.svg";
import '../styles/EmptyState.css';



function EmptyState({ isNothing }) {
  if (isNothing) {
    return (
      <div className='wrapping-nothing'>
        <div className='container-nothing'>
          <img className='image-nothing' src={Nothing} title='Man is looking' alt='Man is looking'></img>
          <div className='text-nothing'>Упс, здесь еще ничего нет!</div>
          <Link className='name-link' to="/" title='Search'>
            <button className='search-nothing-btn' onClick={(e) => { e.stopPropagation(); document.location.reload() }}>Поиск Вакансий</button>
          </Link>
        </div>
      </div>

    );
  }
  else if (!isNothing) {
    return (
      <div className='wrapping-nothing'>
        <div className='container-nothing'>
          <img className='image-nothing' src={Nothing} title='Man is looking' alt='Man is looking'></img>
          <div className='text-nothing'>Упс, здесь еще ничего нет!</div>
          <Link className='name-link' to="/" title='Search'>
            <button className='search-nothing-btn' >Поиск Вакансий</button>
          </Link>
        </div>
      </div>

    );
  }

}

export default EmptyState;
