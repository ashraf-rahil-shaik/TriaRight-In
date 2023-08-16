import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ManageTriarightLogin(){

        const [users, setUsers] = useState([]);
        useEffect(() =>{
            getUsers();
        }, []);
    
        function getUsers() {
        axios.get('http://localhost/TriarightWeb/createTriarightLoginform.php/user/save').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
    
    const deleteRecord=(triarightLoginId)=>{
      const result = window.confirm("Are you sure you want to permanently delete this record?");
      if(result){
        axios.delete(`http://localhost/TriarightWeb/createTriarightLoginform.php/user/${triarightLoginId}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        
      });
    }
    }

    // const deleteTriarightEssentitals = (triarightLoginId) => {
    //     axios.delete(`http://localhost/TriarightWeb/createTriarightLoginform.php/user/${triarightLoginId}/delete`).then(function(response){
    //         console.log(response.data);
    //         getUsers();
    //     });
    // }

    return (
        <div>
            <h1>List TriarightEssentials</h1>
            <table>
                <thead>
                    <tr>
                        <th>Login Id</th>
                        <th>User Name</th>
                        <th>Password</th>
                        <th>Register As</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(users) ? (
  users.map((user, key) => (
    <tr key={key}>
      <td>{user.triarightLoginId}</td>
      <td>{user.userName}</td>
      <td>{user.password}</td>
      <td>{user.registerAs}</td>
     
      <td>
        <Link to={`/${user.triarightLoginId}/edit7`} style={{ marginRight: "10px" }}>
          Edit
        </Link>
        <button onClick={() => deleteRecord(user.triarightLoginId)}>Delete</button>
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
export default ManageTriarightLogin;