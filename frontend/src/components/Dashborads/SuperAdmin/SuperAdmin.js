import React from "react";
import SideNav from "./SideNav";
import {Outlet} from 'react-router-dom';

 


const SuperAdmin=()=>{
return(
<div className="super">
 <SideNav/>
<Outlet />

</div>
)
}



export default SuperAdmin