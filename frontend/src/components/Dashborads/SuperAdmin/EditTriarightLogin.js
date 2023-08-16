import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

function EditTriarightLogin(){

  const [triarightEssentials, setTriarightEssentials] = useState({
    userName: "",
    password : "",
    confirmPassword: "",
    

});
const Navigate = useNavigate();  

const {triarightLoginId} = useParams();
    useEffect(() => {
        getUser();  
    },[]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTriarightEssentials({...triarightEssentials, [name]: value });
  };

  

  function getUser() {
    axios.get(`http://localhost/TriarightWeb/createTriarightLoginform.php/user/${triarightLoginId}`).then(function(response) {
        console.log(response.data);
        setTriarightEssentials(response.data);
    });
}

const handleSubmit = (event) => {
  event.preventDefault();
  if (triarightEssentials.password !== triarightEssentials.confirmPassword) {
    alert("Password and Confirm Password do not match");
    return;
  }
  axios.put(`http://localhost/TriarightWeb/createTriarightLoginform.php/user/${triarightLoginId}/edit`, triarightEssentials)
  .then(function(response){
    if (response.data.status === 1) {
      alert('Success: ' + response.data.message);
      Navigate('/manage-triarightlogin');
    } else {
      alert('Error: ' + response.data.message);
    }
  })
  .catch(function (error) {
    console.error(error);
    alert('An error occurred while updating the record.');
  });
      
}

  return (
    <div className="create-student-container">
      <h2>Edit Triaright Login</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="registerAs">Register As:</label>
          <select
            id="registerAs"
            name="registerAs"
            value={triarightEssentials.registerAs}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select</option>
            <option value="trainer">Trainer</option>
            <option value="college">College</option>
            <option value="collageMentor">Collage Mentor</option>
            <option value="student">Student</option>
            <option value="company">Company</option>
            <option value="consultant">Consultant</option>
          </select>
        </div>
       
        <div className="form-group">
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={triarightEssentials.userName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={triarightEssentials.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
           <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={triarightEssentials.confirmPassword}
            onChange={handleChange}
          />
        </div>
        
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditTriarightLogin;