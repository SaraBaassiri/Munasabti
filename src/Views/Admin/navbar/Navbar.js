import './Navbar.css';
import React from 'react';
import { FaBars } from "react-icons/fa";

const Navbar = ({ openSidebar }) => {

  const [title, setTitle] = React.useState('Dashboard');

  React.useEffect(() => {
    if (document.location.pathname !== "/admin") {
      let title = document.location.pathname.split('/')[2].charAt(0).toUpperCase() + document.location.pathname.split('/')[2].slice(1);
      setTitle(title);
    }
  }, []);

  return (
    <div className="navbar">
      <div
        className="nav_icon"
        onClick={() => openSidebar('navbar')}
      ><FaBars /></div>

      <div className="navbar__left">
        <p className="active_link">{title}</p>
      </div>
      <div className="navbar__right">
        <a href='/'>
          <i className="fa fa-home"></i>
        </a>
        <a href="/auth/profile">
          <i className="fa fa-user"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
