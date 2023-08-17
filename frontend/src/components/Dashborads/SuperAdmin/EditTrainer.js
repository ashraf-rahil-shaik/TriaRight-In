import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams } from "react-router-dom"


const CreateTrainer = () => {
  const [trainerData, setTrainerData] = useState({
    trainerName: "",
    personalEmail: "",
    phNumber: "",
    Gender: "male",
    DateOfBirth: "",
    aadharNumber: "",
    panNumber: "",
    aadharImage: "",
    panImage: "",
    DateOfJoining: "",
    qualification: "",
    experience: false,
    previousOrganization: "",
    designation: "",
    trainerDocuments: "",
  });

  const {trainerId} =useParams();
  
  useEffect(() =>{
        getUsers();
    },[]);

    function getUsers() {
    axios.get(`http://localhost/TriaRight-In/backend/createTrainer.php/user/create/${trainerId}`).then(function(response) {
        console.log(response.data);
        setTrainerData(response.data);
    });
}

  const Navigate = useNavigate(); 

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    // Handle checkbox values separately
    if (type === "checkbox") {
      setTrainerData({ ...trainerData, [name]: event.target.checked });
    } 
    //  if (type === "file") {
    //    setTrainerData({ ...trainerData, [name]: event.target.files[0] });
    // } 
    else {
      setTrainerData({ ...trainerData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(trainerData); 
    // You can perform your submit logic here
    axios.put(`http://localhost/TriaRight-In/backend/createTrainer.php/user/create/${trainerId}/edit`, trainerData)
    .then(function(response){
      if (response.data.status === 1) {
        alert('Success: ' + response.data.message);
        Navigate('/manage-trainer');
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
    <div className="create-trainer-container">
      <h2>Edit Trainer Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="trainerName">Trainer Name:</label>
          <input
            type="text"
            name="trainerName"
            id="trainerName"
            value={trainerData.trainerName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="personalEmail">Personal Email:</label>
          <input
            type="email"
            name="personalEmail"
            id="personalEmail"
            value={trainerData.personalEmail}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="personalPhone">Personal Phone Number:</label>
          <input
            type="number"
            name="phNumber"
            id="personalPhone"
            value={trainerData.phNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            name="Gender"
            id="gender"
            value={trainerData.Gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            name="DateOfBirth"
            id="dob"
            value={trainerData.DateOfBirth}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="aadharNumber">Aadhar Card Number:</label>
          <input
            type="text"
            name="aadharNumber"
            id="aadharNumber"
            value={trainerData.aadharNumber}
            onChange={handleChange}
            style={{minLength:"12"}}
          />
        </div>
       

        <div className="form-group">
          <label htmlFor="panNumber">PAN Card Number:</label>
          <input
            type="text"
            name="panNumber"
            id="panNumber"
            value={trainerData.panNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="aadharPhoto">Upload Aadhar Card (Photo):</label>
          <input
            type="file"
            name="aadharImage"
            id="aadharPhoto"
            onChange={handleChange}
           // value={trainerData.aadharImage}
            accept="image/*"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="panPhoto">Upload PAN Card (Photo):</label>
          <input
            type="file"
            name="panImage"
            id="panPhoto"
            onChange={handleChange}
            //value={trainerData.panImage}
            accept="image/*"
          />
        </div>

        <div className="form-group">
          <label htmlFor="doj">Date of joining:</label>
          <input
            type="date"
            name="DateOfJoining"
            id="doj"
            value={trainerData.DateOfJoining}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            name="qualification"
            id="qualification"
            value={trainerData.qualification}
            onChange={handleChange}
          />
        </div>
        {/* Checkbox for Experience */}
        <div className="form-group">
          <label>Do you have experience as a trainer?</label>
          <input
            type="checkbox"
            name="experience"
            id="experience"
            checked={trainerData.experience}
            onChange={handleChange}
          />
        </div>

        {trainerData.experience && (
          <div>
            {/* Form groups for experience-related fields */}
            <div className="form-group">
              <label htmlFor="prevOrgName">Previous Organization Name:</label>
              <input
                type="text"
                name="previousOrganization"
                id="prevOrgName"
                value={trainerData.previousOrganization}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="designation">Designation:</label>
              <input
                type="text"
                name="designation"
                id="designation"
                value={trainerData.designation}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="trainerDocuments">Upload Trainer Documents:</label>
              <input
                type="file"
                name="trainerDocuments"
                id="trainerDocuments"
               // value={trainerData.trainerDocuments}
                onChange={handleChange}
                accept=".pdf,.doc"
              />
            </div>
          </div>
        )}

        <div className="form-group">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTrainer;
