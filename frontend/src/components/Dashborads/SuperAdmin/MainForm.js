import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

  function RegMainForm(){
    const[register,setRegister]=useState({
        regAs:'',
        regType:'',
    });
    const Navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRegister({...register, [name]: value });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        {register.regType === "program without placement" && (
            Navigate('/create-studentwithoutPlacement')
       )}
       {register.regType === "program with placement" && (
        Navigate('/create-studentwithPlacement')
   )}
      }
  return(
    <div className="create-Batch-container">
        <h1>Registration form</h1>
        <form onSubmit={handleSubmit}>
            <label>register as
            <select name="regAs" id="regAs" value={register.regAs} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Student">Student</option>
                <option value="Trainer">Trainer</option>
                <option value="Employee">Employee</option>
                <option value="College">College</option>
                <option value="Consultant">Consultant</option>
            </select>
            </label>
            <br/>
            {register.regAs === "Student" && (
                <>
                <label>program type
                <select name="regType" id="regType" value={register.regType} onChange={handleChange}>
                    <option value="">Select</option>
                <option value="program with placement">program with placement</option>
                <option value="program without placement">program without placement</option>
                </select>
                </label>
                <br/>
                </>
            )}
            <button >Submit</button>
        </form>
    </div>
  )
}
export default RegMainForm;