import React from "react";
import TrainerSideNav from "./TrainerSideNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrainerDashboard from "./TrainerDashboard";
import CoursesList from "./CoursesList";
import SuggestCourses from "./SuggestCourses";
import MyStudents from "./MyStudents";
import MyBatches from "./My Batches";
import CreateSchedule from "./CreateSchedule";
import ManageSchedule from "./ManageSchedule";
import ListSchedule from "./ListSchedule";
import CreateMeeting from "./CreateMeeting";
import ManageMeeting from "./ManageMeeting";
import ListMeeting from "./ListMeeting";
import CreateSummary from "./CreateSummary";
import ManageSummary from "./ManageSummary";
import ListSummary from "./ListSummary";
import CreateRecording from "./CreateRecording";
import ManageRecording from "./ManageRecording";
import ListRecording from "./ListRecording";
import AddTask from "./AddTask";
import ManageTask from "./ManageTask";
import ListTask from "./ListTask";
import UploadDocument from "./UploadDocument";
import ManageDocument from "./ManageDocument";
import ListDocument from "./ListDocument";
import TrainerProfile from "./TrainerProfile";
import ChangePassword from "./ChangePassword";
import TrainerLogout from "./TrainerLogout";
import ChatCompose from "./ChatCompose";
import ChatInbox from "./ChatInbox";
import ChatOutbox from "./ChatOutbox";
import ChatAllDetails from "./ChatAllDetails";
const TrainerAdmin=()=>{
    return(
        <div className="super">
    <BrowserRouter>
    <TrainerSideNav/>
    <Routes>
        <Route path="/trainer-Dashboard" element={<TrainerDashboard/>}></Route>

        <Route path="/courses-list" element={<CoursesList/>}></Route>
        <Route path="/suggest-courses" element={<SuggestCourses/>}></Route>

        <Route path="/myStudents" element={<MyStudents/>}></Route>
        <Route path="/myBatches" element={<MyBatches/>}></Route>

        <Route path="/create-schedule" element={<CreateSchedule/>}></Route>
        <Route path="/manage-schedule" element={<ManageSchedule/>}></Route>
        <Route path="/list-schedule" element={<ListSchedule/>}></Route> 

         <Route path="/create-meeting" element={<CreateMeeting/>}></Route>
         <Route path="/manage-meeting" element={<ManageMeeting/>}></Route>
         <Route path="/list-meeting" element={<ListMeeting/>}></Route>
     
         <Route path="/create-summary" element={<CreateSummary/>}></Route>
         <Route path="/manage-summary" element={<ManageSummary/>}></Route>
         <Route path="/list-summary" element={<ListSummary/>}></Route>

         <Route path="/create-recording" element={<CreateRecording/>}></Route>
         <Route path="/manage-recording" element={<ManageRecording/>}></Route>
         <Route path="/list-recording" element={<ListRecording/>}></Route>

         <Route path="/compose-chat" element={<ChatCompose/>}></Route>
         <Route path="/inbox-chat" element={<ChatInbox/>}></Route>
         <Route path="/outbox-chat" element={<ChatOutbox/>}></Route>/
         <Route path="/alldetails-chat" element={<ChatAllDetails/>}></Route>

         <Route path="/add-task" element={<AddTask/>}></Route>
         <Route path="/manage-task" element={<ManageTask/>}></Route>
         <Route path="/list-task" element={<ListTask/>}></Route>

         <Route path="/upload-document" element={<UploadDocument/>}></Route>
         <Route path="/manage-document" element={<ManageDocument/>}></Route>
         <Route path="/list-document" element={<ListDocument/>}></Route>

         <Route path="/trainer-profile" element={<TrainerProfile/>}></Route>
         <Route path="/changePassword" element={<ChangePassword/>}></Route>
         <Route path="/trainer-logout" element={<TrainerLogout/>}></Route>
    </Routes>
    </BrowserRouter>
 </div>
    )
}
export default TrainerAdmin