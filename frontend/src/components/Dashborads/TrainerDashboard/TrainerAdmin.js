import React from "react";
import TrainerSideNav from "./TrainerSideNav";
import { Outlet } from "react-router-dom";

const TrainerAdmin=()=>{
    return(
        <div className="super">
              <TrainerSideNav/>
              <Outlet/>
    
  
  
 </div>
    )
}
export default TrainerAdmin