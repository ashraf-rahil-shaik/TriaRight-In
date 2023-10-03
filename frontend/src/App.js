
import SuperAdmin from './components/Dashborads/SuperAdmin/SuperAdmin';

import React from 'react';

import './index.css';
import { Route ,Routes } from 'react-router-dom';
import ManageStream from './components/Dashborads/SuperAdmin/ManageStream';
import EditStream from './components/Dashborads/SuperAdmin/EditStream';
import CreateCourse from './components/Dashborads/SuperAdmin/CreateCourse';
import ManageCourse from './components/Dashborads/SuperAdmin/ManageCourse';
import CreateTrainer from './components/Dashborads/SuperAdmin/CreateTrainer';
import ManageTrainer from './components/Dashborads/SuperAdmin/ManageTrainer';
import CreateCollege from './components/Dashborads/SuperAdmin/CreateCollege';
import ManageCollege from './components/Dashborads/SuperAdmin/ManageCollege';
import CreateBatch from './components/Dashborads/SuperAdmin/CreateBatch';
import ManageBatch from './components/Dashborads/SuperAdmin/ManageBatch';
import EditBatch from './components/Dashborads/SuperAdmin/EditBatch';
import CreateCompany from './components/Dashborads/SuperAdmin/CreateCompany';
import ManageCompany from './components/Dashborads/SuperAdmin/ManageCompany';
import CreateTriarightLogin from './components/Dashborads/SuperAdmin/CreateTriarightLogin';
import ManageTriarightLogin from './components/Dashborads/SuperAdmin/ManageTriarightLogin';
import EditTriarightLogin from './components/Dashborads/SuperAdmin/EditTriarightLogin';
import CreateStudentWithoutPlacement from './components/Dashborads/SuperAdmin/CreateStudentWithoutPlacement';
import ManageStudentWithoutPlacement from './components/Dashborads/SuperAdmin/ManageStudentWithoutPlacement';
import EditStudentWithoutPlacement from './components/Dashborads/SuperAdmin/EditStudentWithoutPlacement';
import CreateStudentWithPlacement from './components/Dashborads/SuperAdmin/CreateStudentWithPlacement';
import ManageStudentWithPlacement from './components/Dashborads/SuperAdmin/ManageStudentWithPlacement';
import EditStudentWithPlacement from './components/Dashborads/SuperAdmin/EditStudentWithPlacement';
import RegMainForm from './components/Dashborads/SuperAdmin/MainForm';
import CreateConsultant from './components/Dashborads/SuperAdmin/CreateConsultant';
import ManageConsultant from './components/Dashborads/SuperAdmin/ManageConsultant';
import EditConsultant from './components/Dashborads/SuperAdmin/EditConsultant';
import Example from './components/Dashborads/SuperAdmin/example';
import CreateSlots from './components/Dashborads/SuperAdmin/CreateSlot';
import ManageSlot from './components/Dashborads/SuperAdmin/ManageSlot';
import EditSlot from './components/Dashborads/SuperAdmin/EditSlot';
import CreateCollegeMentor from './components/Dashborads/SuperAdmin/CreateCollegeMentor';
import ManageCollegeMentor from './components/Dashborads/SuperAdmin/ManageCollegeMentor';
import CreateStream from './components/Dashborads/SuperAdmin/CreateStream';
import EditCourse from './components/Dashborads/SuperAdmin/EditCourse';
import EditTrainer from './components/Dashborads/SuperAdmin/EditTrainer';
import EditCollege from './components/Dashborads/SuperAdmin/EditCollege';
import EditCompany from './components/Dashborads/SuperAdmin/EditCompany';
import TrainerAdmin from './components/Dashborads/TrainerDashboard/TrainerAdmin';
import TrainerDashboard from "./components/Dashborads/TrainerDashboard/TrainerDashboard";
import CoursesList from "./components/Dashborads/TrainerDashboard/CoursesList";
import SuggestCourses from "./components/Dashborads/TrainerDashboard/SuggestCourses";
import MyStudents from "./components/Dashborads/TrainerDashboard/MyStudents";
import MyBatches from "./components/Dashborads/TrainerDashboard/MyBatches";
import MyCourses from "./components/Dashborads/TrainerDashboard/MyCourses";
import CreateSchedule from "./components/Dashborads/TrainerDashboard/CreateSchedule";
import ManageSchedule from "./components/Dashborads/TrainerDashboard/ManageSchedule";
import ListSchedule from "./components/Dashborads/TrainerDashboard/ListSchedule";
import CreateMeeting from "./components/Dashborads/TrainerDashboard/CreateMeeting";
import ManageMeeting from "./components/Dashborads/TrainerDashboard/ManageMeeting";
import ListMeeting from "./components/Dashborads/TrainerDashboard/ListMeeting";
import CreateSummary from "./components/Dashborads/TrainerDashboard/CreateSummary";
import ManageSummary from "./components/Dashborads/TrainerDashboard/ManageSummary";
import ListSummary from "./components/Dashborads/TrainerDashboard/ListSummary";
import CreateRecording from "./components/Dashborads/TrainerDashboard/CreateRecording";
import ManageRecording from "./components/Dashborads/TrainerDashboard/ManageRecording";
import ListRecording from "./components/Dashborads/TrainerDashboard/ListRecording";

