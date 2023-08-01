import React, { useState } from "react";


const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    stream: "IT",
    duration: "",
    provider: "",
    type: "online",
    hours: "",
    courseDescription: "",
    topicsCovered: "",
    benefits: "",
    price: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(courseData); // You can perform your submit logic here
  };

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
            accept="image/*"
          />
        </div>
        <div className="form-group">
          <label htmlFor="stream">Stream:</label>
          <select
            name="stream"
            id="stream"
            value={courseData.stream}
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
            name="duration"
            id="duration"
            value={courseData.duration}
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
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            name="type"
            id="type"
            value={courseData.type}
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
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseDescription">Course Description:</label>
          <textarea
            name="courseDescription"
            id="courseDescription"
            value={courseData.courseDescription}
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
