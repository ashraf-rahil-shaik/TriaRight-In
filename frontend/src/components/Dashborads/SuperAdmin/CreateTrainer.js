import React, { useState } from 'react'

const CreateTrainer = () =>  {
    const [hasExperience, setHasExperience] = useState  (false);
    
    const handleExperienceChange = () => {
      setHasExperience(!hasExperience);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform form submission logic here
    };
  
    return (
      <div >
        <h2>Create Trainer Form</h2>
        <form onSubmit={handleSubmit}>
          <label>ID:</label>
          <input type="text" name="id" required />
          <br />
  
          <label>Trainer Name:</label>
          <input type="text" name="trainerName" required />
          <br />
  
          <label>Personal Email:</label>
          <input type="email" name="personalEmail" required />
          <br />
  
          <label>Personal Phone Number:</label>
          <input type="tel" name="personalPhone" required />
          <br />
  
          <label>Gender:</label>
          <select name="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <br />
  
          <label>Date of Birth:</label>
          <input type="date" name="dob" required />
          <br />
  
          <label>Aadhar Card Number:</label>
          <input type="text" name="aadharNumber" required />
          <br />
  
          <label>PAN Card Number:</label>
          <input type="text" name="panNumber" required />
          <br />
  
          <label>Upload Aadhar Card (Photo):</label>
          <input type="file" name="aadharPhoto" accept="image/*" required />
          <br />
  
          <label>Upload PAN Card (Photo):</label>
          <input type="file" name="panPhoto" accept="image/*" required />
          <br />
  
          <label>Qualification:</label>
          <input type="text" name="qualification" required />
          <br />
  
          <label>Do you have experience as a trainer?</label>
          <input
            type="checkbox"
            checked={hasExperience}
            onChange={handleExperienceChange}
          />
          <br />
  
          {hasExperience && (
            <div>
              <label>Previous Organization Name:</label>
              <input type="text" name="prevOrgName" />
              <br />
  
              <label>Designation:</label>
              <input type="text" name="designation" />
              <br />
  
              <label>Upload Trainer Documents:</label>
              <input type="file" name="trainerDocuments" accept=".pdf,.doc" />
              <br />
            </div>
          )}
  
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };

export default CreateTrainer