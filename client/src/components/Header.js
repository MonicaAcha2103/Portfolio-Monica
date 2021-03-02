import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <div className="header-image">
      <div className="profile-photo">
        <img
          className="photo"
          src="https://media-exp1.licdn.com/dms/image/C5603AQEMJ0t2fccA0g/profile-displayphoto-shrink_400_400/0/1595496279185?e=1620259200&v=beta&t=mEcEBrvIp9819ehXhC0SpR7tJtSHeZ9lYoxY7Rii4iI"
          alt="profile photo"
        />
      </div>
      <h1 className="description"> Hey! This is Monica</h1>
    </div>
    <div className="tab">
      <ul>
        <li>
          <NavLink to="/" activeClassName="is-active" exact={true}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" activeClassName="is-active">
            Education
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" activeClassName="is-active">
            Experience
          </NavLink>
        </li>
        {/* <li><NavLink to="/projects" activeClassName="is-active">Projects</NavLink></li> */}
        <li>
          <NavLink to="/Contact" activeClassName="is-active">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
