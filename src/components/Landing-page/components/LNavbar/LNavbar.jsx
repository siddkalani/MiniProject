import { Menu, X } from "lucide-react";
import { useState } from "react";
import heal from '../../../layout/logowithoutbg.png'
import { navItems } from "../../constants/LandingData";
// import somaiya from '../../../../assets/images/somaiya.jpg'
import "./LNavbar.css"; // Import your CSS file
import { Link } from "react-router-dom";

const LNavbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="Lnavbar">
      <div className="Lcontainer">
        <div className="navbar-main">
          <div className="navbar-head">
            <img className="Llogo" src={heal} alt="Logo" />
            <span className="brand ">HealGrimage</span>
          </div>
          <div className="link-div">
          <ul className="Lnav-links">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          </div>
          <div className="Lbuttons">
            <Link to="/login">
            <button className="Lbutton">
              Sign In
            </button>
            </Link>
            <Link to="/register">
            <button className="Lbutton create-account">
              Create an account
            </button>
            </Link>
          </div>
          <div className="mobile-menu">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="mobile-drawer">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="mobile-link">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="Lbuttons">
              <a href="#" className="Lbutton">
                Sign In
              </a>
              <a href="#" className="Lbutton create-account">
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LNavbar;


