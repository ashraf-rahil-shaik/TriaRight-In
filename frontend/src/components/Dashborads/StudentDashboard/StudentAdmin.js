import React from "react";
import StudentSideNav from "./StudentSideNav";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import StudentDashboard from "./StudentDashboard";
import CoursesList from "./CoursesList";
import CoursesPayment from "./CoursesPayments";
import CoursesRegistration from "./CoursesRegistration";
import CoursesTransaction from "./CoursesTransaction";
const StudentAdmin =()=>{
    return(
        <BrowserRouter>
        <StudentSideNav/>
        <Routes>
            <Route path="/student-dashboard" element={<StudentDashboard/>}></Route>
            <Route path="/courses-list" element={<CoursesList/>}></Route>
            <Route path="/courses-payments" element={<CoursesPayment/>}></Route>
            <Route path="/courses-registrations" element={<CoursesRegistration/>}></Route>
            <Route path="/courses-transactions" element={<CoursesTransaction/>}></Route>
        </Routes>
     </BrowserRouter>
    )
}
export default StudentAdmin