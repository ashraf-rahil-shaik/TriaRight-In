
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CustomModal from "./modal";

 // Adjust the path accordingly

const CreateStream = () => {
  const [streamData, setStreamData] = useState({
    streamLocation: "",
    streamName: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
  });

  const Navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStreamData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost/TriaRight-In/backend/createStream.php/user/create", streamData)
      .then(function (response) {
        if (response.data.status === 1) {
          setModalContent({
            title: "Success",
            message: response.data.message,
          });
          setIsModalOpen(true);
          // Navigate("/manage-stream"); 
        } else {
          setModalContent({
            title: "Error",
            message: response.data.message,
          });
          setIsModalOpen(true);
        }
      })
      .catch(function (error) {
        console.error(error);
        setModalContent({
          title: "Error",
          message: "An error occurred while creating the record.",
        });
        setIsModalOpen(true);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);

  };

  return (
    <div className="form-container">
      <h1>Stream Form</h1>
      <form onSubmit={handleSubmit} className="form">
        
      <div className="form-group">
           <label htmlFor="streamLocation">Stream Location:</label>
         <select
            id="streamLocation"
            name="streamLocation"
            value={streamData.streamLocation}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select</option>
            <option value="course">Course</option>
            <option value="course-internship">Course & Internship</option>
            <option value="course-internship-placement">Course, Internship & Placement Assistance</option>
            <option value="internship">Internship</option>
            <option value="placement-assistance">Placement Assistance</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="streamName">Stream Name:</label>
          <input
            type="text"
            id="streamName"
            name="streamName"
            value={streamData.streamName}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">
          Create
        </button>
      </form>

      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        message={modalContent.message}
      />
    </div>
  );
};

export default CreateStream;