import ManageTask from "./components/Dashborads/TrainerDashboard/ManageTask";
import ListTask from "./components/Dashborads/TrainerDashboard/ListTask";
import UploadDocument from "./components/Dashborads/TrainerDashboard/UploadDocument";
import ManageDocument from "./components/Dashborads/TrainerDashboard/ManageDocument";
import ListDocument from "./components/Dashborads/TrainerDashboard/ListDocument";
import TrainerProfile from "./components/Dashborads/TrainerDashboard/TrainerProfile";
import ChangePassword from "./components/Dashborads/TrainerDashboard/ChangePassword";
import TrainerLogout from "./components/Dashborads/TrainerDashboard/TrainerLogout";
import ChatCompose from "./components/Dashborads/TrainerDashboard/ChatCompose";
import ChatInbox from "./components/Dashborads/TrainerDashboard/ChatInbox";
import ChatOutbox from "./components/Dashborads/TrainerDashboard/ChatOutbox";
import ChatAllDetails from "./components/Dashborads/TrainerDashboard/ChatAllDetails";
import StudentAdmin from './components/Dashborads/StudentDashboard/StudentAdmin';
import CollegeDashboard from './components/Dashborads/CollegeDashboard/CollegeDashboard';
import CourseRegister from './components/Dashborads/CollegeDashboard/CourseRegister';
import CoursePending from './components/Dashborads/CollegeDashboard/CoursePending';
import CourseManage from './components/Dashborads/CollegeDashboard/CourseManage';
import Internships from './components/Dashborads/StudentDashboard/Internships';
import Placements from './components/Dashborads/StudentDashboard/Placements';
import PaymentsPending from './components/Dashborads/CollegeDashboard/PaymentsPending';
import PaymentsTransaction from './components/Dashborads/CollegeDashboard/PaymentsTransaction';
import AllocateCollegeMentor from './components/Dashborads/CollegeDashboard/AllocateCollegeMentor';
import Documentations from './components/Dashborads/CollegeDashboard/Documentations';
import Certifications from './components/Dashborads/CollegeDashboard/Certifications';
import CollegeProfile from './components/Dashborads/CollegeDashboard/CollegeProfile';
import CollegeLogout from './components/Dashborads/CollegeDashboard/CollegeLogout';
import CollegeAdmin from './components/Dashborads/CollegeDashboard/CollegeAdmin';
import MyInternships from './components/Dashborads/StudentDashboard/MyInternships';
import MyPlacements from './components/Dashborads/StudentDashboard/MyPlacements';
import Courses from './components/Dashborads/StudentDashboard/Courses';
import StudentProfile from './components/Dashborads/StudentDashboard/StudentProfile';
import StudentChangePassword from './components/Dashborads/StudentDashboard/StudentChangePassword';
import StudentLogout from './components/Dashborads/StudentDashboard/StudentLogOut';
import CompanyAdmin from './components/Dashborads/CompanyDashboard/CompanyAdmin';
import CompanyDashboard from './components/Dashborads/CompanyDashboard/CompanyDashboard';
import AddInternship from './components/Dashborads/CompanyDashboard/AddInternship';
import MyInternship from './components/Dashborads/CompanyDashboard/MyInternship';
import InternshipApplicant from './components/Dashborads/CompanyDashboard/InternshipApplicant';
import AddPlacement from './components/Dashborads/CompanyDashboard/AddPlacement';
import MyPlacement from './components/Dashborads/CompanyDashboard/MyPlacement';
import PlacementApplicant from './components/Dashborads/CompanyDashboard/PlacementApplicant';
import CompanyProfile from './components/Dashborads/CompanyDashboard/CompanyProfile';
import CompanyLogout from './components/Dashborads/CompanyDashboard/CompanyLogout';
import StudentDashboard from './components/Dashborads/StudentDashboard/StudentDashboard';
function App() {
  return (
    <div className="App">
<Routes>
  
<Route path='/superadmin' element ={<SuperAdmin/>}>
        <Route path="create-stream" element={<CreateStream />}></Route>
        <Route path="manage-stream" element={<ManageStream />}></Route> 
        <Route path=":streamId/edit1" element={<EditStream />}></Route>

        <Route path="create-course" element={<CreateCourse />}></Route>
        <Route path="manage-course" element={<ManageCourse />}></Route> 
        <Route path=":courseId/edit2" element={<EditCourse />}></Route>

        <Route path="create-trainer" element={<CreateTrainer />}></Route>
        <Route path="manage-trainer" element={<ManageTrainer />}></Route>
        <Route path=":trainerId/edit3" element={<EditTrainer />}></Route>

        <Route path="create-college" element={<CreateCollege />}></Route>
        <Route path="manage-college" element={<ManageCollege />}></Route>
        <Route path=":collegeId/edit4" element={<EditCollege />}></Route>

        <Route path="create-batch" element={<CreateBatch />}></Route>
        <Route path="manage-batch" element={<ManageBatch />}></Route>
        <Route path=":batchId/edit5" element={<EditBatch />}></Route>

        <Route path="create-company" element={<CreateCompany />}></Route>
        <Route path="manage-company" element={<ManageCompany />}></Route>
        <Route path=":companyId/edit6" element={<EditCompany />}></Route>

        <Route path="create-triarightlogin" element={<CreateTriarightLogin/>}></Route>
        <Route path="manage-triarightlogin" element={<ManageTriarightLogin />}></Route>
        <Route path=":triarightLoginId/edit7" element={<EditTriarightLogin />}></Route>

        <Route path="create-studentwithoutPlacement" element={<CreateStudentWithoutPlacement/>}></Route>
        <Route path="manage-studentwithoutPlacement" element={<ManageStudentWithoutPlacement/>}></Route>
        <Route path=":studentWithoutPlacementId/edit10" element={<EditStudentWithoutPlacement/>}></Route>

        <Route path="create-studentwithPlacement" element={<CreateStudentWithPlacement/>}></Route>
        <Route path="manage-studentwithPlacement" element={<ManageStudentWithPlacement/>}></Route>
        <Route path=":studentWithPlacementId/edit11" element={<EditStudentWithPlacement/>}></Route>
        <Route path="create-regMainForm" element={<RegMainForm/>}></Route>

        <Route path="create-consultant" element={<CreateConsultant/>}></Route>
        <Route path="manage-consultant" element={<ManageConsultant/>}></Route>
        <Route path=":consultantId/edit8" element={<EditConsultant/>}></Route>
        
        <Route path="create-example" element={<Example/>}></Route>
 
        <Route path="create-slot" element={<CreateSlots/>}></Route>
        <Route path="manage-slot" element={<ManageSlot/>}></Route>
        <Route path=":slotId/edit9" element={<EditSlot/>}></Route>

        <Route path="create-collegementor" element={<CreateCollegeMentor/>}></Route>
        <Route path="manage-collegementor" element={<ManageCollegeMentor/>}></Route>
</Route>

<Route path='/traineradmin' element ={<TrainerAdmin/>}>

<Route path="trainer-Dashboard" element={<TrainerDashboard/>}></Route>

        <Route path="courses-list" element={<CoursesList/>}></Route>
        <Route path="suggest-courses" element={<SuggestCourses/>}></Route>

        <Route path="myStudents" element={<MyStudents/>}></Route>
        <Route path="myBatches" element={<MyBatches/>}></Route>
        <Route path="myCourses" element={<MyCourses/>}></Route>

        <Route path="create-schedule" element={<CreateSchedule/>}></Route>
        <Route path="manage-schedule" element={<ManageSchedule/>}></Route>
        <Route path="list-schedule" element={<ListSchedule/>}></Route> 

         <Route path="create-meeting" element={<CreateMeeting/>}></Route>
         <Route path="manage-meeting" element={<ManageMeeting/>}></Route>
         <Route path="list-meeting" element={<ListMeeting/>}></Route>
     
         <Route path="create-summary" element={<CreateSummary/>}></Route>
         <Route path="manage-summary" element={<ManageSummary/>}></Route>
         <Route path="list-summary" element={<ListSummary/>}></Route>

         <Route path="create-recording" element={<CreateRecording/>}></Route>
         <Route path="manage-recording" element={<ManageRecording/>}></Route>
         <Route path="list-recording" element={<ListRecording/>}></Route>
         <Route path="compose-chat" element={<ChatCompose/>}></Route>
         <Route path="inbox-chat" element={<ChatInbox/>}></Route>
         <Route path="outbox-chat" element={<ChatOutbox/>}></Route>/
         <Route path="alldetails-chat" element={<ChatAllDetails/>}></Route>

         <Route path="manage-task" element={<ManageTask/>}></Route>
         <Route path="list-task" element={<ListTask/>}></Route>

         <Route path="upload-document" element={<UploadDocument/>}></Route>
         <Route path="manage-document" element={<ManageDocument/>}></Route>
         <Route path="list-document" element={<ListDocument/>}></Route>

         <Route path="trainer-profile" element={<TrainerProfile/>}></Route>
         <Route path="changePassword" element={<ChangePassword/>}></Route>
         <Route path="trainer-logout" element={<TrainerLogout/>}></Route>

</Route>
<Route path='/collegeadmin' element={<CollegeAdmin/>}>

    <Route path="college-Dashboard" element={<CollegeDashboard/>}></Route>

    <Route path="my-students" element={<MyStudents/>}></Route>

    <Route path="course-register" element={<CourseRegister/>}></Route>
    <Route path="course-pending" element={<CoursePending/>}></Route>
    <Route path="course-manage" element={<CourseManage/>}></Route>

    <Route path="internships" element={<Internships/>}></Route>

    <Route path="placements" element={<Placements/>}></Route>

    <Route path="payments-pending" element={<PaymentsPending/>}></Route>
    <Route path="payments-transaction" element={<PaymentsTransaction/>}></Route>

    <Route path="create-collegeMentor" element={<CreateCollegeMentor/>}></Route>
    <Route path="manage-collegeMentor" element={<ManageCollegeMentor/>}></Route>
    <Route path="allocate-collegeMentor" element={<AllocateCollegeMentor/>}></Route>

    <Route path="documentations" element={<Documentations/>}></Route>
    <Route path="certifications" element={<Certifications/>}></Route>

    <Route path="college-profile" element={<CollegeProfile/>}></Route>
    <Route path="college-logout" element={<CollegeLogout/>}></Route>
    <Route path="changepassword" element={<ChangePassword/>}></Route>

    <Route path="compose-chat" element={<ChatCompose/>}></Route>
         <Route path="inbox-chat" element={<ChatInbox/>}></Route>
         <Route path="outbox-chat" element={<ChatOutbox/>}></Route>/
         <Route path="alldetails-chat" element={<ChatAllDetails/>}></Route>

</Route>
<Route path='/studentadmin' element={<StudentAdmin/>} > 
                    <Route path="student-dashboard" element={<StudentDashboard/>}></Route>
            
                     <Route path="myCourses" element={<MyCourses/>}></Route>
                     <Route path="myInternships" element={<MyInternships/>}></Route>
                     <Route path="myPlacements" element={<MyPlacements/>}></Route>
        
                     <Route path="compose-chat" element={<ChatCompose/>}></Route>
                     <Route path="inbox-chat" element={<ChatInbox/>}></Route>
                     <Route path="outbox-chat" element={<ChatOutbox/>}></Route>
                     <Route path="alldetails-chat" element={<ChatAllDetails/>}></Route>
        
                     <Route path="student-courses" element={<Courses/>}></Route>
                     <Route path="student-internships" element={<Internships/>}></Route>
                     <Route path="student-placements" element={<Placements/>}></Route>
                     <Route path="student-profile" element={<StudentProfile/>}></Route>
                    <Route path="student-changepassword" element={<StudentChangePassword/>}></Route>
                    <Route path="student-Logout" element={<StudentLogout/>}></Route>
</Route>
<Route path='/companyadmin' element={<CompanyAdmin/>}>

<Route path="company-dashboard" element={<CompanyDashboard/>}></Route>

<Route path="add-internship" element={<AddInternship/>}></Route>
<Route path="myInternship" element={<MyInternship/>}></Route>
<Route path="internship-applicants" element={<InternshipApplicant/>}></Route>

<Route path="add-placement" element={<AddPlacement/>}></Route>
<Route path="myPlacement" element={<MyPlacement/>}></Route>
<Route path="placement-applicants" element={<PlacementApplicant/>}></Route>

<Route path="company-profile" element={<CompanyProfile/>}></Route>
<Route path="changepassword" element={<ChangePassword/>}></Route>
<Route path="company-logout" element={<CompanyLogout/>}></Route>

        <Route path="compose-chat" element={<ChatCompose/>}></Route>
         <Route path="inbox-chat" element={<ChatInbox/>}></Route>
         <Route path="outbox-chat" element={<ChatOutbox/>}></Route>/
         <Route path="alldetails-chat" element={<ChatAllDetails/>}></Route>

</Route>
</Routes>
    </div>
  );




}




export default App;
