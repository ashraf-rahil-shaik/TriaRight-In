import React, { useState,useEffect } from "react";
import axios from "axios";
import {useNavigate, useParams } from "react-router-dom";
function EditSlot(){

    const Navigate = useNavigate();        
 
     
     const [Slots, setSlots] = useState({
        startTime: "",
        endTime:"",
      });

      const {slotId} =useParams();
  
  useEffect(() =>{
        getUsers();
    },[]);

    function getUsers() {
    axios.get(`http://localhost/TriaRight-In/backend/createSlot.php/user/create/${slotId}`).then(function(response) {
        console.log(response.data);
        setSlots(response.data);
    });
}

     const handleChange = (event) =>{
         const name = event.target.name;
         const value = event.target.value;
         setSlots(values => ({...values, [name]: value}));
     }
      
     const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(trainerData); 
        // You can perform your submit logic here
        axios.put('http://localhost/TriaRight-In/backend/createSlot.php/user/create', Slots)
        .then(function(response){
          if (response.data.status === 1) {
            alert('Success: ' + response.data.message);
            Navigate('/manage-slot');
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
         <div className="create-course-container">
            <h1>Slot Creation</h1>
            <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
          <label htmlFor="time">Start time</label>
                    <input type="time"
                     name="startTime"
                     id="time"
                     value={Slots.startTime}
                     onChange={handleChange}
               />
        </div>
        <div className="form-group">
          <label htmlFor="time1">End time</label>
                    <input type="time"
                     name="endTime"
                     id="time1"
                     value={Slots.endTime}
                     onChange={handleChange}
               />
        </div>
        <button type="submit" className="submit-button">
          Create
        </button>
            </form>
         </div>
     )
 }
 // React.createElement("div", {
 //   className: "slideContent",
 //   style: {
 //     backgroundImage: `url(${slide.state_image})` }
 // }
 export default EditSlot;
 
