import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateCollegeMentor = () => {
  const [mentorData, setMentorData] = useState({
    collegeName: "",
    mentorName: "",
    phoneNumber: "",
    designation: "",
    department: "",
    professionalMailId: "",
   

});
const Navigate = useNavigate(); 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMentorData({...mentorData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost/TriaRight-In/backend/createCollegeMentor.php/user/Submit', mentorData)
    .then(function(response){
      if (response.data.status === 1) {
        alert('Success: ' + response.data.message);// You can perform your submit logic here
    Navigate('/manage-collegementor');
  } else {
    alert('Error: ' + response.data.message);
  }
})
.catch(function (error) {
  console.error(error);
  alert('An error occurred while creating the record.');
});
    // console.log(mentorData); 
    // You can perform your submit logic here
  };

  return (
    <div className="create-Batch-container">
      <h2>CollegeMentor Creation</h2>
      <form onSubmit={handleSubmit}>
      
       
        <div className="form-group">
          <label htmlFor="collegeName">College Name:</label>
          <input
            type="text"
            name="collegeName"
            id="collegeName"
            value={mentorData.collegeName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mentorName">Mentor Name:</label>
          <input
            type="text"
            name="mentorName"
            id="mentorName"
            value={mentorData.mentorName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
           <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            value={mentorData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation:</label>
          <input
            type="text"
            name="designation"
            id="designation"
            value={mentorData.designation}
            onChange={handleChange}
          /> 
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            name="department"
            id="department"
            value={mentorData.department}
            onChange={handleChange}
            
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="professionalMailId">Professional MailId:</label>
          <input
            name="professionalMailId"
            id="professionalMailId"
            value={mentorData.professionalMailId}
            onChange={handleChange}
            //rows={4}
          />
        </div>
        
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateCollegeMentor;
