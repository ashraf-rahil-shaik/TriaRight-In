import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const CreateSchedulde = () => {
  const [scheduldeData, setScheduldeData] = useState({
    dateOfSchedulde:"",
    scheduleTitle: "",
    classDuration: "",
    tasks:"",
    sharedDocuments: "",
    topicsTobeCovered: "",
    sessionStartTime: "",
    sessionEndTime: "",

  });

  const Navigate = useNavigate(); 

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    // Handle checkbox values separately
    if (type === "checkbox") {
      setScheduldeData({ ...scheduldeData, [name]: event.target.checked });
    } else {
      setScheduldeData({ ...scheduldeData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(trainerData); 
    // You can perform your submit logic here
    axios.post('http://localhost/TriaRight-In/backend/createTrainer.php/user/create', scheduldeData)
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
  alert('An error occurred while creating the record.');
});
}

  return (
    <div className="create-trainer-container">
      <h2>Create Schedudle Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="dateOfSchedudle">Date Of Schedudle:</label>
          <input
            type="date"
            name="dateOfSchedudle"
            id="dateOfSchedudle"
            value={scheduldeData.dateOfSchedudle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="schedudleTitle">Schedudle Title:</label>
          <input
            type="text"
            name="scheduleTitle"
            id="scheduleTitle"
            value={scheduldeData.scheduleTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="classDuration">Class Duration:</label>
          <input
            type="number"
            name="classDuration"
            id="classDuration"
            value={scheduldeData.classDuration}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tasks">Tasks:</label>
          <input
          type="text"
            name="tasks"
            id="tasks"
            value={scheduldeData.tasks}
            onChange={handleChange}
            required
          
          />
          
        </div>

        <div className="form-group">
          <label htmlFor="sharedDocuments">Shared Documents:</label>
          <input
            type="file"
            name="sharedDocuments"
            id="sharedDocuments"
            value={scheduldeData.sharedDocuments}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="topicsTobeCovered">Topics To be Covered:</label>
          <input
            type="text"
            name="topicsTobeCovered"
            id="topicsTobeCovered"
            value={scheduldeData.topicsTobeCovered}
            onChange={handleChange}
          
            required
          />
        </div>
       

        <div className="form-group">
          <label htmlFor="sessionStartTime">Session Start Time:</label>
          <input
            type="time"
            name="sessionStartTime"
            id="sessionStartTime"
            value={scheduldeData.sessionStartTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="sessionEndTime">Session End Time:</label>
          <input
            type="time"
            name="sessionEndTime"
            id="sessionEndTime"
            value={scheduldeData.sessionEndTime}
            onChange={handleChange}
            
            required
          />
          
           <div className="form-group">
          <button type="submit">Submit</button>
        </div>
        </div>
      </form>
    </div>    

  );
};

export default CreateSchedulde;