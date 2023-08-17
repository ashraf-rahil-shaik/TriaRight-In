import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const CreateStream = () => {
  const [streamData, setStreamData] = useState({
    streamLocation: "",
    streamName: "",
  });
  //const [alertMessage, setAlertMessage] = useState('');
const Navigate = useNavigate();     
  //const [submittedData, setSubmittedData] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setStreamData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
//   //   axios.post('http://localhost/TriarightWeb/createStream.php/user/create', streamData).then(function(response){
//   //           //console.log(response.data);
//   //          Navigate('/manage-stream');
//   //  // setSubmittedData(streamData);
//   //   //console.log(submittedData);
//   // });
//   axios.post('http://localhost/TriarightWeb/createStream.php/user/create', streamData).then(function(response){
//     alert(response.data);
//          Navigate('/manage-stream');
//   // setSubmittedData(streamData);
//   //   //console.log(submittedData);
//  });
axios.post('http://localhost/TriarightWeb/createStream.php/user/create', streamData)
    .then(function (response) {
      if (response.data.status === 1) {
        alert('Success: ' + response.data.message);
        Navigate('/manage-stream');
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
    <div className="form-container">
      <h1>Stream Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="streamLocation">Stream Location:</label>
          <select
            id="streamLocation"
            name="streamLocation"
            value={streamData.streamLocation}
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
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateStream;
