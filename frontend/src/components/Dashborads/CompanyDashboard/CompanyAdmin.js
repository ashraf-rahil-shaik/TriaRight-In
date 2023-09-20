import React from "react";
import CompanySideNav from "./CompanySideNav";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import CompanyDashboard from "./CompanyDashboard";
import MyInternship from "./MyInternship";
import AddInternship from "./AddInternship";
import InternshipApplicant from "./InternshipApplicant";
import MyPlacement from "./MyPlacement";
import AddPlacement from "./AddPlacement";
import PlacementApplicant from "./PlacementApplicant";
import CompanyProfile from "./CompanyProfile";
import ChangePassword from "./ChangePassword";
import CompanyLogout from "./CompanyLogout";
import ChatAllDetails from "./ChatAllDetails";
import ChatCompose from "./ChatCompose";
import ChatInbox from "./ChatInbox";
import ChatOutbox from "./ChatOutbox";
const CompanyAdmin =()=>{
    return(
<BrowserRouter>
<CompanySideNav/>
<Routes>
<Route path="/company-dashboard" element={<CompanyDashboard/>}></Route>

<Route path="/add-internship" element={<AddInternship/>}></Route>
<Route path="/myInternship" element={<MyInternship/>}></Route>
<Route path="/internship-applicants" element={<InternshipApplicant/>}></Route>

<Route path="/add-placement" element={<AddPlacement/>}></Route>
<Route path="/myPlacement" element={<MyPlacement/>}></Route>
<Route path="/placement-applicants" element={<PlacementApplicant/>}></Route>

<Route path="/company-profile" element={<CompanyProfile/>}></Route>
<Route path="/changepassword" element={<ChangePassword/>}></Route>
<Route path="/company-logout" element={<CompanyLogout/>}></Route>

        <Route path="/compose-chat" element={<ChatCompose/>}></Route>
         <Route path="/inbox-chat" element={<ChatInbox/>}></Route>
         <Route path="/outbox-chat" element={<ChatOutbox/>}></Route>/
         <Route path="/alldetails-chat" element={<ChatAllDetails/>}></Route>

</Routes>
</BrowserRouter>
    )
}
export default CompanyAdmin