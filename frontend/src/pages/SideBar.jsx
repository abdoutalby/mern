import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserShield } from "react-icons/fa";

function SideBar() {
  return (
    <>
      <div>
        <div className="sidebar-brand">
          <div className="sidebar-brand-logo">
            <span>
              <img src="src/assets/logo.png" alt="logo" />
            </span>
          </div>
          <div className="sidebar-brand-name">
            <h5>SDE</h5>
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
              <Link to="annonces">
                <span
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Administrateur"
                >
                  <FaUserShield />
                </span>
                <span>Administrateur</span>
              </Link>
            </li>

            <li>
              <Link to="recruters">
                <span
                  className="fas fa-user"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Condidat"
                ></span>
                <span> Condidat</span>
              </Link>
            </li>

            <li>
              <Link to="test">
                <span
                  className="fas fa-building"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Entreprise"
                ></span>
                <span>Entreprise</span>
              </Link>
            </li>

            <li>
              <Link to="">
                <span
                  className="fas fa-briefcase"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Offre d'emploi"
                ></span>
                <span>Offre d'emploi</span>
              </Link>
            </li>

            <li>
              <Link to="">
                <span
                  className="fas fa-list"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Categorie"
                ></span>
                <span>Categorie</span>
              </Link>
            </li>

            <li>
              <Link to="">
                <span
                  className="fab fa-facebook-messenger"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Messages"
                ></span>
                <span>Messages</span>{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-footer">
          <button
            className="logout-btn"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Logout"
          >
            <i className="fas fa-sign-out-alt"></i>
            <div className="ms-1">Déconnexion</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default SideBar;
