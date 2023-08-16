import React, { useState } from "react";
import "./index.css";
import Modal from "react-modal";
import ProfileDetails from "../ProfileDetails";

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  // State to control modal open/close
  const [addressDetails, setAddressDetails] = useState({
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddressSubmit = (event) => {
    event.preventDefault();
    setAddresses((prevAddresses) => [...prevAddresses, addressDetails]);

    // Save the address details to state
    // You can also save it to a backend or local storage if needed
    console.log("Address Details:", addressDetails);

    // Clear the form fields after submission
    setAddressDetails({
      address: "",
      pincode: "",
      city: "",
      state: "",
      country: "",
    });

    // Close the modal after form submission
    handleCloseModal();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddressDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const deleteAddress = (index) => {
    const filteredAddress = addresses.filter((eachAddress, i) => i !== index);
    setAddresses(filteredAddress);
  };

  return (
    <div>
      <h3>My Account</h3>
      <hr />

      <div className="profile-container">
        <ProfileDetails />
        <div>
          {/* Modal */}
          <form>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={handleCloseModal}
              ariaHideApp={false}
              contentLabel="Upload Profile Picture"
              style={{
                // Use the style prop to set the height and width of the modal
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
                content: {
                  maxWidth: "500px", // Set the maximum width of the modal
                  maxHeight: "80%", // Set the maximum height of the modal
                  margin: "0 auto", // Center the modal horizontally
                  overflow: "auto",
                  marginTop: "10px",
                  // Enable scrolling if the content exceeds the height
                },
              }}
            >
              <h2>Add Address Details</h2>

              <textarea
                name="address"
                placeholder="Enter your Address..."
                rows="4"
                cols="20"
                value={addressDetails.address}
                onChange={handleInputChange}
              />
              <br />

              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={addressDetails.pincode}
                onChange={handleInputChange}
              />
              <br />
              <br />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={addressDetails.city}
                onChange={handleInputChange}
              />
              <br />
              <br />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={addressDetails.state}
                onChange={handleInputChange}
              />
              <br />
              <br />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={addressDetails.country}
                onChange={handleInputChange}
              />
              <br />
              <br />
              <div>
                <button onClick={handleAddressSubmit}>Submit</button>
                <button onClick={handleCloseModal}>Close</button>
              </div>
            </Modal>
          </form>
        </div>
        <div>
          <div>
            <h3>Address</h3>
            <button className="btn btn-primary" onClick={handleOpenModal}>
              Upload
            </button>
            {addresses.map((address, index) => (
              <div className="card" key={index}>
                <input type="checkbox" />

                <p>{address.address}</p>
                <p>{address.city}</p>
                <p>{address.pincode}</p>
                <p>{address.state}</p>
                <p>{address.country}</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => handleOpenModal(index)}
                    className="btn btn-success"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteAddress(index)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
