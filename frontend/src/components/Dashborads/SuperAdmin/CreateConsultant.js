import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateConsultant = () => {
   const [consultantData, setConsultantData] = useState({
    companyName: "",
    companyEmailId: "",
    companyPhoneNumber: "",
    companyRegistrationType: "",
    companyWebsite: "",
    yearOfEstablishment: "",
    subBusinessName: "",
    doYouHaveGST:false,
    companyGSTNo:"",
    uploadGSTDocument:"",
    doYouHaveCompanyPan:false,
    companyPanNo:"",
    uploadPanDocument:"",
    address:"",
    city:"",
    district:"",
    state:"",
    pincode:"",
    representativeName:"",
    designation:"",
    representativePhoneNumber:"",
    personalMailId:"",
    java:false,
    python:false,
    webTechnology:false,
    couldComputing:false,
    dataScience:false,
    artificialIntelligenceandmachineLearning:false,
    testingTools:false,
    deepLearning:false,
    matLab:false,
    vlsiDesign:false,
    embeddedSystem:false,
    matLab1:false,
    visio:false,
    tSim:false,
    autoCad:false,
    sedPro:false,
    payRolls:false,
    hr:false,
    usItRecruitment:false,
    digitalMarketing:false,
    businessAnalysis:false,
    medicalTranscription:false,
    medicalCoding:false,
    tallyandgst:false,
    incomeTax:false,
    usTaxation:false,
  });

  const Navigate = useNavigate();      

  const handleChange = (event) => {
    const { name, value ,type} = event.target;

    if( type === "checkbox") {
      setConsultantData({...consultantData, [name]: event.target.checked });
    }else {
      setConsultantData({...consultantData, [name]:value });
    }
  };
    

     const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost/triaRight-In/backend/createConsultant.php/user/submit', consultantData)
      .then(function(response){
        if (response.data.status === 1) {
          alert('Success: ' + response.data.message);
          Navigate('/manage-consultant');
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
      <h2>Consultant Information</h2>
      <form onSubmit={handleSubmit}>      
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={consultantData.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyEmailId">Company Email ID:</label>
          <input
            type="text"
            name="companyEmailId"
            id="companyEmailId"
            value={consultantData.companyEmailId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyPhoneNumber">Company Phone Number:</label>
           <input
            type="number"
            name="companyPhoneNumber"
            id="companyPhoneNumber"
            value={consultantData.companyPhoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyRegistrationType"> Company Registration Type:</label>
          <select
            name="companyRegistrationType"
            id="companyRegistrationType"
            value={consultantData.companyRegistrationType}
            onChange={handleChange}
          > 
          <option value="">Select</option>
            <option value="soleProprietor">Sole Proprietor</option>
            <option value="limitedLiabilityPartnerShip">Limited Liability PartnerShip</option>
            <option value="onePersonCompany">One Person Company</option>
            <option value="partnerships">PartnerShips</option>
            <option value="privateLimitedCompany">Private Limited Company</option>
            <option value="publicLimitedCompany">Public Limited Company</option>
          </select>
        </div>
    
        <div className="form-group">
          <label htmlFor="companyWebsite">Company Website:</label>
          <input 
            type="text"
            name="companyWebsite"
            id="companyWebsite"
            value={consultantData.companyWebsite}
            onChange={handleChange}
            
          />
        </div>

        <div className="form-group">
          <label htmlFor="yearOfEstablishment">Year of Establishment:</label>
          <input
            type="date"
            name="yearOfEstablishment"
            id="yearOfEstablishment"
            value={consultantData.yearOfEstablishment}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subBusinessName">Sub-Business Name:</label>
          <input
            type="text"
            name="subBusinessName"
            id="subBusinessName"
            value={consultantData.subBusinessName}
            onChange={handleChange}
          />
        </div>
        {/* checkbox for GST*/}
        <div className="form-group">
          <label>Do you  have GST?</label>
          <input
            type="checkbox"
            name="doYouHaveGST"
            checked={consultantData.doYouHaveGST}
            onChange={handleChange}
          />
        </div>
        { consultantData.doYouHaveGST && (
          <div>
            <div className="form-group">
            <label htmlFor="companyGSTNo" >Company GST Number: *</label>
            <input
            type="text" 
            id="companyGSTNo" 
            name="companyGSTNo" 
            value={consultantData.companyGSTNo}
            onChange={handleChange}
            />
          </div>
            
          <div className="from-group">
           <label htmlFor="uploadGSTDocument">Upload GST *</label>
           <input
           type="file" 
           id="uploadGSTDocument" 
           name="uploadGSTDocument"
           //value={consultantData.uploadGSTDocument}
           onChange={handleChange}
           accept=".pdf,.doc"
           />
        </div>
      </div>
     )}

      <div className="form-group">
          <label>Do you have PAN?</label>
          <input
            type="checkbox"
            name="doYouHavePan"
            checked={consultantData.doYouHavePan}
            onChange={handleChange}
          />
        </div>
        { consultantData.hasPan && (
          <div>
          <div className="form-group">
            <label htmlFor="companyPanNo" >Company PAN Number *</label>
            <input
            type="text" 
            id="companyPanNo" 
            name="companyPanNo" 
            value={consultantData.companyPanNo}
            onChange={handleChange}
            />
            </div>
            <div className="from-group">
           <label htmlFor="uploadPanDocument">Upload PAN Document*</label>
           <input
           type="file" 
           id="uploadPanDocument" 
           name="uploadPanDocument"
           //value={consultantData.uploadPanDocument}
           onChange={handleChange}
           accept=".pdf,.doc"
           />
        </div>
      </div>
     )}
        
        
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={consultantData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            id="city"
            value={consultantData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="district">District:</label>
          <input
            type="text"
            name="district"
            id="district"
            value={consultantData.district}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            name="state"
            id="state"
            value={consultantData.state}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="number"
            name="pincode"
            id="pincode"
            value={consultantData.pincode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="representativeName">representiveName:</label>
          <input
            type="text"
            name="representativeName"
            id="representativeName"
            value={consultantData.representativeName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation:</label>
          <input
            type="text"
            name="designation"
            id="designation"
            value={consultantData.designation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="representativePhoneNumber">Representative Phone Number:</label>
          <input
            type="number"
            name="representativePhoneNumber"
            id="representativePhoneNumber"
            value={consultantData.representativePhoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="personalMailId">Personal Mail ID:</label>
          <input
            type="text"
            name="personalMailId"
            id="personalMailId"
            value={consultantData.personalMailId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <h3>Industry</h3>
          <h3>IT</h3>
          <label htmlFor="java">Java</label>
          <input 
          type="checkbox"
          name="java"
          id="java"
          value={consultantData.java}
          onChange={handleChange}
          />
         </div>
         <div className="form-group">
         <label htmlFor="python">Python</label>
          <input 
          type="checkbox"
          name="python"
          id="python"
          value={consultantData.python}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
         <label htmlFor="webTechnology">Web Technology</label>
          <input 
          type="checkbox"
          name="webTechnology"
          id="webTechnology"
          value={consultantData.webTechnology}
          onChange={handleChange}
          />
          </div>
          {/* <div className="form-group">
         <label htmlFor="c&c++">C&C++</label>
          <input 
          type="checkbox"
          name="c&c++"
          id="c&c++"
          value={consultantData.c&c++}
          onChange={handleChange}
          />
          </div> */}
          <div className="form-group">
         <label htmlFor="couldComputing">Could Computing</label>
          <input 
          type="checkbox"
          name="couldComputing"
          id="couldComputing"
          value={consultantData.couldComputing}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
         <label htmlFor="dataScience">Data Science</label>
          <input 
          type="checkbox"
          name="dataScience"
          id="dataScience"
          value={consultantData.dataScience}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
         <label htmlFor="artificialIntelligenceandMachineLearning
          "> Artificial Intelligence & Machine Learning</label>
          <input 
          type="checkbox"
          name="artificialIntelligenceandmachineLearning"
          id="artificialIntelligenceandmachineLearning"
          value={consultantData.artificialIntelligenceandmachineLearning}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
         <label htmlFor="testingTools">Testing Tools</label>
          <input 
          type="checkbox"
          name="testingTools"
          id="testingTools"
          value={consultantData.testingTools}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
         <label htmlFor="deepLearning">Deep Leraning</label>
          <input 
          type="checkbox"
          name="deepLearning"
          id="deepLearning"
          value={consultantData.deepLearning}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <h3>Non IT</h3>
          <h3>ECE</h3>
          <label htmlFor="matLab">MATLAB</label>
          <input 
          type="checkbox"
          name="matLab"
          id="matLab"
          value={consultantData.matLab}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <label htmlFor="vlsiDesign">VLSI Design</label>
          <input 
          type="checkbox"
          name="vlsiDesign"
          id="vlsiDesign"
          value={consultantData.vlsiDesign}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <label htmlFor="embeddedSystem">Embedded System</label>
          <input 
          type="checkbox"
          name="embeddedSystem"
          id="embeddedSystem"
          value={consultantData.embeddedSystem}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
            <h3>EEE</h3>
         <label htmlFor="matLab1">MATLAB</label>
          <input 
          type="checkbox"
          name="matLab1"
          id="matLab1"
          value={consultantData.matLab1}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <label htmlFor="visio">Visio</label>
          <input 
          type="checkbox"
          name="visio"
          id="visio"
          value={consultantData.visio}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <label htmlFor="tSim">T-Sim</label>
          <input 
          type="checkbox"
          name="tSim"
          id="tSim"
          value={consultantData.tSim}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <h3>Mechanical</h3>
          <label htmlFor="autoCad">AutoCAD</label>
          <input 
          type="checkbox"
          name="autoCad"
          id="autoCad"
          value={consultantData.autoCad}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <label htmlFor="sedPro">Sed Pro</label>
          <input 
          type="checkbox"
          name="sedPro"
          id="sedPro"
          value={consultantData.sedPro}
          onChange={handleChange}
          />
          </div>
          {/* <div className="form-group">
          <label htmlFor="3dMax">3d Max</label>
          <input 
          type="checkbox"
          name="3dMax"
          id="3dMax"
          value={consultantData.3dMax}
          onChange={handleChange}
          />
          </div> */}
          <div className="form-group">
            <h3>Managements</h3>
            <h3>HRM</h3>
          <label htmlFor="payRolls">Pay Rolls</label>
          <input 
          type="checkbox"
          name="payRolls"
          id="payRolls"
          value={consultantData.payRolls}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <label htmlFor="hr">HR</label>
          <input 
          type="checkbox"
          name="hr"
          id="hr"
          value={consultantData.hr}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <label htmlFor="usItRecruitment">US IT Recruitments</label>
          <input 
          type="checkbox"
          name="usItRecruitment"
          id="usItRecruitment"
          value={consultantData.usItRecruitment}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
            <h3>Marketing</h3>
          <label htmlFor="digitalMarketing">Digital Marketing</label>
          <input 
          type="checkbox"
          name="digitalMarketing"
          id="digitalMarketing"
          value={consultantData.digitalMarketing}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
            <h3>Business Analysis</h3>
          <label htmlFor="businessAnalysis">Business Analysis</label>
          <input 
          type="checkbox"
          name="businessAnalysis"
          id="businessAnalysis"
          value={consultantData.businessAnalysis}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
            <h3>Pharmaceutical</h3>
          <label htmlFor="medicalTranscription">Medical Transcription</label>
          <input 
          type="checkbox"
          name="medicalTranscription"
          id="medicalTranscription"
          value={consultantData.medicalTranscription}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <label htmlFor="medicalCoding">Medical Coding</label>
          <input 
          type="checkbox"
          name="medicalCoding"
          id="medicalCoding"
          value={consultantData.medicalCoding}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
            <h3>Finance & Accounting</h3>
          <label htmlFor="tallyandgst">Tally and GST</label>
          <input 
          type="checkbox"
          name="tallyandgst"
          id="tallyandgst"
          value={consultantData.tallyandgst}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <label htmlFor="incomeTax">Income Tax</label>
          <input 
          type="checkbox"
          name="incomeTax"
          id="incomeTax"
          value={consultantData.incomeTax}
          onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <label htmlFor="usTaxation">US Taxation</label>
          <input 
          type="checkbox"
          name="usTaxation"
          id="usTaxation"
          value={consultantData.usTaxation}
          onChange={handleChange}
          />
          </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateConsultant;