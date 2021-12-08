import React from 'react';
import {FaSearch} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

function NavbarApp() {
    return (
        <div className="Navbar">
            <div className="navbar-container">
                <div className="navbar-title">
                    <div className="navbar-title-left">
                        <h2 className="logo">NAMANGANLIKLAR24</h2>
                        <p><span>$ </span>10137.2</p>
                        <p><span>P </span>138.26</p>
                        <p><span>E </span>10988.72</p>
                    </div>
                    <div className="navbar-title-right">
                        <div className="search">
                            <FaSearch className="search-icon"/>
                            
                        </div>
                        
                        <form action="">
                            <select name="" id="">
                                <option value="Ru">Ru</option>
                                <option value="Eng">Eng</option>
                                <option value="Eng">Uz</option>
                            </select>
                        </form>
                        <div className="telegram">
                            <span></span>
                            <p> Подписатся</p>
                        </div>
                    </div>
                </div>
                <div className="navbar-text">
                    <p><NavLink className="navlink" to="/" exact activeClassName="active">Узбекистана</NavLink> </p> 
                    <p className="navlink">Мир </p> 
                    <p className="navlink">Экономика</p>
                    <p><NavLink className="navlink" to="/politika" exact activeClassName="active">Политика</NavLink></p>
                    <p><NavLink className="navlink" to="/obshestvo" exact activeClassName="active">Общество</NavLink> </p>
                    <p className="navlink" activeClassName="active">Технологии</p>
                    <p className="navlink" activeClassName="active">Спорт</p>
                    <p className="navlink" activeClassName="active">Культура</p>
                    <p className="navlink" activeClassName="active">Происшествия</p>
                    <p className="navlink" activeClassName="active">Туризм</p>                           
                </div>
                <div className="navbar-img">
                    <img src="../image/nrgbanner.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default NavbarApp;
