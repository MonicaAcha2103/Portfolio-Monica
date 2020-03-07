import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="header-image">  
    
    <div className="profile-photo">
    <img className="photo" src= "https://media-exp1.licdn.com/dms/image/C4E03AQFvmALNjyifAA/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=IZPESppizpvF0_4CkEn4PELKbfS_EZGJGaWPFb3ACtk" alt= "profile photo"/>
    </div>
    <h1 className="description"> Hey! This is Monica</h1>
    </div>
    <div className="tab">
    <ul>
    <li><NavLink to="/" activeClassName="is-active" exact={true} >Skills</NavLink></li>
    <li><NavLink to="/education" activeClassName="is-active">Education</NavLink></li>
    <li><NavLink to="/experience" activeClassName="is-active">Experience</NavLink></li>
   {/* <li><NavLink to="/projects" activeClassName="is-active">Projects</NavLink></li> */}
    <li><NavLink to="/Contact" activeClassName="is-active">Contact</NavLink></li>
    </ul></div>
  </header>
);

export default Header;
