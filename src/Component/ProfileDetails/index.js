import React, { useState, useRef } from "react";
import { BsBorderStyle } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa";
import "./index.css";
import { useNavigate } from "react-router-dom";

function ProfileDetails() {
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState(
    localStorage.getItem("profilePicture") || ""
  );
  const fileInputRef = useRef(null);

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result;
      setProfilePicture(imageUrl);
      localStorage.setItem("profilePicture", imageUrl);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleUploadButtonClick = () => {
    // Programmatically trigger the file input's click event
    fileInputRef.current.click();
  };
  return (
    <div>
      <div className=" container">
        <div className="card">
          {profilePicture ? (
            <img
              className="profile-image"
              src={profilePicture}
              alt="Profile"
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
          ) : (
            <div>No profile picture selected</div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handlePictureChange}
            accept="image/*"
          />
          <button onClick={handleUploadButtonClick}>Upload</button>
          <div>
            <div>
              <BsBorderStyle onClick={() => navigate("/order")} />

              <span>Order</span>
            </div>
            <div>
              <CgProfile />
              <span>Profile</span>
            </div>
            <div>
              <FaRegAddressCard />
              <span>Address</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
