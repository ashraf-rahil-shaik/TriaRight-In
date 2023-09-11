import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ManageBatch(){

    const [users, setUsers] = useState([]);
    useEffect(() =>{
        getUsers();
    }, []);

    function getUsers() {
    axios.get('http://localhost/TriaRight-In/backend/createBatch.php/user/save').then(function(response) {
        console.log(response.data);
        setUsers(response.data);
    });
}

const deleteRecord=(batchId)=>{
  const result = window.confirm("Are you sure you want to permanently delete this record?");
  if(result){
    
    axios.delete(`http://localhost/TriaRight-In/backend/createBatch.php/user/${batchId}/delete`).then(function(response){
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
            <h1>List Batch</h1>
            <table>
                <thead>
                    <tr>
                        <th>Batch Id</th>
                        <th>Batch Name</th>
                        <th>Class Duration</th>
                        {/* <th>Course Id</th> */}
                        <th>Course Name</th>
                        {/* <th>Trainer Id</th> */}
                        <th>Trainer Name</th>
                        <th>Batch Starting Date</th>
                        <th>Batch Ending Date</th>
                        <th>Session Slot</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(users) ? (
  users.map((user, key) => (
    <tr key={key}>
      <td>{user.batchId}</td>
      <td>{user.batchName}</td>
      <td>{user.classDuration}</td>
      {/* <td>{user.courseId}</td> */}
      <td>{user.courseName}</td>
      {/* <td>{user.trainerId}</td> */}
      <td>{user.trainerName}</td>
      <td>{user.batchStartingDate}</td>
      <td>{user.batchEndingDate}</td>
      <td>{user.sessionSlot}</td>
      <td className="button-container">
        <Link to={`/${user.batchId}/edit5`} style={{ marginRight: "10px" }}>
         <button>Edit</button> 
        </Link>
        <button onClick={() => deleteRecord(user.batchId)}>Delete</button>
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