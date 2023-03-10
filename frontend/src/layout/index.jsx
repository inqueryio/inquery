import React from "react";
import {FiSettings} from "react-icons/fi";
import {NavLink} from "react-router-dom";
import logoD from "../assets/logoD.svg";
import logoW from "../assets/logoW.svg";

const Layout = ({children}) => {
  return (
    <div className="layout_container d-flex">
      <div className="w-100">
        <div className="header_container shadow-sm d-flex justify-content-between align-items-center px-4 w-100">
          <NavLink to="/">
            <div className="logo2 d-flex justify-content-center">
              <img className="logoD" src={logoD} alt=""/>
              <img className="logoW" src={logoW} alt=""/>
            </div>
          </NavLink>
          <div className="d-flex align-items-center">
            <NavLink to="/settings">
              <FiSettings
                className="ms-0 ms-md-4 pointer color3"
                fontSize="1.5rem"
              />
            </NavLink>
          </div>
        </div>
        {/* CHILDREN */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
