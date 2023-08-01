import React from "react";
import SideNav from "./SideNav";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateStream from "./CreateStream";
const SuperAdmin=()=>{
return(
<div className="super">
    <BrowserRouter>
<SideNav/>
  
    <Routes>
        <Route path="/create-stream" element={<CreateStream/>}></Route>
        </Routes>
    
    
 
    </BrowserRouter>
   
</div>


)
}

export default SuperAdmin