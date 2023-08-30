
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteModal from "./deleteModal";
 // Adjust the path accordingly

export default function ManageCourse() {
  const [users, setUsers] = useState([]);
  const [deleteCourseId, setDeleteCourseId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get('http://localhost/TriaRight-In/backend/createCourse.php/user/submit').then(function(response) {
      console.log(response.data);
      setUsers(response.data);
    });
  } 
  
  const deleteRecord = (courseId) => {
    setDeleteCourseId(courseId);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (deleteCourseId) {
      axios.delete(`http://localhost/TriaRight-In/backend/createCourse.php/user/${deleteCourseId}/delete`).then(function(response) {
        console.log(response.data);
        getUsers();
      });
    }
    setDeleteCourseId(null);
    setIsDeleteModalOpen(false);
  };

  const closeDeleteModal = () => {
    setDeleteCourseId(null);
    setIsDeleteModalOpen(false);
  };

  return (
    <div>
      <h1>Manage Course</h1>
      <div className="course-container">
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user, key) => (
            <div className="course-card" key={key}>
             <img
                src={`http://localhost/TriaRight-In/backend/CoursesImages/${user.Images}`}
                alt={`Course ${user.Images} Image`}
              />
              <div className="course-details">
                <h2>{user.Stream}</h2>
                <p>Duration: {user.Duration}</p>
                <p>Provider: {user.Providers}</p>
                <p>Training Type: {user.trainingType}</p>
                <p>Hours: {user.Hours1}</p>
                <p>Description: {user.coarseDescription}</p>
                <p>Topics Covered: {user.TopicsCovered}</p>
                <p>Benefits: {user.Benefits}</p>
                <p>Price: {user.Price}</p>
              </div>
              <div className="course-actions">
                <Link to={`/${user.courseId}/edit2`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deleteRecord(user.courseId)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No courses to display</p>
        )}
      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
