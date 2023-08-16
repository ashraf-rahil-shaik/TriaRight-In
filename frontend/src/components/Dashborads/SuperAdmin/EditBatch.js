import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditBatch(){


   const Navigate = useNavigate();        

    const [batchData, setInputs] = useState([]);

    const {batchId} = useParams();
    useEffect(() => {
        getUser();  
    },[]);

    function getUser() {
        axios.get(`http://localhost/TriarightWeb/createBatch.php/user/${batchId}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost/TriarightWeb/createBatch.php/user/${batchId}/edit`, batchData)
        .then(function(response){
          if (response.data.status === 1) {
            alert('Success: ' + response.data.message);
            Navigate('/manage-batch');
          } else {
            alert('Error: ' + response.data.message);
          }
        })
        .catch(function (error) {
          console.error(error);
          alert('An error occurred while updating the record.');
        });
          
    }


    return (
        <div>
        <h1>Edit Batch</h1>
        <form onSubmit={handleSubmit}>
        {/* <div className="form-group">
          <label htmlFor="batchId">Batch Id:</label>
           <input
            type="text"
            name="batchId"
            id="batchId"
            value={batchData.batchId}
            onChange={handleChange}
          />
        </div> */}
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
            type="number"
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
          <label htmlFor="sessionSlot">Session Slot:</label>
          <input
            type="text"
            name="sessionSlot"
            id="sessionSlot"
            value={batchData.sessionSlot}
            onChange={handleChange}
          />
        </div>
               
        <button type="submit">Update</button>
      </form>
    </div>
   )
}

export default EditBatch;
