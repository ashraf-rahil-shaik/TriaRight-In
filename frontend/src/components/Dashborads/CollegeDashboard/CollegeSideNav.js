import { React,useState } from "react";
import "./CollegeDashboard.css";
import { Link } from "react-router-dom";
const CollegeSideNav = () =>{
  const [isChatDropdownOpen, setChatDropdownOpen] = useState(false);
    const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
    const [isPaymentsDropdownOpen, setPaymentsDropdownOpen] = useState(false);
    const [isCollegeMentorDropdownOpen, setCollegeMentorDropdownOpen] = useState(false);
    const [isFileManagerDropdownOpen, setFileManagerDropdownOpen] = useState(false);
    const handleChatClick = () => {
      setChatDropdownOpen(!isChatDropdownOpen);
    };
    const handleCoursesClick = () => {
        setCoursesDropdownOpen(!isCoursesDropdownOpen);
      };
      const handlePaymentsClick = () => {
        setPaymentsDropdownOpen(!isPaymentsDropdownOpen);
      };
      const handleCollegeMentorClick = () => {
        setCollegeMentorDropdownOpen(!isCollegeMentorDropdownOpen);
      };
      const handleFileManagerClick = () => {
        setFileManagerDropdownOpen(!isFileManagerDropdownOpen);
      };
    return(
       
        
        <div className="side-nav">
        <Link to="college-Dashboard" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">Dashboard</h1></Link>
        <Link to="my-students" style={{ textDecoration: 'none', color: 'black' }}><h1 className="dashboard">My Students</h1></Link>
        <ul className={`slide-menu ${isCoursesDropdownOpen ? 'open-up' : ''}`}>
            <li className="stream-item" onClick={handleCoursesClick}>
              Courses
            </li>
            {isCoursesDropdownOpen && (
              <>
                <Link to="course-register" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Register</li>
                </Link>
                <Link to="course-pending" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Pending</li>
                </Link>
                <Link to="course-manage" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Manage</li>
                </Link>
              </>
            )}
          </ul>
          <Link to="internships" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">Internships</h1></Link>
          <Link to="placements" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">Placements</h1></Link>
          <ul className={`slide-menu ${isPaymentsDropdownOpen ? 'open-up' : ''}`}>
            <li className="stream-item" onClick={handlePaymentsClick}>
             Payments
            </li>
            {isPaymentsDropdownOpen && (
              <>
                <Link to="payments-pending" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Pending</li>
                </Link>
                <Link to="payments-transaction" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Transactions</li>
                </Link>
              </>
            )}
          </ul>
          <ul className={`slide-menu ${isCollegeMentorDropdownOpen ? 'open-up' : ''}`}>
            <li className="stream-item" onClick={handleCollegeMentorClick}>
            College Mentor
            </li>
            {isCollegeMentorDropdownOpen && (
              <>
                <Link to="create-collegeMentor" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Create</li>
                </Link>
                <Link to="manage-collegeMentor" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Manage</li>
                </Link>
                <Link to="allocate-collegeMentor" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Allocate</li>
                </Link>
              </>
            )}
          </ul>
          <ul className={`slide-menu ${isChatDropdownOpen ? 'open-up' : ''}`}>
            <li className="stream-item" onClick={handleChatClick}>
              Chat
            </li>
            {isChatDropdownOpen && (
              <>
                <Link to="compose-chat" className="link-list"  style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Compose</li>
                </Link>
                 <Link to="inbox-chat" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Inbox</li>
                </Link> 
                <Link to="outbox-chat" className="link-list"  style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Outbox</li>
                </Link>
                 <Link to="alldetails-chat" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">All Details</li>
                </Link> 
               </>
            )}
          </ul> 
          <ul className={`slide-menu ${isFileManagerDropdownOpen ? 'open-up' : ''}`}>
            <li className="stream-item" onClick={handleFileManagerClick}>
            File Manager
            </li>
            {isFileManagerDropdownOpen && (
              <>
                <Link to="documentations" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Documentations</li>
                </Link>
                <Link to="certifications" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Certifications</li>
                </Link>
              </>
            )}
          </ul>
          <h1 className="headings">Settings</h1>
          <Link to="college-profile" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">Profile</h1></Link>
          <Link to="changepassword" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">Change Password</h1></Link>
          <Link to="college-logout" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">Logout</h1></Link>
        </div>
    )
}
export default CollegeSideNav