import React, { useState } from "react";
import axios from "axios";
import "../Components/model.css";

const Modal = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://accredian-backend-task-15jo.onrender.com/referral",
        formData
      );
      console.log(response.data);
      handleClose();
      setFormData({
        email: "",
        name: "",
        course: "",
      });
    } catch (error) {
      console.error("Error submitting referral:", error);
    }
  };

  return (
    showModal && (
      <div className="modal">
        <div className="modal-content">
          <span className="close-button" onClick={handleClose}>
            &times;
          </span>
          <h2>Refer a Friend</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Course Name:</label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
