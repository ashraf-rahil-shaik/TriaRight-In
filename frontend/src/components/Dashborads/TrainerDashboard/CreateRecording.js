import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const CreateRecording = () => {
  const [recordingData, setRecordingData] = useState({
    recordTopicName:"",
    dateOfUpload: "",
    drivingLink: "",
    

  });

  const Navigate = useNavigate(); 

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    // Handle checkbox values separately
    if (type === "checkbox") {
      setRecordingData({ ...recordingData, [name]: event.target.checked });
    } else {
      setRecordingData({ ...recordingData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(trainerData); 
    // You can perform your submit logic here
    axios.post('http://localhost/TriaRight-In/backend/createTrainer.php/user/create', recordingData)
    .then(function(response){
      if (response.data.status === 1) {
        alert('Success: ' + response.data.message);
        Navigate('/manage-meetings');
  } else {
    alert('Error: ' + response.data.message);
  }
})
.catch(function (error) {
  console.error(error);
  alert('An error occurred while creating the record.');
});
}

  return (
    <div className="create-trainer-container">
      <h2>Create Recordings Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="recordTopicName">Record Topic Name:</label>
          <input
            type="text"
            name="recordTopicName"
            id="recordTopicName"
            value={recordingData.recordTopicName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateOfUpload">Date Of Upload:</label>
           <input
          type="date"
            name="dateOfUpload"
            id="dateOfUpload"
            value={recordingData.dateOfUpload}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="drivingLink">Driving Link:</label>
          <input
            type="link"
            name="drivingLink"
            id="drivingLink"
            value={recordingData.drivingLink}
            onChange={handleChange}
            required
          />
        </div>


          
           <div className="form-group">
          <button type="submit">Submit</button>
        </div>
        
      </form>
    </div>    

  );
};

export default CreateRecording;
