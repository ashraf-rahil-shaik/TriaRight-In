import React from "react";
import SideNav from "./SideNav";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateStream from "./CreateStream";
import ManageStream from "./ManageStream";
import CreateCourse from "./CreateCourse";
import CreateTrainer from "./CreateTrainer";
import CreateCollege from "./CreateCollege";
const SuperAdmin=()=>{
return(
<div className="super">
    <BrowserRouter>
<SideNav/>
    <Routes>
        <Route path="/manage-stream" element={<ManageStream/>}></Route>
        <Route path="/create-stream" element={<CreateStream/>}></Route>
        <Route path="/create-course" element={<CreateCourse/>}></Route>
        <Route path="/create-trainer" element={<CreateTrainer/>}></Route>
        <Route path="/create-college" element={<CreateCollege/>}></Route>
        </Routes>
</BrowserRouter>
</div>
)};
export default SuperAdmin;