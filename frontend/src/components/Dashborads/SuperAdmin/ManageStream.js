import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ManageStream(){

    const [users, setUsers] = useState([]);
    useEffect(() =>{
        getUsers();
    }, []);

    function getUsers() {
    axios.get('http://localhost/TriaRight-In/backend/createStream.php/user/create').then(function(response) {
        console.log(response.data);
        setUsers(response.data);
    });
}


const deleteRecord=(streamId)=>{
  const result = window.confirm("Are you sure you want to permanently delete this record?");
  if(result){
    
      axios.delete(`http://localhost/TriaRight-In/backend/createStream.php/user/${streamId}/delete`).then(function(response) {
           console.log(response.data);
           getUsers();
      });
    
  }
}


// const deleteStream = () => {
//   axios.delete(`http://localhost/TriaRight-In/backend/createStream.php/user/${streamId}/delete`).then(function(response) {
//        console.log(response.data);
//        getUsers();
//   });
// }
 

    return (
        <div className="create-course-container">
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
      <td className="button-container">
        <Link to={`/${user.streamId}/edit1`} style={{marginRight: "10px" }}>
          <button>Edit</button>
        </Link>
        <button onClick={() => deleteRecord(user.streamId)}>Delete</button>
         {/* <button onClick={() => deleteStream(user.streamId)}>Delete</button> */}
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