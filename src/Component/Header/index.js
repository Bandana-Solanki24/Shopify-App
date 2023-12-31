import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (item) => {
    // Handle the dropdown item click
    console.log("Selected item:", item);
  };

  return (
    <nav className="main-menu">
      <div className="navbar-brand">
        <p className="brand-text">shopify</p>
      </div>

      <div className={`menu-links ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/productsSection">
              Products
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/order">
              Order
            </Link>
          </li>
        </ul>
      </div>

      <div className="icon-container">
        <ul>
          <li>
            <Link className="nav-link" to="/cart">
              <div className="icon-space">
                <AiOutlineShoppingCart />
              </div>
            </Link>
          </li>
          <li>
            <div className="icon-space icon-container">
              <div className="dropdown">
                <button
                  className="dropdown-button"
                  onClick={handleToggleDropdown}
                >
                  <FaUserCheck />
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    <Link
                      to="/menu"
                      className="dropdown-item"
                      onClick={() => {
                        handleDropdownItemClick("Login");
                        setIsDropdownOpen(false);
                      }}
                    >
                      Login
                    </Link>
                    <Link
                      to="/registration"
                      className="dropdown-item"
                      onClick={() => {
                        handleDropdownItemClick("Register");
                        setIsDropdownOpen(false);
                      }}
                    >
                      Register
                    </Link>
                    <Link
                      to="/profile"
                      className="dropdown-item"
                      onClick={() => {
                        handleDropdownItemClick("Profile");
                        setIsDropdownOpen(false);
                      }}
                    >
                      Profile
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </li>
        </ul>
        <div className="hamburger-menu" onClick={handleToggleMenu}>
          <GiHamburgerMenu size={30} />
        </div>
      </div>
    </nav>
  );
}

export default Header;
