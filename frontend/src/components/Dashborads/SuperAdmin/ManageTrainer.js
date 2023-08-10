// import React from 'react'


//  const ManageStream = () => (
//   <div>
  
//   </div>
// )
// export default ManageStream
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ManageTrainer(){

    const [users, setUsers] = useState([]);
    useEffect(() =>{
        getUsers();
    }, []);

    function getUsers() {
    axios.get('http://localhost/TriarightWeb/createTrainer.php/user/create').then(function(response) {
        console.log(response.data);
        setUsers(response.data);
    });
}
    return (
        <div>
            <h1>Manage Trainer</h1>
            <table>
                <thead>
                    <tr>
                        <th>TrainerId</th>
                        <th>Trainer Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Gender</th>
                        <th>Date of birth</th>
                        <th>Aadhar Number</th>
                        <th>PaN Number</th>
                        <th>Aadhar Photo</th>
                        <th>Pan card Photo</th>
                        <th>Date of joining</th>
                        <th>Qualification</th>
                        <th>Has experience</th>
                        <th>previous Organization</th>
                        <th>Designation</th>
                        <th>Trainer documents</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(users) ? (
  users.map((user, key) => (
    <tr key={key}>
        <td>{user.trainerId}</td>
      <td>{user.trainerName}</td>
      <td>{user.Email}</td>
      <td>{user.phNumber}</td>
      <td>{user.Gender}</td>
      <td>{user.DateOfBirth}</td>
      <td>{user.aadharNumber}</td>
      <td>{user.panNumber}</td>
      <td>{user.aadharImage}</td>
      <td>{user.panImage}</td>
      <td>{user.DateOfJoining}</td>
      <td>{user.qualification}</td>
      <td>{user.experience}</td>
      <td>{user.previousOrganization}</td>
      <td>{user.designation}</td>
      <td>{user.trainerDocuments}</td>
      <td>
        <Link to={`/${user.trainerId}/edit3`} style={{ marginRight: "10px" }}>
          Edit
        </Link>
        <button>Delete</button>
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