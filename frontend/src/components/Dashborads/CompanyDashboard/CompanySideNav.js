import {React,useState} from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
const CompanySideNav = () =>{
  const [isChatDropdownOpen, setChatDropdownOpen] = useState(false);
    const [isInternshipsDropdownOpen, setInternshipsDropdownOpen] = useState(false);
    const [isPlacementsDropdownOpen, setPlacementsDropdownOpen] = useState(false);
    const handleChatClick = () => {
      setChatDropdownOpen(!isChatDropdownOpen);
    };
    const handleInternshipsClick = () => {
        setInternshipsDropdownOpen(!isInternshipsDropdownOpen);
      };
      const handlePlacementsClick = () => {
        setPlacementsDropdownOpen(!isPlacementsDropdownOpen);
      };
    return(
        <div className="side-nav">
          <Link to="company-dashboard" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">Dashboard</h1></Link>
          <ul className={`slide-menu ${isInternshipsDropdownOpen ? 'open-up' : ''}`}>
            <li className="stream-item" onClick={handleInternshipsClick}>
            Internships
            </li>
            {isInternshipsDropdownOpen && (
              <>
                <Link to="add-internship" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Add</li>
                </Link>
                <Link to="myInternship" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">My Internships</li>
                </Link>
                <Link to="internship-applicants" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Applicants</li>
                </Link>
              </>
            )}
          </ul>
          <ul className={`slide-menu ${isPlacementsDropdownOpen ? 'open-up' : ''}`}>
            <li className="stream-item" onClick={handlePlacementsClick}>
            Placements
            </li>
            {isPlacementsDropdownOpen && (
              <>
                <Link to="add-placement" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Add</li>
                </Link>
                <Link to="myPlacement" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">My Placements</li>
                </Link>
                <Link to="placement-applicants" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                  <li className="dropdown-item">Applicants</li>
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
          <h1 className="headings">Settings</h1>
          <Link to="company-profile" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">Profile</h1></Link>
          <Link to="changepassword" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">Change Password</h1></Link>
          <Link to="company-logout" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">Logout</h1></Link>
        </div>
    )
}
export default CompanySideNav