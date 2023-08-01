import React, { useState } from 'react';






const CreateStream = () => {
  const [streamLocation, setStreamLocation] = useState('');
  const [streamName, setStreamName] = useState('');
  return (
    <div className="form-container">
    <h1>Stream Form</h1>
    <form  className="form">
    <div className="form-group">
          <label htmlFor="streamLocation">Stream Location:</label>
          <select
            id="streamLocation"
            value={streamLocation}
            onChange={(e) => setStreamLocation(e.target.value)}
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
          value={streamName}
          onChange={(e) => setStreamName(e.target.value)}
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




 

