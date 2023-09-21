import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const AddTask = () => {
  const [taskData, setTaskData] = useState({
    nameOftheTask:"",
    allocatedStudentType: "",
    description: "",
    taskEndDate:"",
    sharedDocument:"",
    
  });

  const Navigate = useNavigate(); 

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    // Handle checkbox values separately
    if (type === "checkbox") {
      setTaskData({ ...taskData, [name]: event.target.checked });
    } else {
      setTaskData({ ...taskData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(trainerData); 
    // You can perform your submit logic here
    axios.post('http://localhost/TriaRight-In/backend/createTrainer.php/user/create', taskData)
    .then(function(response){
      if (response.data.status === 1) {
        alert('Success: ' + response.data.message);
        Navigate('/manage-meetings');
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
    <div className="create-trainer-container">
      <h2>Create Task Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nameOftheTask">Name of the Task:</label>
          <input
            type="text"
            name="nameOftheTask"
            id="nameOftheTask"
            value={taskData.nameOftheTask}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="allocatedStudentsType">Allocated Students Type:</label>
           <select
            name="allocatedStudentsType"
            id="allocatedStudentsType"
            value={taskData.allocatedStudentsType}
            onChange={handleChange}
            required
            >
            <option value="all">All</option>
            <option value="individual">Individual</option>
            
          </select>
        </div>
            

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            id="description"
            value={taskData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="taskEndDate">Task End Date:</label>
          <input
            type="date"
            name="taskEndDate"
            id="taskEndDate"
            value={taskData.taskEndDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sharedDocuments">Shared Documents:</label>
          <input
            type="file"
            name="sharedDocuments"
            id="sharedDocuments"
            value={taskData.sharedDocuments}
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

export default AddTask;