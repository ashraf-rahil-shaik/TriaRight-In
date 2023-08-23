import React, { useState } from "react";


const StudentEducationCi = () => {
  const [studentEducationCi, setStudentEducationCi] = useState({
    qualification: "",
    industry : "",
    branch : "",
    group: "",
    collegeName: "",
    uploadCv: "",
    

});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentEducationCi({...studentEducationCi, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(studentEducationCi.data); // You can perform your submit logic here
  };

  return (
    <div className="student-education-container">
      <h2>Student Educational Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="qualification">Qualification:</label>
          <select
            name="qualification"
            id="qualification"
            value={studentEducationCi.qualification}
            required
            onChange={handleChange}
          > <option value="">Select</option>
            <option value="ug">UG</option>
            <option value="Graduation">Graduation</option>
            <option value="Masters">Masters</option>
            <option value="phD">PhD</option>
            
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="industry">Industry:</label>
          <select
            name="industry"
            id="inndustry"
            value={studentEducationCi.industry}
            required
            onChange={handleChange}
          > <option value="">Select</option>
            <option value="IT">IT</option>
            <option value="Non IT">Non IT</option>
            <option value="management">Management</option>
            <option value="pharmaceutical">Pharmaceutical</option>
            <option value="finance & accounting">Finance & Accounting</option>
            <option value="others">Others</option>
            
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="branch/stream">Branch/Stream:</label>
          <input
            type="text"
            name="branch/stream"
            id="branch/stream"
            value={studentEducationCi.Stream}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="group">Group:</label>
          <input
            type="text"
            name="group"
            id="group"
            value={studentEducationCi.group}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="collegeName">College Name:</label>
          <input
            type="text"
            name="collegeName"
            id="collegeName"
            value={studentEducationCi.institutionname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Upload CV:</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={handleChange}
            accept="file/*"
          />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentEducationCi;