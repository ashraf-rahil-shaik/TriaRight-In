import React from "react";
import CollegeSideNav from "./CollegeSideNav";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import CollegeDashboard from "./CollegeDashboard";
import MyStudents from "./MyStudents";
import CourseManage from "./CourseManage";
import CoursePending from "./CoursePending";
import CourseRegister from "./CourseRegister";
import Internships from "./Internships";
import Placements from "./Placements";
import PaymentsPending from "./PaymentsPending";
import PaymentsTransaction from "./PaymentsTransaction";
import CreateCollegeMentor from "./CreateCollegeMentor";
import ManageCollegeMentor from "./ManageCollegeMentor";
import AllocateCollegeMentor from "./AllocateCollegeMentor";
import Certifications from "./Certifications";
import Documentations from "./Documentations";
import CollegeProfile from "./CollegeProfile";
import ChangePassword from "./ChangePassword";
import CollegeLogout from "./CollegeLogout";
import ChatCompose from "./ChatCompose";
import ChatInbox from "./ChatInbox";
import ChatOutbox from "./ChatOutbox";
import ChatAllDetails from "./ChatAllDetails";
const CollegeAdmin = ()=>{
    return(
        <div>
<BrowserRouter>
<CollegeSideNav/>
<Routes>
    <Route path="/college-Dashboard" element={<CollegeDashboard/>}></Route>

    <Route path="/my-students" element={<MyStudents/>}></Route>

    <Route path="/course-register" element={<CourseRegister/>}></Route>
    <Route path="/course-pending" element={<CoursePending/>}></Route>
    <Route path="/course-manage" element={<CourseManage/>}></Route>

    <Route path="/internships" element={<Internships/>}></Route>

    <Route path="/placements" element={<Placements/>}></Route>

    <Route path="/payments-pending" element={<PaymentsPending/>}></Route>
    <Route path="/payments-transaction" element={<PaymentsTransaction/>}></Route>

    <Route path="create-collegeMentor" element={<CreateCollegeMentor/>}></Route>
    <Route path="/manage-collegeMentor" element={<ManageCollegeMentor/>}></Route>
    <Route path="/allocate-collegeMentor" element={<AllocateCollegeMentor/>}></Route>

    <Route path="/documentations" element={<Documentations/>}></Route>
    <Route path="/certifications" element={<Certifications/>}></Route>

    <Route path="/college-profile" element={<CollegeProfile/>}></Route>
    <Route path="/college-logout" element={<CollegeLogout/>}></Route>
    <Route path="/changepassword" element={<ChangePassword/>}></Route>

    <Route path="/compose-chat" element={<ChatCompose/>}></Route>
         <Route path="/inbox-chat" element={<ChatInbox/>}></Route>
         <Route path="/outbox-chat" element={<ChatOutbox/>}></Route>/
         <Route path="/alldetails-chat" element={<ChatAllDetails/>}></Route>

</Routes>
</BrowserRouter>
        </div>
    )
}
export default CollegeAdmin