import React from 'react';


export default function Header(props){


    return (
    <header>
        <div id="logo"><i class={props.dark ? "fa-solid fa-user-secret active": "fa-solid fa-user-secret" }></i></div>
        <nav className={props.dark ? 'navbar dark' : 'navbar'}>
            <ul className={props.iconMenu ? "navbar-list active" : "navbar-list" }  >
                <li className='nav-item'>Home</li>
                <li className='nav-item'>Projects</li>
                <li className='nav-item'>Contact</li>
            </ul>
        </nav>
        <div className="row">
        <button onClick={props.hundleMenu} className='btn-menu-toggle btn'>{props.menuIcon}</button>
        <button onClick={props.darkMode} className='btn-toggle btn'>{props.icon}</button>
        </div>
    </header>
    )
}