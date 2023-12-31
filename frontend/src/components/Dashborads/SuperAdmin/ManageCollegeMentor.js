import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ManageCollegeMentor(){

    const [users, setUsers] = useState([]);
    useEffect(() =>{
        getUsers();
    }, []);

    function getUsers() {
    axios.get('http://localhost/TriaRight-In/backend/createCollegeMentor.php/user/submit').then(function(response) {
        console.log(response.data);
        setUsers(response.data);
    });
}

const deleteRecord=(mentorId)=>{
  const result = window.confirm("Are you sure you want to permanently delete this record?");
  if(result){
    
    axios.delete(`http://localhost/TriaRight-In/backend/createCollegeMentor.php/user/${mentorId}/delete`).then(function(response) {
       console.log(response.data);
       getUsers();
    
  });
}
}

// const deleteCollege = (collegeId) => {
//   axios.delete(`http://localhost/TriaRight-In/backend/createCollege.php/user/${collegeId}/delete`).then(function(response) {
//        console.log(response.data);
//        getUsers();
//   });
// }

    return (
        <div className="manage-college-container">
            <h1>Manage College</h1>
            <table>
                <thead>
                    <tr>
                        <th>CollegeId</th>
                        <th>College Name</th>
                        <th>College Code</th>
                        <th>Address</th>
                        <th>District</th>
                        <th>State</th>
                        <th>Pincode</th>
                        <th>College PhNumber</th>
                        <th>College Mail</th>
                        <th>Representative Name</th>
                        <th>representative PhoneNo</th>
                        <th>Representative Mail</th>
                        <th>College streams</th>
                        <th>affiliated Universityl</th>
                        <th>College Website</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(users) ? (
  users.map((user, key) => (
    <tr key={key}>
      <td>{user.collegeId}</td>
      <td>{user.collegeName}</td>
      <td>{user.collegeCode}</td>
      <td>{user.Address}</td>
      <td>{user.District}</td>
      <td>{user.state}</td>
      <td>{user.pincode}</td>
      <td>{user.collegePhNo}</td>
      <td>{user.collegeMail}</td>
      <td>{user.collegeRepresName}</td>
      <td>{user.colleRepresPhNo}</td>
      <td>{user.colleeRepresMail}</td>
      <td>{user.collegeStreams}</td>
      <td>{user.affiliatedUniversity}</td>
      <td>{user.collegeWebsite}</td>
<td>{user.userName}</td>
<td>{user.password}</td>
      <td className="button-container">
        <Link to={`/${user.collegeId}/edit4`} style={{ marginRight: "10px" }}>
         <button>Edit</button> 
        </Link>
        <button onClick={() => deleteRecord(user.collegeId)}>Delete</button>
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