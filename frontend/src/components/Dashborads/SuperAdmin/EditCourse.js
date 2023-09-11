import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams } from "react-router-dom"

const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    image:null,
    Stream: "IT",
    subStream:'',
    course:"",
    jobRole1:"",
    jobRole2:"",
    jobRole3:"",
    Duration: "",
    Providers: "",
    trainingType: "online",
    Hours1: "",
    coarseDescription: "",
    TopicsCovered: "",
    Benefits: "",
    Price: "",
  });
  const Navigate = useNavigate();  

  const {courseId} =useParams();

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === 'file') {
      setCourseData({ ...courseData, [name]: event.target.files[0] });
    } else {
      setCourseData({ ...courseData, [name]: value });
    }
  };

  useEffect(() =>{
    getUsers();
},[]);

function getUsers() {
axios.get(`http://localhost/TriaRight-In/backend/createCourse.php/user/create/${courseId}`).then(function(response) {
    console.log(response.data);
    setCourseData(response.data);
});
}

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('image', courseData.image); // Append the image file
    formData.append('Stream', courseData.Stream);
    formData.append('subStream', courseData.subStream);
    formData.append('course', courseData.course);
    formData.append('jobRole1', courseData.jobRole1);
    formData.append('jobRole2', courseData.jobRole2);
    formData.append('jobRole3', courseData.jobRole3);
    formData.append('Duration', courseData.Duration);
    formData.append('Providers', courseData.Providers);
    formData.append('trainingType', courseData.trainingType);
    formData.append('Hours1', courseData.Hours1);
    formData.append('coarseDescription', courseData.coarseDescription);
    formData.append('TopicsCovered', courseData.TopicsCovered);
    formData.append('Benefits', courseData.Benefits);
    formData.append('Price', courseData.Price);
  
    axios.put(`http://localhost/TriaRight-In/backend/createCourse.php/user/create/${courseId}/edit`, formData)
    .then(function(response){
      if (response.data.status === 1) {
        alert('Success: ' + response.data.message);
        Navigate('/manage-course');
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
    <div className="create-course-container">
      <h2>Create Course</h2>
      <form onSubmit={handleSubmit} enctype = "multipart/form-data">
      <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
            required
            accept="image/*"
            //value={courseData.image}
          />
        </div>
        <div className="form-group">
          <label htmlFor="stream">Stream:</label>
          <select
            name="Stream"
            id="stream"
            value={courseData.Stream}
            required
            onChange={handleChange}
          >
            <option value="IT">IT</option>
            <option value="Non-IT">Non-IT</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Management">Management</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
        {courseData.Stream === "Non-IT" && (
            <div className="form-group">
              <label htmlFor="subStream">Non-IT:
            <select name="subStream" id="subStream" value={courseData.subStream} onChange={handleChange}>
              <option value="">Select</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
            </select>
            </label>
            <br />
            </div>
          )}
          {courseData.Stream === "Pharmaceutical" && (
            <div className="form-group">
              <label htmlFor="subStream">Pharmaceutical:
            <select name="subStream" id="subStream" value={courseData.subStream} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Medical transciption">Medical transciption</option>
              <option value="Medical Coding">Medical transciption</option>
            </select>
            </label>
            <br />
            </div>
          )}
          {courseData.Stream === "Management" && (
            <div className="form-group">
              <label htmlFor="subStream">Management:
            <select name="subStream" id="subStream" value={courseData.subStream} onChange={handleChange}>
              <option value="">Select</option>
              <option value="HRM">HRM</option>
              <option value="Marketing">Marketing</option>
              <option value="Business Analysis">Business Analysis</option>
            </select>
            </label>
            <br />
            </div>
          )}
        <div className="form-group">
        <label htmlFor="course">Course:</label>
          <input
            type="text"
            name="course"
            id="course"
            value={courseData.course}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (in months):</label>
          <input
            type="number"
            name="Duration"
            id="duration"
            value={courseData.Duration}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobRole1">Job role 1:</label>
          <input
            type="text"
            name="jobRole1"
            id="jobRole1"
            value={courseData.jobRole1}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobRole2">Job role 2:</label>
          <input
            type="text"
            name="jobRole2"
            id="jobRole2"
            value={courseData.jobRole2}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobRole3">Job role 3:</label>
          <input
            type="text"
            name="jobRole3"
            id="jobRole3"
            value={courseData.jobRole3}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="provider">Provider:</label>
          <input
            type="text"
            name="Providers"
            id="provider"
            value={courseData.Providers}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            name="trainingType"
            id="type"
            value={courseData.trainingType}
            required
            onChange={handleChange}
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="hours">Hours:</label>
          <input
            type="number"
            name="Hours1"
            id="hours"
            value={courseData.Hours1}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseDescription">Course Description:</label>
          <textarea
            name="coarseDescription"
            id="courseDescription"
            value={courseData.coarseDescription}
            required
            onChange={handleChange}
            rows={4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="topicsCovered">Topics Covered:</label>
          <textarea
            name="TopicsCovered"
            id="topicsCovered"
            value={courseData.TopicsCovered}
            required
            onChange={handleChange}
            rows={4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="benefits">Benefits:</label>
          <textarea
            name="Benefits"
            id="benefits"
            value={courseData.Benefits}
            required
            onChange={handleChange}
            rows={4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price (optional):</label>
          <input
            type="number"
            name="Price"
            id="price"
            value={courseData.Price}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateCourse;

