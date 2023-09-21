import React from "react";
import StudentSideNav from "./StudentSideNav";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import StudentDashboard from "./StudentDashboard";
import MyCourses from "./MyCourses";
import MyInternships from "./MyInternships";
import MyPlacements from "./MyPlacements";
import ChatCompose from "./ChatCompose";
import ChatInbox from "./ChatInbox";
import ChatOutbox from "./ChatOutbox";
import ChatAllDetails from "./ChatAllDetails";
import Courses from "./Courses";
import Internships from "./Internships";
import Placements from "./Placements";
import StudentProfile from "./StudentProfile";
import StudentChangePassword from "./StudentChangePassword";
import StudentLogout from "./StudentLogOut";
const StudentAdmin =()=>{
    return(
        <BrowserRouter>
        <StudentSideNav/>
        <Routes>
            <Route path="/student-dashboard" element={<StudentDashboard/>}></Route>
            
            <Route path="/myCourses" element={<MyCourses/>}></Route>
            <Route path="/myInternships" element={<MyInternships/>}></Route>
            <Route path="/myPlacements" element={<MyPlacements/>}></Route>

            <Route path="/compose-chat" element={<ChatCompose/>}></Route>
            <Route path="/inbox-chat" element={<ChatInbox/>}></Route>
            <Route path="/outbox-chat" element={<ChatOutbox/>}></Route>
            <Route path="/alldetails-chat" element={<ChatAllDetails/>}></Route>

            <Route path="/student-courses" element={<Courses/>}></Route>
            <Route path="/student-internships" element={<Internships/>}></Route>
            <Route path="/student-placements" element={<Placements/>}></Route>
            <Route path="/student-profile" element={<StudentProfile/>}></Route>
            <Route path="/student-changepassword" element={<StudentChangePassword/>}></Route>
            <Route path="/student-Logout" element={<StudentLogout/>}></Route>
        </Routes>
     </BrowserRouter>
    )
}
export default StudentAdmin