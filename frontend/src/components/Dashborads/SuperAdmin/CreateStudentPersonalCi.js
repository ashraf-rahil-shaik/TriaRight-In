import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreateStudentPersonalCi = () => {
  const [studentDataCi, setStudentDataCi] = useState({
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

});
const Navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentDataCi({...studentDataCi, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost/TriaRight-In/backend/createStudentCi.php/user/create', studentDataCi)
    .then(function (response) {
      if (response.data.status === 1) {
        alert('Success: ' + response.data.message);
        Navigate('/create-studenteducationCi');
      } else {
        alert('Error: ' + response.data.message);
      }
    })
    .catch(function (error) {
      console.error(error);
      alert('An error occurred while creating the record.');
    });
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
            value={studentDataCi.studentName}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailId">Email ID:</label>
          <input
            type="text"
            name="emailId"
            id="emailId"
            value={studentDataCi.emailId}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone No:</label>
           <input
            type="number"
            name="phoneNo"
            id="phoneNo"
            value={studentDataCi.phoneNo}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="alternatePhoneNo">Alternate Phone No:</label>
           <input
            type="number"
            name="alternatePhoneNo"
            id="alternatePhoneNo"
            value={studentDataCi.alternatePhoneNo}
            required
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            value={studentDataCi.gender}
            onChange={handleChange}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date Of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            value={studentDataCi.dateOfBirth}
            required
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
          type="text"
            name="address"
            id="address"
            value={studentDataCi.address}
            required
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
            value={studentDataCi.city}
            required
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
            value={studentDataCi.district}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            name="state"
            id="state"
            value={studentDataCi.state}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="number"
            name="pincode"
            id="pincode"
            value={studentDataCi.pincode}
            required
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default CreateStudentPersonalCi;