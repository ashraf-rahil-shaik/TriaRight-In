import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams } from "react-router-dom"

const CreateCollege = () => {
  const [collegeData, setCollegeData] = useState({
    collegeName: "",
    collegeCode: "",
    Address: "",
    District: "",
    state: "",
    pincode: "",
    collegePhNo: "",
    collegeMail: "",
    collegeRepresName: "",
    colleRepresPhNo: "",
    colleeRepresMail: "",
    collegeStreams: "",
    affiliatedUniversity: "",
    collegeWebsite: "",
    userName: "",
   password: "",
   confirmPassword: "",
  });

  const {collegeId} =useParams();
  
  useEffect(() =>{
        getUsers();
    },[]);

    function getUsers() {
    axios.get(`http://localhost/TriaRight-In/backend/createCollege.php/user/${collegeId}`).then(function(response) {
        console.log(response.data);
        setCollegeData(response.data);
    });
}

  const Navigate = useNavigate(); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCollegeData({ ...collegeData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost/TriaRight-In/backend/createCollege.php/user/create/${collegeId}/edit`, collegeData)
    .then(function(response){
      if (response.data.status === 1) {
        alert('Success: ' + response.data.message);
        Navigate('/manage-college');
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
    <div className="create-college-container">
      <h2>Create College Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="collegeName">College Name:</label>
          <input
            type="text"
            name="collegeName"
            id="collegeName"
            value={collegeData.collegeName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="collegeCode">College Code:</label>
          <input
            type="text"
            name="collegeCode"
            id="collegeCode"
            value={collegeData.collegeCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            name="Address"
            id="address"
            value={collegeData.Address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="district">District:</label>
          <input
            type="text"
            name="District"
            id="district"
            value={collegeData.District}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">state:</label>
          <input
            type="text"
            name="state"
            id="state"
            value={collegeData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">pincode:</label>
          <input
            type="number"
            name="pincode"
            id="pincode"
            value={collegeData.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="collegephone">college phone number:</label>
          <input
            type="number"
            name="collegePhNo"
            id="collegephone"
            value={collegeData.collegePhNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="collegemail">college mail id:</label>
          <input
            type="email"
            name="collegeMail"
            id="collegemail"
            value={collegeData.collegeMail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="representativeName">College Representative Name:</label>
          <input
            type="text"
            name="collegeRepresName"
            id="representativeName"
            value={collegeData.collegeRepresName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="representativePhone">College Representative Phone:</label>
          <input
            type="number"
            name="colleRepresPhNo"
            id="representativePhone"
            value={collegeData.colleRepresPhNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="representativeEmail">College Representative Email:</label>
          <input
            type="email"
            name="colleeRepresMail"
            id="representativeEmail"
            value={collegeData.colleeRepresMail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="streams">College Streams (separate by comma):</label>
          <input
            type="text"
            name="collegeStreams"
            id="streams"
            value={collegeData.collegeStreams}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="affiliatedUniversity">Affiliated University:</label>
          <input
            type="text"
            name="affiliatedUniversity"
            id="affiliatedUniversity"
            value={collegeData.affiliatedUniversity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="collegeWebsite">College Website (Optional):</label>
          <input
            type="text"
            name="collegeWebsite"
            id="collegeWebsite"
            value={collegeData.collegeWebsite}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="userName">College Username:</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={collegeData.userName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={collegeData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="confirmPassword">Re-Enter Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={collegeData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCollege;
