import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ManageConsultant(){

    const [users, setUsers] = useState([]);
    useEffect(() =>{
        getUsers();
    }, []);

    function getUsers() {
    axios.get('http://localhost/TriaRight-In/backend/createConsultant.php/user/submit').then(function(response) {
        console.log(response.data);
        setUsers(response.data);
    });
}

const deleteRecord=(consultantId)=>{
  const result = window.confirm("Are you sure you want to permanently delete this record?");
  if(result){
    
    axios.delete(`http://localhost/TriaRight-In/backend/createConsultant.php/user/${consultantId}/delete`).then(function(response) {
       console.log(response.data);
       getUsers();
    
  });
}
}

// const deleteCollege = (collegeId) => {
//   axios.delete(`http://localhost/TriaRight-In/backend/createCollege.php/user/${collegeId}/delete`).then(function(response) {
//        console.log(response.data);
//        getUsers();
//   });
// }

    return (
        <div className="manage-college-container">
            <h1>Manage Consultant</h1>
            <table>
                <thead>
                    <tr>
                        <th>ConsultantId</th>
                        <th>Company Name</th>
                        <th>Company mailId</th>
                        <th>company PhoneNo</th>
                        <th>Company regType</th>
                        <th>Company Website</th>
                        <th>year Of establishment</th>
                        <th>Sub business Name</th>
                        <th>doYouHaveGST</th>
                        <th>companyGSTNo</th>
                        <th>uploadGSTDocument</th>
                        <th>doYouHavePan</th>
                        <th>companyPanNo</th>
                        <th>uploadPanDocument</th>
                        <th>company address</th>
                        <th>company city</th>
                        <th>company district</th>
                        <th>company state</th>
                        <th>company pincode</th>
                        <th>representative Name</th>
                        <th>designation</th>
                        <th>representativePhNo</th>
                        <th>personalMailId</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Industry</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(users) ? (
  users.map((user, key) => (
    <tr key={key}>
      <td>{user.consultantId }</td>
      <td>{user.companyName}</td>
      <td>{user.companyMailId}</td>
      <td>{user.companyPhoneNo}</td>
      <td>{user.companyRegistrationType}</td>
      <td>{user.companyWebsite}</td>
      <td>{user.yearOfEstablishment}</td>
      <td>{user.subBusinessName}</td>
      {  (user.doYouHaveGST == 1)?
      
      <>
    <td>Yes</td>
    <td>{user.companyGSTNo}</td>
    <td>{user.uploadGSTDocument}</td>
    </>
    :
    
    
      <>
      <td>No</td>
      <td>-</td>
    <td>-</td>
    </>
    
  } 
  {  (user.	doYouHavePan == 1)?
      
      <>
    <td>Yes</td>
    <td>{user.companyPanNo}</td>
    <td>{user.uploadPanDocument}</td>
    </>
    :
    
    
      <>
      <td>No</td>
      <td>-</td>
    <td>-</td>
    </>
    
  } 
      <td>{user.companyAddress}</td>
      <td>{user.companyCity}</td>
      <td>{user.companyDistrict}</td>
      <td>{user.companyState}</td>
      <td>{user.companyPincode}</td>
      <td>{user.representiveName}</td>
      <td>{user.designation}</td>
      <td>{user.representativePhNo}</td>
      <td>{user.personalMailId}</td>
      <td>{user.userName}</td>
<td>{user.password}</td>
      <td>
      {  (user.java == 1)?
      
      <>
    java,
    </>
    :
    <></>
    }
    {  (user.python == 1)?
      
      <>
    python,
    </>
    :
    <></>
    }
    { (user.webTechnology == 1)?
      
      <>
    web Technology,
    </>
    :
    <></>
    }
    { (user.cloudComputing == 1)?
      
      <>
    cloud Computing,
    </>
    :
    <></>
    }
    { (user.dataScience == 1)?
      
      <>
    data Science,
    </>
    :
    <></>
    }
    { (user.AIandML == 1)?
      
      <>
    artificial Intelligenc & Machine Learning,
    </>
    :
    <></>
    }
    { (user.testingTools == 1)?
      
      <>
    testing Tools,
    </>
    :
    <></>
    }
    { (user.deepLearning == 1)?
      
      <>
    deep Learning,
    </>
    :
    <></>
    }
    { (user.matLabECE == 1 || user.matLabEEE == 1)?
      
      <>
    MATLab,
    </>
    :
    <></>
    }
    { (user.matLabECE == 1 && user.matLabEEE == 1)?
      
    <>
         MATLab,
    </>
    :
    <></>
    }
    { (user.vlsiDesign == 1)?
      
      <>
    VLSI Design,
    </>
    :
    <></>
    }
    { (user.embeddedSystems == 1)?
      
      <>
    embeddedSystems,
    </>
    :
    <></>
    }
    { (user.visio == 1)?
      
      <>
    visio,
    </>
    :
    <></>
    }
    { (user.tSim == 1)?
      
      <>
    T-Sim,
    </>
    :
    <></>
    }
    { (user.autoCad == 1)?
      
      <>
    AutoCad,
    </>
    :
    <></>
    }
    { (user.sedPro == 1)?
      
      <>
    Sed Pro,
    </>
    :
    <></>
    }
    { (user.Payrolls == 1)?
      
      <>
    Payrolls,
    </>
    :
    <></>
    }
    { (user.hr == 1)?
      
      <>
    Hr,
    </>
    :
    <></>
    }
    { (user.usItRecruitment == 1)?
      
      <>
    Us IT Recruitment,
    </>
    :
    <></>
    }
    { (user.digitalMarketing == 1)?
      
      <>
    digital Marketing,
    </>
    :
    <></>
    }
    { (user.businessAnalysis == 1)?
      
      <>
    business Analysis,
    </>
    :
    <></>
    }
    { (user.medicalTransciption == 1)?
      
      <>
    medical Transciption,
    </>
    :
    <></>
    }
    { (user.medicalCoding == 1)?
      
      <>
    medical Coding,
    </>
    :
    <></>
    }{ (user.tallyandGst== 1)?
      
        <>
      tally and Gst,
      </>
      :
      <></>
      }{ (user.incomeTax == 1)?
      
        <>
      income Tax,
      </>
      :
      <></>
      }{ (user.usTaxation == 1)?
      
        <>
      us Taxation,
      </>
      :
      <></>
      }
      </td>
      <td className="button-container">
        <Link to={`/${user.consultantId}/edit8`} style={{ marginRight: "10px" }}>
         <button>Edit</button> 
        </Link>
        <button onClick={() => deleteRecord(user.consultantId)}>Delete</button>
      </td>
    </tr>
  ))
) : (
  <p>No users to display</p> // or any other appropriate message or component
)}

                </tbody>
            </table>
        </div>
    )
}