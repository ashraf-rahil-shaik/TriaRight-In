import { useEffect, useState } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";

function Example(){

   //const Navigate = useNavigate();        

    const [inputs, setInputs] = useState({})

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const [users, setUsers] = useState([]);
    const [users1, setUsers1] = useState([]);
    useEffect(() =>{
        getUsers();
        getOnew();
    }, []);

    function getUsers() {
    axios.get('http://localhost/TriaRight-In/backend/createCollege.php/user/create').then(function(response) {
        console.log(response.data);
        setUsers(response.data);
    });
}
function getOnew() {
    axios.get('http://localhost/TriaRight-In/backend/createCompany.php/user/create').then(function(response) {
        console.log(response.data);
        setUsers1(response.data);
    });
}

const handleSubmit = (event) => {
    event.preventDefault();
     console.log(inputs.data);
}
    return (
        <div>
        <h1>Create Stream</h1>

        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="streamLocation">Stream Location:</label>
          <select
            id="streamLocation"
            name="streamLocation"
            value={inputs.streamLocation}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select</option>
            {Array.isArray(users) ? (
            users.map((user, key) => (
                <>
            <option key={key}  value={user.collegeName}>{user.collegeName}</option>
            </>
            ))) : (
                <>
                </>
            )}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="streamLocation1">Stream Location1:</label>
          <select
            id="streamLocation1"
            name="streamLocation1"
            value={inputs.streamLocation1}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select</option>
            {Array.isArray(users1) ? (
            users1.map((user, key) => (
                <>
            <option key={key}  value={user.companyId}>{user.companyId}</option>
            </>
            ))) : (
                <>
                </>
            )}
          </select>
        </div>
        <button type="submit" className="submit-button">Submit</button>
        </form>
        </div>
    )
}

export default Example;
