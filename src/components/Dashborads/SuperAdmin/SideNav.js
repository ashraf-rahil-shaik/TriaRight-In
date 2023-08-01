import React from "react";
import './DashBoard.css';
import { Link } from 'react-router-dom';
const SideNav =()=>{
    return (
     <div className="side-nav">
<ul className="slide-menu">
<li>stream</li>
<Link to="/create-stream"><li>create</li></Link>
<li>manage</li>

</ul>
     </div>
    )
}

export default SideNav