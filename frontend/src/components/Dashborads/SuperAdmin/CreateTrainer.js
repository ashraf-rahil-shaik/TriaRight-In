import React, { useState } from "react";


const CreateTrainer = () => {
  const [trainerData, setTrainerData] = useState({
    id: "",
    trainerName: "",
    personalEmail: "",
    personalPhone: "",
    gender: "male",
    dob: "",
    aadharNumber: "",
    panNumber: "",
    aadharPhoto: "",
    panPhoto: "",
    qualification: "",
    hasExperience: false,
    prevOrgName: "",
    designation: "",
    trainerDocuments: "",
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    // Handle checkbox values separately
    if (type === "checkbox") {
      setTrainerData({ ...trainerData, [name]: event.target.checked });
    } else {
      setTrainerData({ ...trainerData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(trainerData); // You can perform your submit logic here
  };

  return (
    <div className="create-trainer-container">
      <h2>Create Trainer Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            name="id"
            id="id"
            value={trainerData.id}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="trainerName">Trainer Name:</label>
          <input
            type="text"
            name="trainerName"
            id="trainerName"
            value={trainerData.trainerName}
            onChange={handleChange}
            required
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
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="personalPhone">Personal Phone Number:</label>
          <input
            type="number"
            name="personalPhone"
            id="personalPhone"
            value={trainerData.personalPhone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            value={trainerData.gender}
            onChange={handleChange}
            required
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
            name="dob"
            id="dob"
            value={trainerData.dob}
            onChange={handleChange}
            required
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
            required
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
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="aadharPhoto">Upload Aadhar Card (Photo):</label>
          <input
            type="file"
            name="aadharPhoto"
            id="aadharPhoto"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="panPhoto">Upload PAN Card (Photo):</label>
          <input
            type="file"
            name="panPhoto"
            id="panPhoto"
            onChange={handleChange}
            accept="image/*"
            required
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
            required
          />
        </div>
        {/* Checkbox for Experience */}
        <div className="form-group">
          <label>Do you have experience as a trainer?</label>
          <input
            type="checkbox"
            name="hasExperience"
            checked={trainerData.hasExperience}
            onChange={handleChange}
          />
        </div>

        {trainerData.hasExperience && (
          <div>
            {/* Form groups for experience-related fields */}
            <div className="form-group">
              <label htmlFor="prevOrgName">Previous Organization Name:</label>
              <input
                type="text"
                name="prevOrgName"
                id="prevOrgName"
                value={trainerData.prevOrgName}
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
                onChange={handleChange}
                accept=".pdf,.doc"
              />
            </div>
          </div>
        )}

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTrainer;
