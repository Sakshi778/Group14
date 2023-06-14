import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./edit.css";


const EditProfilePage = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [profileUpdated, setProfileUpdated] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the edited profile here, e.g., make an API call or update state
    console.log("Profile saved:", { firstname, email });

    // Set the profileUpdated state to true
    setProfileUpdated(true);
  };

  return (
    <div className="edit-profile-container">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input className="form-control"
            type="text"
            value={firstname}
            required
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input className="form-control"
            type="text"
            value={lastname}
            required
            onChange={handleLastNameChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input className="form-control" type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input className="form-control" type="text" value={address} onChange={handleAddressChange} />
        </div>
        <button className="profile"type="submit">Save Profile</button>
      </form>
      <Link to="/main" className="go-back-link">
        Go back to Main Page
      </Link>
      {profileUpdated && <p className="success-message">Profile updated successfully!</p>}
    </div>
  );
};

export default EditProfilePage;
