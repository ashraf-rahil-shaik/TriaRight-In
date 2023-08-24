import React, { useState } from "react";


const StudentTriarightEssentialsInt = () => {
  const [triarightEssentialsInt, setTriarightEssentialsInt] = useState({
    userName: "",
    password : "",
    confirmPassword: "",
    accountType:"",
    paymentType:"",
    
});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTriarightEssentialsInt({...triarightEssentialsInt, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (triarightEssentialsInt.password !== triarightEssentialsInt.confirmPassword) {
        alert("Password and Confirm Password do not match");
        return;
      }
    console.log(triarightEssentialsInt.data); // You can perform your submit logic here
  };

  return (
    <div className="create-student-container">
      <h2>Triaright Essentials</h2>
      <form onSubmit={handleSubmit}>
      
       
        <div className="form-group">
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={triarightEssentialsInt.userName}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={triarightEssentialsInt.password}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
           <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={triarightEssentialsInt.confirmPassword}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="accountType"> Account Type:</label>
          <select
            name="accountType"
            id="accountType"
            value={triarightEssentialsInt.accountType}
            required
            onChange={handleChange}
          > <option value="">Select</option>
            <option value="individual">Individual</option>
            <option value="college">College</option>
            </select>
        </div>
        <div className="form-group">
          <label htmlFor="paymentType"> Payment Type:</label>
          <select
            name="paymentType"
            id="paymentType"
            value={triarightEssentialsInt.paymentType}
            required
            onChange={handleChange}
          > <option value="">Select</option>
            <option value="individual">Individual</option>
            <option value="college">College</option>
            </select>
        </div>
    
        
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentTriarightEssentialsInt;