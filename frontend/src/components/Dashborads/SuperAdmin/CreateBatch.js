import { useState,useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function CreateBatch(){

  const Navigate = useNavigate();

  //const[input, setInputs]=useState({})
  const [batchData, setBatchData] = useState({
    batchName: "",
    classDuration: "",
    // courseId: "",
    courseName: "",
    // trainerId: "",
    trainerName: "",
    batchStartingDate: "",
    batchEndingDate: "",
    sessionSlot:""
});

const [users, setUsers] = useState([]);
const [users1 , setUsers1] = useState([]);
const[users2,setUsers2]=useState([]);
useEffect(() =>{
  getUsers();
  getUsers1();
  getUsers2();
}, []);

function getUsers() {
  axios.get('http://localhost/TriaRight-In/backend/createSlot.php/user/create').then(function(response) {
      console.log(response.data);
      setUsers(response.data);
  });
}

function getUsers1() {
  axios.get('http://localhost/TriaRight-In/backend/createCourse.php/user/create').then(function(response) {
      console.log(response.data);
      setUsers1(response.data);
  });
}
function getUsers2() {
  axios.get('http://localhost/TriaRight-In/backend/createTrainer.php/user/create').then(function(response) {
      console.log(response.data);
      setUsers2(response.data);
  });
}

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
            required
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
            required
            onChange={handleChange}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="courseId">Course Id:</label>
           <input
            type="text"
            name="courseId"
            id="courseId"
            value={batchData.courseId}
            required
            onChange={handleChange}
          />
  </div> */}
        <div className="form-group">
          <label htmlFor="courseName">course Name</label>
          <select
            id="courseName"
            name="courseName"
            value={batchData.courseName}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select</option>
            {Array.isArray(users1) ? (
            users1.map((user, key) => (
                <>
            <option  key={key} value={user.course}>{user.course}</option>
            </>
            ))) : (
                <>
                </>
            )}
          </select>
        </div>  
        {/* <div className="form-group">
          <label htmlFor="trainerId">TrainerId:</label>
          <input 
            type="text"
            name="trainerId"
            id="trainerId"
            value={batchData.trainerId}
            required
            onChange={handleChange}
            
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="trainerName">Trainer Name:</label>
          <select
            name="trainerName"
            id="traineriname"
            value={batchData.trainerName}
            required
            onChange={handleChange}>
              <option value="">Select</option>
              {Array.isArray(users2) ? (
            users2.map((user, key) => (
                <>
            <option  key={key} value={user.userName}>{user.userName}</option>
            </>
            ))) : (
                <>
                </>
            )}
            </select>
        </div>
        <div className="form-group">
          <label htmlFor="batchStartingDate">Batch Starting Date:</label>
          <input
            type="date"
            name="batchStartingDate"
            id="batchStartingDate"
            value={batchData.batchStartingDate}
            required
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
            required
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="sessionSlot">Session Slot:</label>
          <select
            id="sessionSlot"
            name="sessionSlot"
            value={batchData.sessionSlot}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select</option>
            {Array.isArray(users) ? (
            users.map((user, key) => (
                <>
            <option  key={key} value={`${user.startTime}-${user.endTime}`}>{`${user.startTime}-${user.endTime}`}</option>
            </>
            ))) : (
                <>
                </>
            )}
          </select>
        </div>  
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBatch;