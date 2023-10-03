import React from "react";
import StudentSideNav from "./StudentSideNav";
import { Outlet } from "react-router-dom";

const StudentAdmin =()=>{
    return(
        <div>

<StudentSideNav/>
        <Outlet/>
        </div>
       
    

  
    )
}
export default StudentAdmin