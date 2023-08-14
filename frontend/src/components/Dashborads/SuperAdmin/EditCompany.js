import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams } from "react-router-dom"

function CreateCompany  ()  {
  const Navigate = useNavigate();

   const [companyData, setCompanyData] = useState({
    companyName: "",
    companyEmail: "",
    companyPhNo: "",
    companyRegType: "",
    companyWebsite: "",
    industry: "",
    yearOfEstablishment: "",
    subBusinessName: "",
    doYouHaveGst:"",
    doYouHavePan:"",
    address:"",
    city:"",
    district:"",
    state:"",
    pincode:"",
    representativeName:"",
    designation:"",
    representativePhoneNo:"",
    personalEmail:"",

  });

  const {companyId} =useParams();
  
  useEffect(() =>{
        getUsers();
    },[]);

    function getUsers() {
    axios.get(`http://localhost/TriarightWeb/createCompany.php/user/${companyId}`).then(function(response) {
        console.log(response.data);
        setCompanyData(response.data);
    });
}

  const handleChange = (event) => {
    const name  = event.target.name; 
    const value = event.target.value;
    setCompanyData(values => ({...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost/TriarightWeb/createCompany.php/user/${companyId}/edit`, companyData).then(function(response){
    console.log(response.data); // You can perform your submit logic here
     Navigate('/manage-company');
  });
}
  
  return (
    <div className="create-Comapny-container">
      <h2>Company Information</h2>
      <form onSubmit={handleSubmit}>      
        
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={companyData.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyEamilId">Company Email ID:</label>
          <input
            type="email"
            name="companyEmail"
            id="companyEmailId"
            value={companyData.companyEmail}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyPhoneNumber">Company Phone Number:</label>
           <input
            type="number"
            name="companyPhNo"
            id="companyPhoneNumber"
            value={companyData.companyPhNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyRegistrationType"> Company Registration Type:</label>
          <select
            name="companyRegType"
            id="companyRegistrationType"
            value={companyData.companyRegType}
            onChange={handleChange}
          > <option value="">Select</option>
            <option value="soleProprietor">Sole Proprietor</option>
            <option value="limitedLiabilityPartnerShip">Limited Liability Partnership</option>
            <option value="onePersonCompany">One Person Company</option>
            <option value="partnerships">Partnerships</option>
            <option value="privateLimitedCompany">Private Limited Company</option>
            <option value="publicLimitedCompany">Public Limited Company</option>
          </select>
        </div>
    
        <div className="form-group">
          <label htmlFor="companyWebsite">Company Website:</label>
          <input 
            type="text"
            name="companyWebsite"
            id="companyWebsite"
            value={companyData.companyWebsite}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="industry">Industry:</label>
          <select
            name="industry"
            id="industry"
            value={companyData.industry}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="IT">IT</option>
            <option value="Non-IT">Non-IT</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Management">Management</option>
            <option value="Finance">Finance</option>
          </select>
    
        </div>
        <div className="form-group">
          <label htmlFor="yearOfEstablishment">Year of Establishment:</label>
          <input
            type="date"
            name="yearOfEstablishment"
             id="yearOfEstablishment"
            value={companyData.yearOfEstablishment}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subBusinessName">Sub-Business Name:</label>
          <input
            type="text"
            name="subBusinessName"
            id="subBusinessName"
            value={companyData.subBusinessName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="doYouHaveGst">Do You Have GST:</label>
          <select
            name="doYouHaveGst"
            id="doYouHaveGst"
            value={companyData.doYouHaveGst}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="No">No</option>

          </select>
    
        </div>
        <div className="form-group">
          <label htmlFor="doYouHavePan">Do You Have PAN?:</label>
          <select
            name="doYouHavePan"
            id="doYouHavePan"
            value={companyData.doYouHavePan}
            onChange={handleChange}
            >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="No">No</option>

          </select>
        
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={companyData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            id="city"
            value={companyData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="district">District:</label>
          <input
            type="text"
            name="district"
            id="district"
            value={companyData.district}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            name="state"
            id="state"
            value={companyData.state}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="number"
            name="pincode"
            id="pincode"
            value={companyData.pincode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="representativeName">representiveName:</label>
          <input
            type="text"
            name="representativeName"
            id="representativeName"
            value={companyData.representativeName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation:</label>
          <input
            type="text"
            name="designation"
            id="designation"
            value={companyData.designation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="representativePhoneNumber">Representative Phone Number:</label>
          <input
            type="number"
            name="representativePhoneNo"
            id="representativePhoneNumber"
            value={companyData.representativePhoneNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="personalMailId">Personal Mail ID:</label>
          <input
            type="email"
            name="personalEmail"
            id="personalMailId"
            value={companyData.personalEmail}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateCompany;