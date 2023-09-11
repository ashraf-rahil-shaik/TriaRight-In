import React, { useState,useEffect } from "react";
import axios from "axios";

const CreateStudentWithoutPlacement = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [studentInfo, setStudentInfo] = useState({
    registerType:'',
    fullName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    dob: '',
    address: '',
    city: '',
    district:'',
    state: '',
    pinCode: '',
  });
  const [educationalDetails, setEducationalDetails] = useState({
    qualification: '',
    qualificationStatus: '',
    semester: '',
    qualificationIndustry: '',
    qualificationType:'',
    branchORstream:'',
    othersBranch:'',
    specialization:'',
    othersSpecialization:'',
    instituteName:'',
    cvFile:'',
  });
  const [essentials, setEssentials] = useState({
    password: '',
    confirmPassword: '',
    uName:'',
    accountType:'',
    paymentType:'',
    nameOnCertificate:'',
    studentRegNo:'',
    collegeName:'',
    industry:'',
    domain:'',
    course:'',
    duration:'',
    slots:'',
  });



 

  const [users , setUsers] = useState([]);
  const [users1,setUsers1] = useState([]);
  const [users2,setUsers2] = useState([]);
  useEffect(() =>{
    getUsers();
    getUsers1();
    getUsers2();
  }, []);
  
  function getUsers() {
    axios.get('http://localhost/TriaRight-In/backend/createCollege.php/user/create').then(function(response) {
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
    axios.get('http://localhost/TriaRight-In/backend/createBatch.php/user/create').then(function(response) {
        console.log(response.data);
        setUsers2(response.data);
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (currentStep) {
      case 1:
        setStudentInfo({
          ...studentInfo,
          [name]: value,
        });
        break;
      case 2:
        setEducationalDetails({
          ...educationalDetails,
          [name]: value,
        });
        break;
        case 3:
          setEssentials({
            ...essentials,
            [name]: value,
           
               });
        break;
      default:
        break;
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost/TriaRight-In/backend/createStudentWithoutPlacement.php/user/submit', {studentInfo: studentInfo,educationalDetails: educationalDetails,essentials: essentials})
      .then(function(response){
        if (response.data.status === 1) {
          alert('Success: ' + response.data.message);
          // Navigate('/manage-course');
        } else {
          alert('Error: ' + response.data.message);
        }
      })
      .catch(function (error) {
        console.error(error);
        alert('An error occurred while creating the record.');
      });
    console.log('Submitted Data:', {
      studentInfo,
      educationalDetails,
      essentials,
    });
  };


  const renderEducationForm = () => {
    return (
      <div>
        <h2>Educational Details</h2>
        <form>
          <label>
            Qualification:
            <select name="qualification" id="qualification" value={educationalDetails.qualification} onChange={handleChange}>
              <option value="">Select Qualification</option>
              <option value="Graduation">Graduation</option>
              <option value="Masters">Masters</option>
              <option value="PhD">PhD</option>
            </select>
          </label>
          <br />
          {educationalDetails.qualification && (
            <div>
              <label>
                Qualification Status:
                <select
                  name="qualificationStatus"
                  value={educationalDetails.qualificationStatus}
                  onChange={handleChange}
                >
                  <option value="">Select Status</option>
                  <option value="Pursuing">Pursuing</option>
                  <option value="Completed">Completed</option>
                </select>
              </label>
              <br />
              {educationalDetails.qualificationStatus === 'Pursuing' && (
                <div>
                  <label>
                    Semester:
                    <select name="semester" value={educationalDetails.semester} onChange={handleChange}>
                      <option value="">Select Semester</option>
                      {Array.from({ length: 8 }, (_, i) => (
                        <option key={i} value={i + 1}>
                          Sem {i + 1}
                        </option>
                      ))}
                    </select>
                  </label>
                  <br />
                </div>
              )}
               </div>
          )}
              <label>
                Industry:
                <select name="qualificationIndustry" id="qualificationIndustry" value={educationalDetails.qualificationIndustry} onChange={handleChange}>
                  <option value="">Select Industry</option>
                  <option value="IT">IT</option>
                  <option value="Non-IT">Non-IT</option>
                  <option value="Finance">Finance</option>
                  <option value="Management">Management</option>
                  <option value="Pharmaceutical">Pharmaceutical</option>
                </select>
              </label>
              <br />
              
                 {educationalDetails.qualification === 'Graduation' && (
                  <>
                   <label>
                qualificationType:
                  <select name="qualificationType" id="qualificationType" value={educationalDetails.qualificationType} onChange={handleChange}>
                    <option value="">Select qualification type</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="Degree">Degree</option>
                  </select>
                </label><br />
                  </>
                 )}
              
                
              
              <div>
              <label>
                    Branch/Stream
                  <select name="branchORstream" id="branchORstream" value={educationalDetails.branchORstream} onChange={handleChange}>
                  <option value="">Select branch/stream</option>
              {educationalDetails.qualificationType === 'B.Tech' && (
                <>
                    
                    <option value="Computer Science Engineering">Computer Science Engineering</option>
                    <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                    <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Others">Others</option>
                </>
              )}
              {educationalDetails.qualificationType === 'Degree' && (
                <>
                    <option value="B.Com">B.Com</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="BA">BA</option>
                    <option value="BBA">BBA</option>
                    <option value="Others">Others</option>
                    {/* Add more options for Degree */}
                </>
              )}
          {educationalDetails.qualification === 'Masters' && (
                <>
                    <option value="MBA">MBA</option>
                    <option value="MCA">MCA</option>
                    <option value="MSC">MSC</option>
                    <option value="Others">Others</option>
                    {/* Add more options for Degree */}
                </>
              )}
              </select>
</label>
              <br />
              </div>
            
              {educationalDetails.branchORstream === "Others" && (
                <label>
                  Others
                  <input type="text" name="othersBranch" id="othersBranch" value={educationalDetails.othersBranch} onChange={handleChange}></input>
                </label>
              )} 

                  {educationalDetails.branchORstream === "B.Com" && (
                    <>
                    <label>
                Specialization:
                <select name="specialization" id="specialization" value={educationalDetails.specialization} onChange={handleChange}>
                  <option value="">Select Specialization</option>
                        <option value="B.com general">B.com general</option>
                    <option value="Others">Others</option>
                        </select>
              </label>
              <br/></>
                  )}
                  {educationalDetails.branchORstream === "B.Sc" && (
                    <>
                    <label>
                Specialization:
                <select name="specialization" id="specialization" value={educationalDetails.specialization} onChange={handleChange}>
                  <option value="">Select Specialization</option>
                        <option value="MPCs">MPCs</option>
                        <option value="MECs">MECs</option>
                        <option value="MSCs">MSCs</option>
                        <option value="MEHT">MEHT</option>
                        <option value="BC">BC</option>
                        <option value="MPC">MPC</option>
                        <option value="MPE">MPE</option>
                        <option value="MBBT">MBBT</option>
                        <option value="CZBT">CZBT</option>
                        <option value="CBZ">CBZ</option>
                        <option value="MCCs">MCCs</option>
                        <option value="BZC">BZC</option>
                    <option value="Others">Others</option>
                        </select>
              </label>
              <br/> </>
                  )}
                  {educationalDetails.branchORstream === "BA" && (
                    <>
                    <label>
                Specialization:
                <select name="specialization" id="specialization" value={educationalDetails.specialization} onChange={handleChange}>
                  <option value="">Select Specialization</option>
                        <option value="HEB">HEB</option>
                        <option value="HBS">HBS</option>
                        <option value="THE">THE</option>
                        <option value="BBE">BBE</option>
                    <option value="Others">Others</option>
                        </select>
              </label>
              <br/></>
                  )}
                  {educationalDetails.branchORstream === "BBA" && (
                    <>
                    <label>
                    Specialization:
                    <select name="specialization" id="specialization" value={educationalDetails.specialization} onChange={handleChange}>
                      <option value="">Select Specialization</option>
                        <option value="B.com general">B.com general</option>
                    <option value="Others">Others</option>
                        </select>
              </label>
               <br/></>
                  )}
                  {educationalDetails.branchORstream === "MBA" && (
                    <>
                    <label>
                Specialization:
                <select name="specialization" id="specialization" value={educationalDetails.specialization} onChange={handleChange}>
                  <option value="">Select Specialization</option>
                        <option value="Human Resource Management">Human Resource Management</option>
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
                        <option value="BusinessAnalytics">BusinessAnalytics</option>
                        <option value="IT">IT</option>
                    <option value="Others">Others</option>
                        </select>
              </label>
              <br/></>
                  )}
               {educationalDetails.branchORstream === "MSC" && (
                    <>
                    <label>
                Specialization:
                <select name="specialization" id="specialization" value={educationalDetails.specialization} onChange={handleChange}>
                  <option value="">Select Specialization</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                        <option value="Chemistry">Chemistry</option>
                    <option value="Others">Others</option>
                        </select>
              </label>
              <br/></>
                  )}  
               
               {educationalDetails.specialization === "Others" && (
                <label>
                  Others
                  <input name="othersSpecialization" id="othersSpecialization" value={educationalDetails.othersSpecialization} onChange={handleChange}>

                  </input>
                </label>
               )}

              <label>
                Institute Name:
                <input
                  type="text"
                  name="instituteName"
                  id=""
                  value={educationalDetails.instituteName}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Upload CV:
                <input type="file" name="cvFile" id="cvFile" onChange={handleChange} />
              </label>
           
        </form>
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Continue</button>
      </div>
    );
  };
  
  
  return (
    <div className="create-trainer-container">
      <h1>Student Registration Form</h1>
      {currentStep === 1 && (
        <div>
          <h2>Student Personal Information</h2>
          <form>
            <label>
              registration Type:
              <select name="registerType" id="registerType" 
              value={studentInfo.registerType}
               onChange={handleChange}>
                <option value="">Select</option>
                <option value="Course">Course</option>
                <option value="Course with Internship">Course with Internship</option>
                <option value="Internship">Internship</option>
               </select>
            </label>
            <br />
            <label>
              Full Name:
              <input type="text" name="fullName" id="fullName" 
              value={studentInfo.fullName} onChange={handleChange} />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" id="email" 
               value={studentInfo.email} onChange={handleChange} />
            </label>
            <br />
            <label>
              Phone Number:
              <input type="number" name="phoneNumber" id="phoneNumber"
               value={studentInfo.phoneNumber} onChange={handleChange} />
            </label>
            <br />
            <label>
              Gender:
              <select  name="gender" value={studentInfo.gender} onChange={handleChange} >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
                </select>
            </label>
            <br />
            <label>
              Date of Birth (DOB):
              <input type="date" name="dob" value={studentInfo.dob} onChange={handleChange} />
            </label>
            <br />
            <label>
              Address:
              <input type="text" name="address" value={studentInfo.address} onChange={handleChange} />
            </label>
            <br />
            <label>
              City:
              <input type="text" name="city" value={studentInfo.city} onChange={handleChange} />
            </label>
            <br />
            <label>
              District:
              <input type="text" name="district" value={studentInfo.district} onChange={handleChange} />
            </label>
            <br />
            <label>
              State:
              <input type="text" name="state" value={studentInfo.state} onChange={handleChange} />
            </label>
            <br />
            <label>
              Pin Code:
              <input type="text" name="pinCode" value={studentInfo.pinCode} onChange={handleChange} />
            </label>
          </form>
          <button onClick={nextStep}>Continue</button>
        </div>
      )}

      {currentStep === 2 && renderEducationForm()}

      {currentStep === 3 && (
        <div>
          <h2>Essentials</h2>
          <form>
            <label>
              UserName:
              <input type="text" name="uName" id="uName" value={essentials.uName} onChange={handleChange}></input>
            </label>
            <br/>
            <label>
              Password:
              <input type="password" name="password" id="password" value={essentials.password} onChange={handleChange} />
            </label>
            <br />
            <label>
              Confirm Password:
              <input
                type="password"
                name="confirmPassword" id="confirmPassword"
                value={essentials.confirmPassword}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              AccountType
              <select name="accountType" id="accountType" value={essentials.accountType} onChange={handleChange} >
                <option value="">Select AccountType</option>
                <option value="Individual">Individual</option>
                <option value="College">College</option>
              </select>
            </label>
            <br/>
            {essentials.accountType === "Individual" && (
  <div>
    <label>
      PaymentType:
      <input
        type="text"
        name="paymentType"  
        id="paymentType"
        value={essentials.paymentType}
        onChange={handleChange}
        
      />
    </label>
    <br />
    <label> 
      Name On Certificate:
      <input type="text" name="nameOnCertificate" id="nameOnCertificate" value={essentials.nameOnCertificate} onChange={handleChange}  style={{textTransform:"uppercase"}}/>
    </label>
    <br />
  </div>
)}
              {essentials.accountType === "College" && (
  <div>
    <label>
      PaymentType:
      <input
        type="text"
        name="paymentType"  
        id="paymentType"
        value={essentials.paymentType}
        onChange={handleChange}
        
      />
    </label>
    <br />
    <label>
      Name On Certificate:
      <input type="text" name="nameOnCertificate" id="nameOnCertificate" value={essentials.nameOnCertificate} onChange={handleChange}  style={{textTransform:"uppercase"}}/>
    </label>
    <br />
             <label>
              College name
              <select name="collegeName" id="collegeName" value={essentials.collegeName} onChange={handleChange}>
                <option value="">Select</option>
            {Array.isArray(users) ? (
            users.map((user, key) => (
                <>
            <option  key={key} value={user.collegeName}>{user.collegeName}</option>
            </>
            ))) : (
                <>
                </>
            )}
              </select>
             </label>
             <br/>
             <label>
      Student RegNo:
      <input type="text" name="StudentRegNo" id="StudentRegNo" value={essentials.StudentRegNo} onChange={handleChange} />
    </label>
    <br />
            </div>
              )} 
            <label>
                Industry:
                <select name="industry" value={essentials.industry} onChange={handleChange}>
                  <option value="">Select Industry</option>
                  <option value="IT">IT</option>
                  <option value="Non-IT">Non-IT</option>
                  <option value="Finance">Finance</option>
                  <option value="Management">Management</option>
                  <option value="Pharmaceutical">Pharmaceutical</option>
                </select>
              </label>
              <br/>
              <div>
              <label>
                  domain
                 <select name="domain" value={essentials.domain} onChange={handleChange}>
                     <option value="">Select domain</option>
                     {Array.isArray(users1) && (
            users1.map((user, key) => (
              <>
              key={key}
              {essentials.industry === "IT" &&  user.Stream === "IT" && (
                <option value={user.course}>{user.course}</option>
              )}
              {essentials.industry === "Non-IT" && user.Stream ==="Non-IT" && (
                <option value={user.subStream}>{user.subStream}</option>
              )}
              {essentials.industry === "Pharmaceutical" && user.Stream === "Pharmaceutical" && (
                <option value={user.course}>{user.course}</option>
              )}
              {essentials.industry === "Management" && user.Stream === "Management" && (
                <option value={user.subStream}>{user.subStream}</option>
              )}
              {essentials.industry === "Finance" && user.Stream === "Finance" && (
                <option value={user.course}>{user.course}</option>
              )}
              </>
              ))
             )}
             </select>
             
                  </label>
                  <br />
       </div>
       {(essentials.industry === "Non-IT" || essentials.industry === "Management") ?
          <>
            <label>
               Course
            <select name="course" id="course" value={essentials.course} onChange={handleChange}>
              <option value="">Select</option>
            {Array.isArray(users1) && (
               users1.map((user, key) => (
              <>
              key={key}
              {essentials.course === user.subStream && (
                  <option value={user.course}>{user.course}</option>
              )}
              </>
            ))
            )}
            </select>
            </label>
            <br/>
            </>
            :
            <>
            </>
}
             <label>Duration
             <select name="duration" id="duration" value={essentials.duration} onChange={handleChange}>
              <option value="">Select</option>
              <option value="45 days">45 days</option>
              <option value="2 months">2 months</option>
              <option value="3 months">3 months</option>
              <option value="6 months">6 months</option>
             </select>
             </label>
             <br/>
      
             <label>Session Slot </label>
             <select name="slots" id="slots" value={essentials.slots} onChange={handleChange}>
              <option value="">Select</option>
              {Array.isArray(users2) && (
               users2.map((user, key) => (
              <>
              key={key}
              {(essentials.industry === "Non-IT" || essentials.industry === "Management") ? 
                 <>
                   {essentials.course === user.courseName && (
                  <option value={user.sessionSlot}>{user.sessionSlot}</option>
                  )}
                  </>
                  :
                  <>
                  {essentials.domain === user.courseName && (
                  <option value={user.sessionSlot}>{user.sessionSlot}</option>
                  )}
                  </>
              }
              </>
            ))
            )}
             </select>
             <br/>
             <br/>
           
          </form>
          <button onClick={prevStep}>Previous</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};
export default CreateStudentWithoutPlacement;