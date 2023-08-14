import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateCollege = () => {
  const [collegeData, setCollegeData] = useState({
    collegeName: "",
    collegeCode: "",
    address: "",
    district: "",
    state: "",
    pincode: "",
    collegePhone: "",
    collegeMail: "",
    representativeName: "",
    representativePhone: "",
    representativeEmail: "",
    streams: "",
    affiliatedUniversity: "",
    collegeWebsite: "",
    collegeUsername: "",
    // password: "",
    // confirmPassword: "",
  });

  const Navigate = useNavigate(); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCollegeData({ ...collegeData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost/TriarightWeb/createCollege/user/submit',collegeData).then(function(response){
    console.log(response.data);
           Navigate('/manage-college'); // You can perform your submit logic here
  });
}

  return (
    <div className="create-college-container">
      <h2>Create College Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="collegeName">College Name:</label>
          <input
            type="text"
            name="collegeName"
            id="collegeName"
            value={collegeData.collegeName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="collegeCode">College Code:</label>
          <input
            type="text"
            name="collegeCode"
            id="collegeCode"
            value={collegeData.collegeCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            name="address"
            id="address"
            value={collegeData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="district">District:</label>
          <input
            type="text"
            name="district"
            id="district"
            value={collegeData.district}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">state:</label>
          <input
            type="text"
            name="state"
            id="state"
            value={collegeData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">pincode:</label>
          <input
            type="number"
            name="pincode"
            id="pincode"
            value={collegeData.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="collegePhone">college phone number:</label>
          <input
            type="number"
            name="collegePhone"
            id="collegePhone"
            value={collegeData.collegePhone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="collegeMail">college mail id:</label>
          <input
            type="email"
            name="collegeMail"
            id="collegeMail"
            value={collegeData.collegeMail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="representativeName">College Representative Name:</label>
          <input
            type="text"
            name="representativeName"
            id="representativeName"
            value={collegeData.representativeName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="representativePhone">College Representative Phone:</label>
          <input
            type="number"
            name="representativePhone"
            id="representativePhone"
            value={collegeData.representativePhone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="representativeEmail">College Representative Email:</label>
          <input
            type="email"
            name="representativeEmail"
            id="representativeEmail"
            value={collegeData.representativeEmail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="streams">College Streams (separate by comma):</label>
          <input
            type="text"
            name="streams"
            id="streams"
            value={collegeData.streams}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="affiliatedUniversity">Affiliated University:</label>
          <input
            type="text"
            name="affiliatedUniversity"
            id="affiliatedUniversity"
            value={collegeData.affiliatedUniversity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="collegeWebsite">College Website (Optional):</label>
          <input
            type="text"
            name="collegeWebsite"
            id="collegeWebsite"
            value={collegeData.collegeWebsite}
            onChange={handleChange}
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="collegeUsername">College Username:</label>
          <input
            type="text"
            name="collegeUsername"
            id="collegeUsername"
            value={collegeData.collegeUsername}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={collegeData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="confirmPassword">Re-Enter Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={collegeData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div> */}

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCollege;
