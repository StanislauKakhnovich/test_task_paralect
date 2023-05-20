import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import '../styles/Header.css';
import logo from "../images/logo.svg";


function Header(){
    return <>
            <div className='header'>
                <div className='header-logo'>
                    <img className='image-logo' src={logo}  title='cross' alt='title'></img>
                    <div className='name-logo' >Jobored</div>
                </div>
                <div className='header-links'>
                    <NavLink to="/" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))} title='Поиск Вакансий'>Поиск Вакансий</NavLink>
                    <NavLink to="selected" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))} title='Избранное'>Избранное</NavLink>
                </div>
            </div>
            <Outlet />
        </>;
}


export default Header;
