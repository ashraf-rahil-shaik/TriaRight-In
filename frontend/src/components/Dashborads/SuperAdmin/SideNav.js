import React, { useState } from "react";
import './DashBoard.css';
import { Link } from 'react-router-dom';

const SideNav = () => {
  const [isStreamDropdownOpen, setStreamDropdownOpen] = useState(false);
  const [isTrainerDropdownOpen, setTrainerDropdownOpen] = useState(false);
  const [isCourseDropdownOpen, setCourseDropdownOpen] = useState(false);
  const [isCollegeDropdownOpen, setCollegeDropdownOpen] = useState(false);
  const [isBatchDropdownOpen, setBatchDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [isLoginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const [isStudentCDropdownOpen, setStudentCDropdownOpen] = useState(false);
  const [isStudentCiDropdownOpen, setStudentCiDropdownOpen] = useState(false);
  const [isStudentCipDropdownOpen, setStudentCipDropdownOpen] = useState(false);
  const [isexampleDropdownOpen, setexampleDropdownOpen] = useState(false);
  const handleStreamClick = () => {
    setStreamDropdownOpen(!isStreamDropdownOpen);
  };

  const handleCourseClick = () => {
    setCourseDropdownOpen(!isCourseDropdownOpen);
  };
  const handleTrainerClick = () => {
    setTrainerDropdownOpen(!isTrainerDropdownOpen);
  };
  const handleCollegeClick = () => {
    setCollegeDropdownOpen(!isCollegeDropdownOpen);
  };
  const handleBatchClick = () => {
    setBatchDropdownOpen(!isBatchDropdownOpen);
  };
  const handleCompanyClick = () => {
    setCompanyDropdownOpen(!isCompanyDropdownOpen);
  };
  const handleLoginClick = () => {
    setLoginDropdownOpen(!isLoginDropdownOpen);
  };
  const handleStudentCClick = () => {
    setStudentCDropdownOpen(!isStudentCDropdownOpen);
  };
  const handleStudentCiClick = () => {
    setStudentCiDropdownOpen(!isStudentCiDropdownOpen);
  };
  const handleStudentCipClick = () => {
    setStudentCipDropdownOpen(!isStudentCipDropdownOpen);
  };
  const handleexampleClick = () => {
    setexampleDropdownOpen(!isexampleDropdownOpen);
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
            <Link to="/manage-course" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
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
      <ul className={`slide-menu ${isCollegeDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleCollegeClick}>
          College
        </li>
        {isCollegeDropdownOpen && (
          <>
            <Link to="/create-college" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Create</li>
            </Link>
            <Link to="/manage-college" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Manage</li>
            </Link>
          </>
        )}
      </ul>
      <ul className={`slide-menu ${isBatchDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleBatchClick}>
         Batch
        </li>
        {isBatchDropdownOpen && (
          <>
            <Link to="/create-batch" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Create</li>
            </Link>
            <Link to="/manage-batch" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Manage</li>
            </Link>
          </>
        )}
      </ul>
      <ul className={`slide-menu ${isCompanyDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleCompanyClick}>
         Company
        </li>
        {isCompanyDropdownOpen && (
          <>
            <Link to="/create-company" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Create</li>
            </Link>
            <Link to="/manage-company" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Manage</li>
            </Link>
          </>
        )}
      </ul>
      <ul className={`slide-menu ${isLoginDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleLoginClick}>
         Login
        </li>
        {isLoginDropdownOpen && (
          <>
            <Link to="/create-triarightlogin" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Create</li>
            </Link>
            <Link to="/manage-triarightlogin" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Manage</li>
            </Link>
          </>
        )}
        </ul>
        <ul className={`slide-menu ${isStudentCDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleStudentCClick}>
        Student C 
        </li>
        {isStudentCDropdownOpen && (
          <>
            <Link to="/create-studentpersonalC" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Create</li>
            </Link>
            {/* <Link to="/manage-triarightlogin" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Manage</li>
            </Link> */}
          </>
        )}
        </ul>
        <ul className={`slide-menu ${isStudentCiDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleStudentCiClick}>
        Student Ci 
        </li>
        {isStudentCiDropdownOpen && (
          <>
            <Link to="/create-studentpersonalCi" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Create</li>
            </Link>
            {/* <Link to="/manage-triarightlogin" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Manage</li>
            </Link> */}
          </>
        )}
        </ul>
        <ul className={`slide-menu ${isStudentCipDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleStudentCipClick}>
        Student Cip 
        </li>
        {isStudentCipDropdownOpen && (
          <>
            <Link to="/create-studentpersonalCip" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Create</li>
            </Link>
            {/* <Link to="/manage-triarightlogin" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Manage</li>
            </Link> */}
          </>
        )}
        </ul>
        <ul className={`slide-menu ${isexampleDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleexampleClick}>
       example
        </li>
        {isexampleDropdownOpen && (
          <>
            <Link to="/create-example" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Create</li>
            </Link>
            {/* <Link to="/manage-triarightlogin" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Manage</li>
            </Link> */}
          </>
        )}
        </ul>
    </div>
  );
};

export default SideNav;
