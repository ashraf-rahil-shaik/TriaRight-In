import React, { useState } from "react";
import './DashBoard.css';
import { Link } from 'react-router-dom';

const SideNav = () => {
  const [isStreamDropdownOpen, setStreamDropdownOpen] = useState(false);
  const [isTrainerDropdownOpen, setTrainerDropdownOpen] = useState(false);
  const [isCourseDropdownOpen, setCourseDropdownOpen] = useState(false);
  const handleStreamClick = () => {
    setStreamDropdownOpen(!isStreamDropdownOpen);
  };

  const handleCourseClick = () => {
    setCourseDropdownOpen(!isCourseDropdownOpen);
  };
  const handleTrainerClick = () => {
    setTrainerDropdownOpen(!isTrainerDropdownOpen);
  };

  return (
    <div className="side-nav">
      <ul className={`slide-menu ${isStreamDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleStreamClick}>
          Stream
        </li>
        {isStreamDropdownOpen && (
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
      <ul className={`slide-menu ${isCourseDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleCourseClick}>
          Course
        </li>
        {isCourseDropdownOpen && (
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
      <ul className={`slide-menu ${isTrainerDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleTrainerClick}>
          Trainer
        </li>
        {isTrainerDropdownOpen && (
          <>
            <Link to="/create-trainer" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Create</li>
            </Link>
            <Link to="/manage-trainer" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Manage</li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default SideNav;
