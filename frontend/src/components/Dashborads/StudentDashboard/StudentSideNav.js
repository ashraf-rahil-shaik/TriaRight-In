import  {React,useState } from "react";
import "./StudentDashboard.css";
import { Link } from "react-router-dom";
const StudentSideNav = ()=>{
    const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
    const handleCoursesClick = () => {
        setCoursesDropdownOpen(!isCoursesDropdownOpen);
      };
    return(
        <div className="side-nav">
        <Link to="/student-dashboard" style={{ textDecoration: 'none', color: 'black' }} ><h1 className="dashboard">Dashboard</h1></Link>
        <ul className={`slide-menu ${isCoursesDropdownOpen ? 'open-up' : ''}`}>
          <li className="stream-item" onClick={handleCoursesClick}>
         Courses
          </li>
          {isCoursesDropdownOpen && (
            <>
              <Link to="/courses-list" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                <li className="dropdown-item">List</li>
              </Link>
              <Link to="/courses-registrations" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                <li className="dropdown-item">Registrations</li>
              </Link>
              <Link to="/courses-transactions" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                <li className="dropdown-item">Transactions</li>
              </Link>
              <Link to="/courses-payments" className="link-list" style={{ textDecoration: 'none', color: 'black' }}>
                <li className="dropdown-item">Payments</li>
              </Link>
            </>
          )}
        </ul>

        </div>
    )
}
export default StudentSideNav