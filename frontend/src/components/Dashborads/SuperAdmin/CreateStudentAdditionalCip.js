import React, { useState } from "react";


const StudentAdditionalCip = () => {
  const [studentAdditionalCip, setStudentAdditionalCip] = useState({
    
    hobbies:"",
    interests:"",
    achievements:"",
    title1:"",
    title2:"",
    description1:"",
    description2:"",
    role1:"",
    role2:"",
    workExperience:"",

});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentAdditionalCip({...studentAdditionalCip, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(studentAdditionalCip.data); // You can perform your submit logic here
  };

  return (
    <div className="student-education-container">
      <h2>Additional Information</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="hobbies">Hobbies:</label>
          <input
            type="text"
            name="hobbies"
            id="hobbies"
            value={studentAdditionalCip.hobbies}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="interests">Interests:</label>
          <input
            type="text"
            name="interests"
            id="interests"
            value={studentAdditionalCip.interests}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="achievements">Achievements:</label>
          <input
            type="text"
            name="achievements"
            id="achievements"
            value={studentAdditionalCip.achievements}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
            <h4>Project-1</h4>
          <label htmlFor="title1">Title:</label>
          <input
            type="text"
            name="title1"
            id="title1"
            value={studentAdditionalCip.title1}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description1">Description:</label>
          <input
            type="text"
            name="description1"
            id="description1"
            value={studentAdditionalCip.description1}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role1">Role:</label>
          <input
            type="text"
            name="role1"
            id="role1"
            value={studentAdditionalCip.role1}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
            <h4>Project-2</h4>
          <label htmlFor="title2">Title:</label>
          <input
            type="text"
            name="title2"
            id="title2"
            value={studentAdditionalCip.title2}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description2">Description:</label>
          <input
            type="text"
            name="description2"
            id="description2"
            value={studentAdditionalCip.description2}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            name="role2"
            id="role2"
            value={studentAdditionalCip.role2}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="workExperience">Work Experience:</label>
          <input
            type="text"
            name="workExperience"
            id="workExperience"
            value={studentAdditionalCip.workExperience}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentAdditionalCip;