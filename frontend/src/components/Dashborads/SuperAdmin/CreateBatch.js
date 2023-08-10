import { useState } from "react";
import axios from "axios";
//import {useNavigate} from "react-router-dom";

const CreateBatch = () => {

  //const Navigate = useNavigate();

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
    sessionSlot:"",
    additionalinformation:"",
});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBatchData({...batchData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost/TriarightWeb/batch.php/user/Submit', batchData).then(function(response){
    console.log(batchData); // You can perform your submit logic here
   // Navigate('/batch');
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
          <label htmlFor="classduration">Class Duration:</label>
          <input
            type="text"
            name="classduration"
            id="classduration"
            value={batchData.classDuration}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseId">CourseId:</label>
           <input
            type="number"
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
            id="trainerName"
            value={batchData.trainerName}
            onChange={handleChange}
            //rows={4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="batchStartingDate">Batch StartingDate:</label>
          <input
          type="date"
            name="batchStartingDate"
            id="batchStartingDate"
            value={batchData.batchStartingDate}
            onChange={handleChange}
            //rows={4}
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
        <div className="form-group">
          <label htmlFor="additionalinformation">Additional Information:</label>
          <input
            type="text"
            name="additionalinformation"
            id="additionalinformation"
            value={batchData.additionalinformation}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBatch;
