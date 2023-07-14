import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";

function Header() {
  return (
    <nav className="main-menu">
      <div className="navbar-brand">
        <p className="brand-text">shopify</p>
      </div>

      <div className="menu-links">
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
            <Link className="nav-link" to="/menu">
              <div className="icon-space">
                <CDropdown>
                  <CDropdownToggle color="secondary">
                    <FaUserCheck />
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem as={Link} to="/menu">
                      Login
                    </CDropdownItem>
                    <CDropdownItem as={Link} to="/registration">
                      Register
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </div>
            </Link>
          </li>
          <Link to="/registration">Register</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
