import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ManageCourse(){

    const [users, setUsers] = useState([]);
    useEffect(() =>{
        getUsers();
    }, []);

    function getUsers() {
    axios.get('http://localhost/TriarightWeb/createCourse.php/user/submit').then(function(response) {
        console.log(response.data);
        setUsers(response.data);
    });
}

const deleteStream = (courseId) => {
  axios.delete(`http://localhost/TriarightWeb/createCourse.php/user/${courseId}/delete`).then(function(response) {
       console.log(response.data);
       getUsers();
  });
}

    return (
        <div>
            <h1>Manage Coarse</h1>
            <table>
                <thead>
                    <tr>
                        <th>courseId</th>
                        <th>Course Image</th>
                        <th>Stream </th>
                        <th>Duration</th>
                        <th>Provider</th>
                        <th>trainingType</th>
                        <th>Hours</th>
                        <th>courseDescription</th>
                        <th>TopicsCovered</th>
                        <th>Benefits</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(users) ? (
  users.map((user, key) => (
    <tr key={key}>
      <td>{user.courseId}</td>
      <td><img src={`${user.Images}`}/></td>
      <td>{user.Stream}</td>
      <td>{user.Duration}</td>
      <td>{user.Providers}</td>
      <td>{user.trainingType}</td>
      <td>{user.Hours1}</td>
      <td>{user.coarseDescription}</td>
      <td>{user.TopicsCovered}</td>
      <td>{user.Benefits}</td>
      <td>{user.Price}</td>

      <td>
        <Link to={`/${user.courseId}/edit2`} style={{ marginRight: "10px" }}>
          Edit
        </Link>
        <button onClick={() => deleteStream(user.courseId)}>Delete</button>
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