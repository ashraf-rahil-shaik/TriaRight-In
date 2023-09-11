import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    image:null,
    stream: "",
    subStream:"",
    jobRole1:"",
    jobRole2:"",
    jobRole3:"",
    course:"",
    duration: "",
    provider: "",
    type: "online",
    hours: "",
    courseDescription: "",
    topicsCovered: "",
    benefits: "",
    price: "",
  });
  const Navigate = useNavigate();   

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === 'file') {
      setCourseData({ ...courseData, [name]: event.target.files[0] });
    } else {
      setCourseData({ ...courseData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('image', courseData.image); // Append the image file
    formData.append('stream', courseData.stream);
    formData.append('subStream', courseData.subStream);
    formData.append('course', courseData.course);
    formData.append('jobRole1', courseData.jobRole1);
    formData.append('jobRole2', courseData.jobRole2);
    formData.append('jobRole3', courseData.jobRole3);
    formData.append('duration', courseData.duration);
    formData.append('provider', courseData.provider);
    formData.append('type', courseData.type);
    formData.append('hours', courseData.hours);
    formData.append('courseDescription', courseData.courseDescription);
    formData.append('topicsCovered', courseData.topicsCovered);
    formData.append('benefits', courseData.benefits);
    formData.append('price', courseData.price);
  
    axios.post('http://localhost/TriaRight-In/backend/createCourse.php/user/submit', formData)
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
        alert('An error occurred while creating the record.');
      });
  }
  

  return (
    <div className="create-course-container">
      <h2>Create Course</h2>
      <form onSubmit={handleSubmit}>
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
            name="stream"
            id="stream"
            value={courseData.stream}
            required
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="IT">IT</option>
            <option value="Non-IT">Non-IT</option>
            <option value="Pharmaceutical">Pharmaceutical</option>
            <option value="Management">Management</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
        
          {courseData.stream === "Non-IT" && (
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
            </div>
          )}
          
          {courseData.stream === "Management" && (
            <div className="form-group">
              <label htmlFor="subStream">Management:
            <select name="subStream" id="subStream" value={courseData.subStream} onChange={handleChange}>
              <option value="">Select</option>
              <option value="HRM">HRM</option>
              <option value="Marketing">Marketing</option>
              <option value="Business Analysis">Business Analysis</option>
            </select>
            </label>
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
          <label htmlFor="duration">Duration :</label>
          <select name="duration" id="duration" value={courseData.duration} onChange={handleChange}>
              <option value="">Select</option>
              <option value="45 days">45 days</option>
              <option value="2 months">2 months</option>
              <option value="3 months">3 months</option>
              <option value="6 months">6 months</option>
             </select>
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
            name="provider"
            id="provider"
            value={courseData.provider}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            name="type"
            id="type"
            value={courseData.type}
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
            name="hours"
            id="hours"
            value={courseData.hours}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseDescription">Course Description:</label>
          <textarea
            name="courseDescription"
            id="courseDescription"
            value={courseData.courseDescription}
            required
            onChange={handleChange}
            rows={4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="topicsCovered">Topics Covered:</label>
          <textarea
            name="topicsCovered"
            id="topicsCovered"
            value={courseData.topicsCovered}
            required
            onChange={handleChange}
            rows={4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="benefits">Benefits:</label>
          <textarea
            name="benefits"
            id="benefits"
            value={courseData.benefits}
            required
            onChange={handleChange}
            rows={4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price (optional):</label>
          <input
            type="number"
            name="price"
            id="price"
            value={courseData.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateCourse;

