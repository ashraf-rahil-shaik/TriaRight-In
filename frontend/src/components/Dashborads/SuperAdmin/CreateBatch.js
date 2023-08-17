import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function CreateBatch(){

  const Navigate = useNavigate();

  //const[input, setInputs]=useState({})
  const [batchData, setBatchData] = useState({
    batchName: "",
    classDuration: "",
    courseId: "",
    courseName: "",
    trainerId: "",
    trainerName: "",
    batchStartingDate: "",
    batchEndingDate: "",
    sessionSlot:""
});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBatchData({...batchData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost/TriaRight-In/backend/createBatch.php/user/Submit', batchData)
    .then(function(response){
      if (response.data.status === 1) {
        alert('Success: ' + response.data.message);// You can perform your submit logic here
    Navigate('/manage-batch');
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
    <div className="create-Batch-container">
      <h2>Batch Creation</h2>
      <form onSubmit={handleSubmit}>      
        <div className="form-group">
          <label htmlFor="batchName">Batch Name:</label>
          <input
            type="text"
            name="batchName"
            id="batchName"
            value={batchData.batchName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="classDuration">Class Duration:</label>
          <input
            type="number"
            name="classDuration"
            id="classDuration"
            value={batchData.classDuration}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseId">Course Id:</label>
           <input
            type="text"
            name="courseId"
            id="courseId"
            value={batchData.courseId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            name="courseName"
            id="courseName"
            value={batchData.courseName}
            onChange={handleChange}
          /> 
        </div>
        <div className="form-group">
          <label htmlFor="trainerId">TrainerId:</label>
          <input 
            type="text"
            name="trainerId"
            id="trainerId"
            value={batchData.trainerId}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="trainerName">Trainer Name:</label>
          <input
            type="text"
            name="trainerName"
            id="traineriname"
            value={batchData.trainerName}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="batchStartingDate">Batch Starting Date:</label>
          <input
            type="date"
            name="batchStartingDate"
            id="batchStartingDate"
            value={batchData.batchStartingDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="batchEndingDate">Batch Ending Date:</label>
          <input
            type="date"
            name="batchEndingDate"
            id="batchEndingDate"
            value={batchData.batchEndingDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sessionSlot">Session Solt:</label>
          <input
            type="text"
            name="sessionSlot"
            id="sessionSlot"
            value={batchData.sessionSlot}
            onChange={handleChange}
          />
        </div>
               
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBatch;