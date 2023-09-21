import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const CreateMeetings = () => {
  const [meetingData, setMeetingData] = useState({
    dateOfTrainingLink:"",
    platform: "",
    meetingLink: "",
    

  });

  const Navigate = useNavigate(); 

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    // Handle checkbox values separately
    if (type === "checkbox") {
      setMeetingData({ ...meetingData, [name]: event.target.checked });
    } else {
      setMeetingData({ ...meetingData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(trainerData); 
    // You can perform your submit logic here
    axios.post('http://localhost/TriaRight-In/backend/createTrainer.php/user/create', meetingData)
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
      <h2>Create Meeting Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="dateOfTrainingLink">Date Of Training Link:</label>
          <input
            type="date"
            name="dateOfTrainingLink"
            id="dateOfTrainingLink"
            value={meetingData.dateOfTrainingLink}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="platform">Platform:</label>
          <select
            name="platform"
            id="platform"
            value={meetingData.platform}
            onChange={handleChange}
            required
          >
            <option value="gmeet">Gmeet</option>
            <option value="webex">Webex</option>
            <option value="microsoftTeams">Microsoft Teams</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="MeetingsLink">Meetings Link:</label>
          <input
            type="link"
            name="MeetingsLink"
            id="MeetingsLink"
            value={meetingData.MeetingsLink}
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

export default CreateMeetings;