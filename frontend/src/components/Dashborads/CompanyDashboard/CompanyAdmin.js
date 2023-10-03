import React from "react";
import CompanySideNav from "./CompanySideNav";
import { Outlet} from "react-router-dom";

const CompanyAdmin =()=>{
    return(

<>
 <CompanySideNav/>
 <Outlet/>
</>
        )
    }   



export default CompanyAdmin