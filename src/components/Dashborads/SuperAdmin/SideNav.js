import React, { useState } from "react";
import './DashBoard.css';
import { Link } from 'react-router-dom';



const SideNav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleStreamClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="side-nav">
      <ul className={`slide-menu ${isDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleStreamClick}>
          Stream
        </li>
        {isDropdownOpen && (
        <>
            <Link to="/create-stream" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Create</li>
            </Link>
            <Link to="/manage-stream" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Manage</li>
            </Link>
          </>
        )}
      </ul>
      <ul className={`slide-menu ${isDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleStreamClick}>
          Course
        </li>
        {isDropdownOpen && (
        <>
            <Link to="/create-course" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Create</li>
            </Link>
            <Link to="/manage-stream" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Manage</li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default SideNav;
