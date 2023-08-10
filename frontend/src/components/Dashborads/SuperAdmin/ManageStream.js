// import React from 'react'


//  const ManageStream = () => (
//   <div>
  
//   </div>
// )
// export default ManageStream
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ManageStream(){

    const [users, setUsers] = useState([]);
    useEffect(() =>{
        getUsers();
    }, []);

    function getUsers() {
    axios.get('http://localhost/TriarightWeb/createStream.php/user/create').then(function(response) {
        console.log(response.data);
        setUsers(response.data);
    });
}

const deleteStream = (streamId) => {
  axios.delete(`http://localhost/TriarightWeb/createStream.php/user/${streamId}/delete`).then(function(response) {
       console.log(response.data);
       getUsers();
  });
}

    return (
        <div>
            <h1>Manage Stream</h1>
            <table>
                <thead>
                    <tr>
                        <th>streamId</th>
                        <th>Stream Name</th>
                        <th>Stream Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(users) ? (
  users.map((user, key) => (
    <tr key={key}>
      <td>{user.streamId}</td>
      <td>{user.streamName}</td>
      <td>{user.streamLocation}</td>
      <td>
        <Link to={`/${user.streamId}/edit1`} style={{marginRight: "10px" }}>
          Edit
        </Link>
        <button onClick={() => deleteStream(user.streamId)}>Delete</button>
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