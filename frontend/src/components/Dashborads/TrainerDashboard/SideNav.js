import React, { useState } from "react";
import './DashBoard.css';
import { Link } from 'react-router-dom';
const SideNav = () => {
    // const [isDashboardDropdownOpen, setDashboardDropdownOpen] = useState(false);
    const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
    const [isMyAccountsDropdownOpen, setMyAccountsDropdownOpen] = useState(false);
    const [isScheduleDropdownOpen, setScheduleDropdownOpen] = useState(false);
    const [isMeetingsDropdownOpen, setMeetingsDropdownOpen] = useState(false);
    const [isSummaryDropdownOpen, setSummaryDropdownOpen] = useState(false);
    const [isRecordingsDropdownOpen, setRecordingsDropdownOpen] = useState(false);
    const [isTasksDropdownOpen, setTasksDropdownOpen] = useState(false);
    const [isDocumentsDropdownOpen, setDocumentsDropdownOpen] = useState(false);
    // const handleDashboardClick = () => {
    //     setDashboardDropdownOpen(!isDashboardDropdownOpen);
    //   };
      const handleCoursesClick = () => {
        setCoursesDropdownOpen(!isCoursesDropdownOpen);
      };
      const handleMyAccountsClick = () => {
        setMyAccountsDropdownOpen(!isMyAccountsDropdownOpen);
      };
      const handleScheduleClick = () => {
        setScheduleDropdownOpen(!isScheduleDropdownOpen);
      };
      const handleMeetingsClick = () => {
        setMeetingsDropdownOpen(!isMeetingsDropdownOpen);
      };
      const handleSummaryClick = () => {
        setSummaryDropdownOpen(!isSummaryDropdownOpen);
      };
      const handleRecordingsClick = () => {
        setRecordingsDropdownOpen(!isRecordingsDropdownOpen);
      };
      const handleTasksClick = () => {
        setTasksDropdownOpen(!isTasksDropdownOpen);
      };
      const handleDocumentsClick = () => {
        setDocumentsDropdownOpen(!isDocumentsDropdownOpen);
      };
      return (
        <div className="side-nav">
          {/* <ul className={`slide-menu ${isDashboardDropdownOpen ? 'open-up' : ''}`}>
            <li className="stream-item" onClick={handleDashboardClick}>
              Dashboard
            </li>
            {isDashboardDropdownOpen && (
              <>
                <Link to="/trainer-Dashboard" className="link-list"  style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Dashboard</li>
                </Link>
                {/* <Link to="/manage-stream" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Manage</li>
                </Link> */}
              {/* </>
            )}
          </ul>  */}
          <br></br>
          <Link to="/trainer-Dashboard"><h1 className="dashboard">Dashboard</h1></Link>
          <ul className={`slide-menu ${isCoursesDropdownOpen ? 'open-up' : ''}`}>
            <li className="stream-item" onClick={handleCoursesClick}>
              Course
            </li>
            {isCoursesDropdownOpen && (
              <>
                <Link to="/courses-list" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">List</li>
                </Link>
                <Link to="/suggest-courses" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Suggest Courses</li>
                </Link>
              </>
            )}
          </ul>
          <ul className={`slide-menu ${isMyAccountsDropdownOpen ? 'open-up' : ''}`}>
            <li className="stream-item" onClick={handleMyAccountsClick}>
              My Accounts
            </li>
            {isMyAccountsDropdownOpen && (
              <>
                <Link to="/myStudents" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">My Students</li>
                </Link>
                <Link to="/myBatches" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">My Batches</li>
                </Link>
              </>
            )}
          </ul><hr></hr>
          <h1 className="headings">Internship Management</h1>
          <ul className={`slide-menu ${isScheduleDropdownOpen ? 'open-up' : ''}`}>
            <li className="stream-item" onClick={handleScheduleClick}>
              Schedule
            </li>
            {isScheduleDropdownOpen && (
              <>
                <Link to="/create-schedule" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Create</li>
                </Link>
                <Link to="/manage-schedule" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Manage</li>
                </Link>
                <Link to="/list-schedule" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">List</li>
                </Link>
              </>
            )}
          </ul>
          <ul className={`slide-menu ${isMeetingsDropdownOpen ? 'open-up' : ''}`}>
            <li className="stream-item" onClick={handleMeetingsClick}>
              Meetings
            </li>
            {isMeetingsDropdownOpen && (
              <>
                <Link to="/create-meeting" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Create</li>
                </Link>
                <Link to="/manage-meeting" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Manage</li>
                </Link>
                <Link to="/list-meeting" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">List</li>
                </Link>
              </>
            )}
          </ul>
          <ul className={`slide-menu ${isSummaryDropdownOpen ? 'open-up' : ''}`}>
            <li className="stream-item" onClick={handleSummaryClick}>
              Summary
            </li>
            {isSummaryDropdownOpen && (
              <>
                <Link to="/create-summary" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Create</li>
                </Link>
                <Link to="/manage-summary" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Manage</li>
                </Link>
                <Link to="/list-summary" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">List</li>
                </Link>
              </>
            )}
          </ul>
          <ul className={`slide-menu ${isRecordingsDropdownOpen ? 'open-up' : ''}`}>
            <li className="stream-item" onClick={handleRecordingsClick}>
            Recordings
            </li>
            {isRecordingsDropdownOpen && (
              <>
                <Link to="/create-recording" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Create</li>
                </Link>
                <Link to="/manage-recording" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Manage</li>
                </Link>
                <Link to="/list-recording" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">List</li>
                </Link>
              </>
            )}
          </ul>
          <ul className={`slide-menu ${isTasksDropdownOpen ? 'open-up' : ''}`}>
            <li className="stream-item" onClick={handleTasksClick}>
            Task
            </li>
            {isTasksDropdownOpen && (
              <>
                <Link to="/add-task" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Add</li>
                </Link>
                <Link to="/manage-task" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Manage</li>
                </Link>
                <Link to="/list-task" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">List</li>
                </Link>
              </>
            )}
          </ul>
          <ul className={`slide-menu ${isDocumentsDropdownOpen ? 'open-up' : ''}`}>
            <li className="stream-item" onClick={handleDocumentsClick}>
           Documentations
            </li>
            {isDocumentsDropdownOpen && (
              <>
                <Link to="/upload-document" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Upload</li>
                </Link>
                <Link to="/manage-document" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Manage</li>
                </Link>
                <Link to="/list-document" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">List</li>
                </Link>
              </>
            )}
          </ul><hr></hr>
          <h1 className="headings">Settings</h1>
          <Link to="/trainer-profile"><h1 className="dashboard">Profile</h1></Link>
          <Link to="/changePassword"><h1 className="dashboard">Change Password</h1></Link>
          <Link to="/trainer-logout"><h1 className="dashboard">logOut</h1></Link>
          </div>
          )
};
export default SideNav;
