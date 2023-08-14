import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ManageBatch(){

    const [users, setUsers] = useState([]);
    useEffect(() =>{
        getUsers();
    }, []);

    function getUsers() {
    axios.get('http://localhost/TriarightWeb/createBatch.php/user/save').then(function(response) {
        console.log(response.data);
        setUsers(response.data);
    });
}

const deleteBatch = (batchId) => {
    axios.delete(`http://localhost/TriarightWeb/createBatch.php/user/${batchId}/delete`).then(function(response){
        console.log(response.data);
        getUsers();
    });
}
    return (
        <div>
            <h1>List Batch</h1>
            <table>
                <thead>
                    <tr>
                        <th>Batch Id</th>
                        <th>Batch Name</th>
                        <th>Class Duration</th>
                        <th>Course Id</th>
                        <th>Course Name</th>
                        <th>Trainer Id</th>
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
      <td>{user.courseId}</td>
      <td>{user.courseName}</td>
      <td>{user.trainerId}</td>
      <td>{user.trainerName}</td>
      <td>{user.batchStartingDate}</td>
      <td>{user.batchEndingDate}</td>
      <td>{user.sessionSlot}</td>
      <td>
        <Link to={`/${user.batchId}/edit5`} style={{ marginRight: "10px" }}>
          Edit
        </Link>
        <button onClick={() => deleteBatch(user.batchId)}>Delete</button>
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