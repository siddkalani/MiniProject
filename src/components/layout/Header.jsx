import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sidebarActions } from "../../store/slices/siderbarSlice";
import { NavLink } from "react-router-dom";
import GoogleTranslate from "../translator/GoogleTranslate";
import photo from "./logowithoutbg.png"
import DropdownUser from "../../dashboard/src/components/Header/DropdownUser";

const Header = () => {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState("Stay");

  const handleOpen = () => {
    dispatch(sidebarActions.toggleOpen());
  };

  const [scrollState, setScrollState] = useState({
    isScrolling: false,
    isDarkMode: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && window.scrollY <= 100) {
        setScrollState({ isScrolling: true, isDarkMode: false });
      } else if (window.scrollY > 100) {
        setScrollState({ isScrolling: true, isDarkMode: true });
      } else {
        setScrollState({ isScrolling: false, isDarkMode: false });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`z-[100] fixed w-full p-mobile text-black bg-white`}>
      <div className="flex items-center bg-transparent justify-between w-full p-nav">
        <div className="hidden md:flex">
          <picture>
            <img
              src={photo}
              alt=""
              className={`hero-logo flex-custom-center w-[5rem] h-[3.5rem]`}
            />
          </picture>
        </div>

        <nav className="flex items-center gap-nav">
          <div className="cheeseburger flex md:hidden" onClick={handleOpen}>
            <div className="cheeseburger-inner">
              <div className={`bar bg-black`}></div>
              <div className={`bar bg-black`}></div>
              <div className={`bar bg-black`}></div>
            </div>
          </div>
          {/* will be mapped from data */}
          <ul className={`lg:flex logo hidden text-black`}>
            <li className="nav-a">
              <NavLink to="/app">
                <a className="flex-custom-center text-black relative overflow-hidden group font-karla">
                  <span className="text-[1.3rem] nav-span inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0 text-black">
                    Dashboard
                  </span>
                  <span className="text-[1.3rem] nav-span absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-full text-black">
                    Dashboard
                  </span>
                </a>
              </NavLink>
            </li>
            <li className="nav-a">
              <NavLink to="/app/ayush">
                <a className="flex-custom-center text-black relative overflow-hidden group font-karla">
                  <span className="text-[1.3rem] nav-span inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0 text-black">
                    AYUSH
                  </span>
                  <span className="text-[1.3rem] nav-span absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-full text-black">
                    AYUSH
                  </span>
                </a>
              </NavLink>
            </li>
            <li className="nav-a">
              <NavLink to="/app/services">
                <a className="flex-custom-center text-black relative overflow-hidden group font-karla">
                  <span className="text-[1.3rem] nav-span inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0 text-black">
                    <div className="flex gap-1">Services</div>
                  </span>
                  <span className="text-[1.3rem] nav-span absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-full text-black">
                    <div className="flex gap-1">Services</div>
                  </span>
                </a>
              </NavLink>
            </li>
            <li className="nav-a">
              <NavLink to="/app/healthcard">
                <a className="flex-custom-center text-black relative overflow-hidden group font-karla">
                  <span className="text-[1.3rem] nav-span inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0 text-black">
                    Health Card
                  </span>
                  <span className="text-[1.3rem] nav-span absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-full text-black">
                    Health Card
                  </span>
                </a>
              </NavLink>
            </li>
            <li className="nav-a">
              <NavLink to="/app/aboutus">
                <a className="flex-custom-center text-black relative overflow-hidden group font-karla">
                  <span className="text-[1.3rem] nav-span inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0 text-black">
                    About Us
                  </span>
                  <span className="text-[1.3rem] nav-span absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-full text-black">
                    About Us
                  </span>
                </a>
              </NavLink>
            </li>
            <li className="nav-a">
              <NavLink to="/app/cities">
                <a className="flex-custom-center text-black relative overflow-hidden group font-karla">
                  <span className="text-[1.3rem] nav-span inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0 text-black">
                    Cities
                  </span>
                  <span className="text-[1.3rem] nav-span absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-full text-black">
                    Cities
                  </span>
                </a>
              </NavLink>
            </li>
            <li className="nav-a">
              <NavLink to="/app/cart">
                <a className="flex-custom-center text-black relative overflow-hidden group font-karla">
                  <span className="text-[1.3rem] nav-span inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0 text-black">
                    Cart
                  </span>
                  <span className="text-[1.3rem] nav-span absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-full text-black">
                    Cart
                  </span>
                </a>
              </NavLink>
            </li>
            {/* <li className="nav-a">
              <NavLink to="">
                <a className="flex-custom-center text-black relative overflow-hidden group font-karla">
                  <span className="text-[1.3rem] nav-span inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0 text-black">
                  <GoogleTranslate/>
                  </span>
                  <span className="text-[1.3rem] nav-span absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-full text-black">
                  <GoogleTranslate/>
                  </span>
                </a>
              </NavLink>
            </li> */}
          </ul>
        </nav>
        
        <div>
        <div className="flex items-center gap-3 2xsm:gap-7">

{/* <!-- User Area --> */}
<DropdownUser />
{/* <!-- User Area --> */}
</div>
        </div>
      </div>
      <div
        className={`${scrollState.isDarkMode ? "bg-[var(--color-border)] border-bottom" : "border-bottom"}`}
      ></div>
    </header>
  );
};

export default Header;
