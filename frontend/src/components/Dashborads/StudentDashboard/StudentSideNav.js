import  {React,useState } from "react";
import "./StudentDashboard.css";
import { Link } from "react-router-dom";
const StudentSideNav = ()=>{
    const [isMyAccountsDropdownOpen, setMyAccountsDropdownOpen] = useState(false);
    const [isChatDropdownOpen, setChatDropdownOpen] = useState(false);
    const handleMyAccountsClick = () => {
        setMyAccountsDropdownOpen(!isMyAccountsDropdownOpen);
      };
      const handleChatClick = () => {
        setChatDropdownOpen(!isChatDropdownOpen);
      };
    return(
        <div className="side-nav">
        <Link to="student-dashboard" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">Dashboard</h1></Link>
        <ul className={`slide-menu ${isMyAccountsDropdownOpen ? 'open-up' : ''}`}>
          <li className="stream-item" onClick={handleMyAccountsClick}>
          My Accounts
          </li>
          {isMyAccountsDropdownOpen && (
            <>
              <Link to="myCourses" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                <li className="dropdown-item">My Courses</li>
              </Link>
              <Link to="myInternships" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                <li className="dropdown-item">My Internships</li>
              </Link>
              <Link to="myPlacements" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                <li className="dropdown-item">My Placements</li>
              </Link>
            </>
          )}
        </ul>
        <Link to="student-courses" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">Courses</h1></Link>
        <Link to="student-internships" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">Internships</h1></Link>
        <Link to="student-placements" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">Placements</h1></Link>
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
          </ul> <hr></hr>
        <h1 className="headings">Settings</h1>
        <Link to="student-profile" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">Profile</h1></Link>
        <Link to="student-changepassword" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">ChangePassword</h1></Link>
        <Link to="student-Logout" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">LogOut</h1></Link>
        </div>
    )
}
export default StudentSideNav