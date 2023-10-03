import React from "react";
import CollegeSideNav from "./CollegeSideNav";
import { Outlet} from "react-router-dom";

const CollegeAdmin = ()=>{
    return(
        <div>
            <CollegeSideNav/>
            <Outlet/>

        </div>
    )
}
export default CollegeAdmin