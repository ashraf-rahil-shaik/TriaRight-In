import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams } from "react-router-dom"
function EditStream(){
  const [streamData, setStreamData] = useState({
    streamLocation: "",
    streamName: "",
  })
  const {streamId} =useParams();
  
  useEffect(() =>{
        getUsers();
    },[]);

    function getUsers() {
    axios.get(`http://localhost/TriaRight-In/backend/createStream.php/user/create/${streamId}`).then(function(response) {
        console.log(response.data);
        setStreamData(response.data);
    });
}
const Navigate = useNavigate();     
  //const [submittedData, setSubmittedData] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setStreamData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost/TriaRight-In/backend/createStream.php/user/create/${streamId}/edit`, streamData)
    .then(function(response){
      if (response.data.status === 1) {
        alert('Success: ' + response.data.message);
        Navigate('/manage-stream');
      } else {
        alert('Error: ' + response.data.message);
      }
    })
    .catch(function (error) {
      console.error(error);
      alert('An error occurred while updating the record.');
    });
          
   //setSubmittedData(streamData);
    //console.log(submittedData);
}

  return (
    <div className="form-container">
      <h1>Edit Stream</h1>
      <form  className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="streamLocation">Stream Location:</label>
          <select
            id="streamLocation"
            name="streamLocation"
            value={streamData.streamLocation}
            //value={streamDat.name}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select</option>
            <option value="course">Course</option>
            <option value="course-internship">Course & Internship</option>
            <option value="course-internship-placement">Course, Internship & Placement Assistance</option>
            <option value="internship">Internship</option>
            <option value="placement-assistance">Placement Assistance</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="streamName">Stream Name:</label>
          <input
            type="text"
            id="streamName"
            name="streamName"
            value={streamData.streamName}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditStream;
