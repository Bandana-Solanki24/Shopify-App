import React, { useState, useRef } from "react";
import { BsBorderStyle } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa";
import "./index.css";
import Modal from "react-modal";

function Profile() {
  const [profilePicture, setProfilePicture] = useState(
    localStorage.getItem("profilePicture") || ""
  );
  const fileInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(true); // State to control modal open/close

  // ...

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
  const handleAddressSubmit = () => {};

  return (
    <div>
      <h3>My Account</h3>
      <hr />

      <div className="profile-container">
        <div className="image-info">
          <div>
            {profilePicture ? (
              <img
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
                <BsBorderStyle />
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
        <div>
          <h3>Address</h3>
          <button onClick={handleOpenModal}>Upload</button>

          {/* Modal */}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            ariaHideApp={false}
            contentLabel="Upload Profile Picture"
          >
            <h2>Add Address Details</h2>
            <form onSubmit={handleAddressSubmit}>
              <textarea
                placeholder="Enter your Address..."
                rows="4"
                cols="20"
              />
              <p>Address</p>
              <div></div>

              <input type="text" placeholder="Pincode" />
              <br />
              <br />

              <input type="text" placeholder="City" />
              <br />
              <br />
              <input type="text" placeholder="states" />
              <br />
              <br />
              <input type="text" placeholder="Country" />
              <br />
              <br />
              <div>
                <button type="submit">Submit</button>
                <button onClick={handleCloseModal}>Close</button>
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Profile;
