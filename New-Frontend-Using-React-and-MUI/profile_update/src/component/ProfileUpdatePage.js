import React, { useState } from 'react';
import './ProfileUpdatePage.css'; // Import your CSS file

const ProfileUpdatePage = () => {
  const initialProfileData = {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    country: '',
    gender: 'male',
    phoneNumber: '',
    profileImage: null,
  };

  const countries = ['Select Country', 'United States', 'Canada', 'United Kingdom', 'Australia', 'India', 'Germany', 'France', 'Japan', 'China', 'Brazil', 'Mexico', 'South Korea', 'Spain', 'Italy', 'Netherlands', 'Switzerland', 'Sweden', 'Singapore', 'South Africa', 'Russia'
];

  const [profileData, setProfileData] = useState(initialProfileData);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!profileData.username) newErrors.username = 'Username is required';
    if (!profileData.password) newErrors.password = 'Password is required';
    if (profileData.password !== profileData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!profileData.email) newErrors.email = 'Email is required';
   

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you can make an API call to update the user's profile on the server
      // For this example, we'll just update the state.
      console.log('Updated Profile:', profileData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="profile-update-container">
      <h1 className="profile-update-heading">Update Profile</h1>
      <form className="profile-update-form" onSubmit={handleUpdateProfile}>
        <label className="profile-update-label">Username:</label>
        <input
          type="text"
          name="username"
          value={profileData.username}
          onChange={handleInputChange}
        />
        {errors.username && <div className="error">{errors.username}</div>}

        <label className="profile-update-label">Password:</label>
        <input
          type="password"
          name="password"
          value={profileData.password}
          onChange={handleInputChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}

        <label className="profile-update-label">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={profileData.confirmPassword}
          onChange={handleInputChange}
        />
        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}

        <label className="profile-update-label">Email:</label>
        <input
          type="email"
          name="email"
          value={profileData.email}
          onChange={handleInputChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <label className="profile-update-label">Country:</label>
        <select
          name="country"
          value={profileData.country}
          onChange={handleInputChange}
        >
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
        {errors.country && <div className="error">{errors.country}</div>}

        <label className="profile-update-label">Gender:</label>
        <select
          name="gender"
          value={profileData.gender}
          onChange={handleInputChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label className="profile-update-label">Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={profileData.phoneNumber}
          onChange={handleInputChange}
        />
        {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}

        <label className="profile-update-label">Profile Image:</label>
        <input
          type="file"
          accept="image/*"
          name="profileImage"
          onChange={(e) => setProfileData({ ...profileData, profileImage: e.target.files[0] })}
        />

        <button className="update-button" type="submit">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileUpdatePage;
