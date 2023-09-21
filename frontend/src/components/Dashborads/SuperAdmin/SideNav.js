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
  const [isStudentWithoutPlacementDropdownOpen, setStudentWithoutPlacementDropdownOpen] = useState(false);
  const [isStudentWithPlacementDropdownOpen, setStudentWithPlacementDropdownOpen] = useState(false);
  const [isMainFormDropdownOpen, setMainFormDropdownOpen] = useState(false);
  const [isConsultantDropdownOpen, setConsultantDropdownOpen] = useState(false);
  const [isexampleDropdownOpen, setexampleDropdownOpen] = useState(false);
  const [isslotDropdownOpen, setslotDropdownOpen] = useState(false);
  const [iscollegeMentorDropdownOpen, setcollegeMentorDropdownOpen] = useState(false);
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
  const handleStudentWithoutPlacementClick = () => {
    setStudentWithoutPlacementDropdownOpen(!isStudentWithoutPlacementDropdownOpen);
  };
  const handleStudentWithPlacementClick = () => {
    setStudentWithPlacementDropdownOpen(!isStudentWithPlacementDropdownOpen);
  };
  const handleMainFormClick = () => {
    setMainFormDropdownOpen(!isMainFormDropdownOpen);
  };
  const handleConsultantClick = () => {
    setConsultantDropdownOpen(!isConsultantDropdownOpen);
  };
  const handleexampleClick = () => {
    setexampleDropdownOpen(!isexampleDropdownOpen);
  };
  const handleslotClick = () => {
    setslotDropdownOpen(!isslotDropdownOpen);
  };
  const handlecollegeMentorClick = () => {
    setcollegeMentorDropdownOpen(!iscollegeMentorDropdownOpen);
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
      <ul className={`slide-menu ${iscollegeMentorDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handlecollegeMentorClick}>
        college Mentor
        </li>
        {iscollegeMentorDropdownOpen && (
          <>
            <Link to="/create-collegementor" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Create</li>
            </Link>
            <Link to="/manage-collegementor" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
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
        <ul className={`slide-menu ${isStudentWithoutPlacementDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleStudentWithoutPlacementClick}>
        Student Without placement 
        </li>
        {isStudentWithoutPlacementDropdownOpen && (
          <>
            <Link to="/create-studentwithoutPlacement" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Create</li>
            </Link>
            <Link to="/manage-studentwithoutPlacement" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Manage</li>
            </Link>
          </>
        )}
        </ul>
        <ul className={`slide-menu ${isStudentWithPlacementDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleStudentWithPlacementClick}>
        Student With placement 
        </li>
        {isStudentWithPlacementDropdownOpen && (
          <>
            <Link to="/create-studentwithPlacement" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Create</li>
            </Link>
            <Link to="/manage-studentwithPlacement" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Manage</li>
            </Link>
          </>
        )}
        </ul>
        <ul className={`slide-menu ${isMainFormDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleMainFormClick}>
       Main Form
        </li>
        {isMainFormDropdownOpen && (
          <>
            <Link to="/create-regMainForm" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Create</li>
            </Link>
            {/* <Link to="/manage-triarightlogin" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Manage</li>
            </Link> */}
          </>
        )}
        </ul>
        <ul className={`slide-menu ${isConsultantDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleConsultantClick}>
        Consultant
        </li>
        {isConsultantDropdownOpen && (
          <>
            <Link to="/create-consultant" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Create</li>
            </Link>
             <Link to="/manage-consultant" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Manage</li>
            </Link> 
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
        <ul className={`slide-menu ${isslotDropdownOpen ? 'open-up' : ''}`}>
        <li className="stream-item" onClick={handleslotClick}>
       slot
        </li>
        {isslotDropdownOpen && (
          <>
            <Link to="/create-slot" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Create</li>
            </Link>
            <Link to="/manage-slot" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
              <li className="dropdown-item">Manage</li>
            </Link>
          </>
        )}
        </ul>
    </div>
  );
};

export default SideNav;
