/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const SideNav = ({ handleToggle }) => {
  return (
    <div className="side-nav-content bg-white">
      <nav className="nav-menu">
        <div className="menu-title">
          <span className="eyebrow text-[0.8rem]">Menu</span>
        </div>
        <ul className="menu-list">
          <NavLink to="/">
            <li className="menu-item">
              <a
          
                className="text-black menu-link hover-circle"
                onClick={handleToggle}
              >
                <span className="side-nav-link font-cormo font-medium">
                  Home
                </span>
              </a>
            </li>
          </NavLink>
          <NavLink to="/ayush">
            <li className="menu-item">
              <a
          
                className="text-black menu-link hover-circle"
                onClick={handleToggle}
              >
                <span className="side-nav-link font-cormo font-medium">
                  AYUSH
                </span>
              </a>
            </li>
          </NavLink>
          <NavLink to="/services">
            <li className="menu-item">
              <a
          
                className="text-black menu-link hover-circle"
                onClick={handleToggle}
              >
                <span className="side-nav-link font-cormo font-medium">
                  Services
                </span>
              </a>
            </li>
          </NavLink>
          <NavLink to="/healthcard">
            <li className="menu-item">
              <a
          
                className="text-black menu-link hover-circle"
                onClick={handleToggle}
              >
                <span className="side-nav-link font-cormo font-medium">
                  Health Card
                </span>
              </a>
            </li>
          </NavLink>
          <NavLink to="/aboutus">
            <li className="menu-item">
              <a
          
                className="text-black menu-link hover-circle"
                onClick={handleToggle}
              >
                <span className="side-nav-link font-cormo font-medium">
                  About Us
                </span>
              </a>
            </li>
          </NavLink>
          <NavLink to="/cities">
            <li className="menu-item">
              <a
          
                className="text-black menu-link hover-circle"
                onClick={handleToggle}
              >
                <span className="side-nav-link font-cormo font-medium">
                  Cities
                </span>
              </a>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
