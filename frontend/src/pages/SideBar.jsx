import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserShield,
  FaUsers,
  FaBriefcase,
  FaSignOutAlt,
} from "react-icons/fa";

function SideBar() {
  return (
    <>
      <div className="sidebar-brand">
        <div className="sidebar-brand-logo">
          <span>
            <img src="src/assets/logo.png" alt="logo" />
          </span>
        </div>
        <div className="sidebar-brand-name">
          <h5>PFE</h5>
          <small>Offre d'emploi</small>
        </div>
      </div>
      <div className="sidebar-title">
        <small>Menu</small>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <Link to="/">
              <span
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Dashboard"
              >
                <FaHome />
              </span>
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="recruters">
              <span
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Recruters"
              >
                <FaUserShield />
              </span>
              <span>Recruters</span>
            </Link>
          </li>

          <li>
            <Link to="condidats">
              <span
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Condidat"
              >
                <FaUsers />
              </span>
              <span> Condidats</span>
            </Link>
          </li>

          <li>
            <Link to="annonces">
              <span
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Annonces"
              >
                <FaBriefcase />
              </span>
              <span> Annonces </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-footer">
      <Link to='/login'>  <button
          className="logout-btn"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Logout"
        >
          <FaSignOutAlt />
          <div className="ms-1">Déconnexion</div>
        </button>
        </Link>
      </div>
    </>
  );
}

export default SideBar;
