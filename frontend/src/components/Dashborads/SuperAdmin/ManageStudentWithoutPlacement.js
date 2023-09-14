import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ManageStudentWithoutPlacement(){

    const [users, setUsers] = useState([]);
    useEffect(() =>{
        getUsers();
    }, []);

    function getUsers() {
    axios.get('http://localhost/TriaRight-In/backend/createStudentWithoutPlacement.php/user/save').then(function(response) {
        console.log(response.data);
        setUsers(response.data);
    });
}

const deleteRecord=(studentWithoutPlacementId )=>{
  const result = window.confirm("Are you sure you want to permanently delete this record?");
  if(result){
    
    axios.delete(`http://localhost/TriaRight-In/backend/createStudentWithoutPlacement.php/user/${studentWithoutPlacementId }/delete`).then(function(response){
      console.log(response.data);
      getUsers();
      });
    
  }
}

// const deleteBatch = (batchId) => {
//     axios.delete(`http://localhost/TriaRight-In/backend/createBatch.php/user/${batchId}/delete`).then(function(response){
//         console.log(response.data);
//         getUsers();
//     });
// }
    return (
        <div className="manage-college-container">
            <h1>List studentwithoutPlacement</h1>
            <table>
                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>registration Type</th>
                        <th>student Name</th>
                        <th>email</th>
                        <th>phone Number</th>
                        <th>gender</th>
                        <th>dateOfBirth</th>
                        <th>address</th>
                        <th>city</th>
                        <th>district</th>
                        <th>state</th>
                        <th>pinCode</th>
                        <th>qualification</th>
                        <th>qualificationStatus</th>
                        <th>semester</th>
                        <th>qualificationIndustry</th>
                        <th>qualification Type</th>
                        <th>branch/Stream</th>
                        <th>others Branch</th>
                        <th>specialization</th>
                        <th>othersSpecialization</th>
                        <th>instituteName</th>
                        <th>uploadCv</th>
                        <th>userName</th>
                        <th>password</th>
                        <th>accountType</th>
                        <th>paymentType</th>
                        <th>nameOnCertificate</th>
                        <th>studentRegNo</th>
                        <th>collegeName</th>
                        <th>industry</th>
                        <th>domain</th>
                        <th>course</th>
                        <th>duration</th>
                        <th>sessionSlot</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(users) ? (
  users.map((user, key) => (
    <tr key={key}>
      <td>{user.studentWithoutPlacementId }</td>
      <td>{user.registrationType}</td>
      <td>{user.fullName}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.gender}</td>
      <td>{user.dateofBirth}</td>
      <td>{user.address}</td>
      <td>{user.city}</td>
      <td>{user.district}</td>
      <td>{user.state}</td>
      <td>{user.pinCode}</td>
      <td>{user.qualification}</td>
      <td>{user.qualificationStatus}</td>
      <td>{user.semester}</td>
      <td>{user.qualificationIndustry}</td>
      <td>{user.qualificationType}</td>
      <td>{user.branchOrstream}</td>
      <td>{user.othersBranch}</td>
      <td>{user.specialization}</td>
      <td>{user.othersSpecialization}</td>
      <td>{user.instituteName}</td>
      <td>{user.uploadCv}</td>
      <td>{user.userName}</td>
      <td>{user.password}</td>
      <td>{user.accountType}</td>
      <td>{user.paymentType}</td>
      <td>{user.nameOnCertificate}</td>
      <td>{user.studentRegNo}</td>
      <td>{user.collegeName}</td>
      <td>{user.industry}</td>
      <td>{user.domain}</td>
      <td>{user.course}</td>
      <td>{user.duration}</td>
      <td>{user.sessionSlot}</td>
      <td className="button-container">
        <Link to={`/${user.studentWithoutPlacementId }/edit10`} style={{ marginRight: "10px" }}>
         <button>Edit</button> 
        </Link>
        <button onClick={() => deleteRecord(user.studentWithoutPlacementId )}>Delete</button>
      </td>
    </tr>
  ))
) : (
  <p>No users to display</p> // or any other appropriate message or component
)}

                </tbody>
            </table>
        </div>
    )
}