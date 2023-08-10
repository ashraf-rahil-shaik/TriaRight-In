import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams } from "react-router-dom"

function CreateCourse() {
  const [courseData, setCourseData] = useState([]);
  const {courseId} =useParams();
  
  useEffect(() =>{
        getUsers();
    },[]);

    function getUsers() {
    axios.get(`http://localhost/TriarightWeb/createCourse.php/user/${courseId}`).then(function(response) {
        console.log(response.data);
        setCourseData(response.data);
    });
}

  const Navigate = useNavigate();   

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setCourseData({...courseData, [name]: value });
//   };
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setCourseData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   }
  const handleChange = (event) => {
    const { name, value } = event.target;
        // if (type === "file") {
        //     setCourseData({ ...courseData, [name]: event.target.files[0] });
        //  } else {
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost/TriarightWeb/createCourse.php/user/${courseId}`, courseData).then(function(response){
            console.log(response.data);
           Navigate('/manage-course');
    //console.log(courseData); // You can perform your submit logic here
  });
}

  return (
    <div className="create-course-container">
      <h2>Edit Course</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            name="Images"
            id="image"
            onChange={handleChange}
            accept="image/*"
            //value={courseData.Images}
          />
        </div>
        <div className="form-group">
          <label htmlFor="stream">Stream:</label>
          <select
            name="Stream"
            id="stream"
            value={courseData.Stream}
            onChange={handleChange}
          >
            <option value="IT">IT</option>
            <option value="Non-IT">Non-IT</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="management">Management</option>
            <option value="finance">Finance</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (in months):</label>
          <input
            type="number"
            name="Duration"
            id="duration"
            value={courseData.Duration}
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
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            name="trainingType"
            id="type"
            value={courseData.trainingType}
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
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseDescription">Course Description:</label>
          <textarea
            name="coarseDescription"
            id="courseDescription"
            value={courseData.coarseDescription}
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default CreateCourse;