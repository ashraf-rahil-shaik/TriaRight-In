import React, { useState } from "react";


const CreateStudentPersonalForm = () => {
  const [studentData, setStudentData] = useState({
    studentName: "",
    emailId : "",
    phoneNo : "",
    gender: "",
    alternatePhoneNo: "",
    dateOfBirth: "",
    address: "",
    city: "",
    district: "",
    pincode:"",
    registrationType:"",

});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentData({...studentData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(studentData.data); // You can perform your submit logic here
  };

  return (
    <div className="create-student-container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            name="studentName"
            id="studentName"
            value={studentData.studentName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailId">Email ID:</label>
          <input
            type="text"
            name="emailId"
            id="emailId"
            value={studentData.emailId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone No:</label>
           <input
            type="number"
            name="phoneNo"
            id="phoneNo"
            value={studentData.phoneNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="alternatePhoneNo">Alternate Phone No:</label>
           <input
            type="number"
            name="alternatePhoneNo"
            id="alternatePhoneNo"
            value={studentData.alternatePhoneNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            name="gender"
            id="gender"
            value={studentData.gender}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date Of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            value={studentData.dateOfBirth}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
          type="text"
            name="address"
            id="address"
            value={studentData.address}
            onChange={handleChange}
            //rows={4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
          type="text"
            name="city"
            id="city"
            value={studentData.city}
            onChange={handleChange}
            //rows={4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="district">District:</label>
          <input
            type="text"
            name="district"
            id="district"
            value={studentData.district}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            name="state"
            id="state"
            value={studentData.state}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="number"
            name="pincode"
            id="pincode"
            value={studentData.pincode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="registrationType">Registration Type:</label>
          <select
            name="registrationType"
            id="registrationType"
            value={studentData.registrationType}
            onChange={handleChange}
          > <option value="">Select</option>
            <option value="course">Course</option>
            <option value="course with internship">Course With Internship</option>
            <option value="internship">Internship</option>
            <option value="course with internship & placement">Course with Internship & Placement Assistances</option>
            <option value="placement assistances">Placement Assistances</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default CreateStudentPersonalForm;