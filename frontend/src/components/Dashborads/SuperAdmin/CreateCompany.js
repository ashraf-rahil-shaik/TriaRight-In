import React, { useState } from "react";
 import axios from "axios";
 import {useNavigate} from "react-router-dom";

const CreateCompany = () => {
   const Navigate = useNavigate();

   const [companyData, setCompanyData] = useState({
    companyName: "",
    companyEmailId: "",
    companyPhoneNumber: "",
    companyRegistrationType: "",
    companyWebsite: "",
    industry: "",
    yearOfEstablishment: "",
    subBusinessName: "",
    doYouHaveGst: false,
    gstNo:"",
    gstFile:"",
    doYouHavePan:false,
    panNo:"",
    panFile:"",
    address:"",
    city:"",
    district:"",
    state:"",
    pincode:"",
    representativeName:"",
    designation:"",
    representativePhoneNumber:"",
    personalMailId:"",

  });
   
  const handleChange = (event) => {
    const {name,value,type}  = event.target; 
  

    if( type === "checkbox") {
      setCompanyData({...companyData, [name]: event.target.checked });
    }else {
      setCompanyData({...companyData, [name]:value });
    }
  };
   
  const handleSubmit = (event) => {
    event.preventDefault();
axios.post('http://localhost/TriaRight-In/backend/createCompany.php/user/create', companyData)
    .then(function (response) {
      if (response.data.status === 1) {
        alert('Success: ' + response.data.message);
        Navigate('/manage-company');
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
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyEmailId">Company Email ID:</label>
          <input
            type="email"
            name="companyEmailId"
            id="companyEmailId"
            value={companyData.companyEmailId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyPhoneNumber">Company Phone Number:</label>
           <input
            type="companyPhoneNumber"
            name="companyPhoneNumber"
            id="companyPhoneNumber"
            value={companyData.companyPhoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyRegistrationType"> Company Registration Type:</label>
          <select
            name="companyRegistrationType"
            id="companyRegistrationType"
            value={companyData.companyRegistrationType}
            onChange={handleChange}
            required
          > <option value="">Select</option>
            <option value="soleProprietor">Sole Proprietor</option>
            <option value="limitedLiabilityPartnerShip">Limited Liability PartnerShip</option>
            <option value="onePersonCompany">One Person Company</option>
            <option value="partnerships">PartnerShips</option>
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
            required
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="industry">Industry:</label>
          <select
            name="industry"
            id="industry"
            value={companyData.industry}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="IT">IT</option>
            <option value="Non-IT">Non-IT</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="management">Management</option>
            <option value="finance">Finance</option>
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
            required
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
            required
          />
        </div>
        {/* checkbox for GST*/}
        <div className="form-group">
          <label htmlFor="doYouHaveGst">Do You Have GST?</label>
          <input
            type="checkbox"
            name="doYouHaveGst"
            id="doYouHaveGst"
            checked={companyData.doYouHaveGst}
            onChange={handleChange}
          />
        </div>
        { companyData.doYouHaveGst && (
          <div>
            <div className="form-group">
            <label htmlFor="gstNo" >Company GST Number: </label>
            <input
            type="text" 
            name="gstNo" 
            id="gstNo" 
            value={companyData.gstNo}
            onChange={handleChange}
            />
          </div>
            
          <div className="from-group">
           <label htmlFor="gstFile">Upload GST </label>
           <input
           type="file" 
           name="gstFile"
           id="gstFile" 
           value={companyData.gstFile}
           onChange={handleChange}
           accept=".pdf,.doc"
           />
        </div>
      </div>
     )}

      <div className="form-group">
          <label htmlFor="doYouHavePan">Do you have Company PAN?</label>
          <input
            type="checkbox"
            name="doYouHavePan"
            id="doYouHavePan"
            checked={companyData.doYouHavePan}
            onChange={handleChange}
          />
        </div>
        { companyData.doYouHavePan && (
          <div>
          <div className="form-group">
            <label htmlFor="panNo" >Company PAN Number *</label>
            <input
            type="text"
            name="panNo" 
            id="panNo"  
            value={companyData.panNo}
            onChange={handleChange}
            />
            </div>
            <div className="from-group">
           <label htmlFor="panFile">Upload PAN Document*</label>
           <input
           type="file" 
           name="panFile"
           id="panFile" 
           value={companyData.panFile}
           onChange={handleChange}
           accept=".pdf,.doc"
           />
        </div>
      </div>
     )}
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={companyData.address}
            onChange={handleChange}
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="representativePhoneNumber">Representative Phone Number:</label>
          <input
            type="number"
            name="representativePhoneNumber"
            id="representativePhoneNumber"
            value={companyData.representativePhoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="personalMailId">Personal Mail ID:</label>
          <input
            type="email"
            name="personalMailId"
            id="personalMailId"
            value={companyData.personalMailId}
            onChange={handleChange}
            required
          />
        </div>
      
        <div className="form-group">
        <button type="submit">Submit</button>
      </div>
      </form>
    </div>
  );
};

export default CreateCompany;