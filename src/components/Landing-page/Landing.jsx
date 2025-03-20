import AboutUs from "../pages/AboutUs";
import HeroSection from "../pages/HeroSection";
import ImageGallery from "../pages/ImageGallery";
import Intro from "../pages/Intro";
import LNavbar from "./components/LNavbar/LNavbar";
import "./landing.css";

const Landing = () => {
  return (
    <>
      <div className="landing-all-main">
        <LNavbar className='bg-black '/>
        <div className="">
          <HeroSection />
          <Intro />
          <AboutUs />
          <ImageGallery />
        </div> 
      </div>
    </>
  );
};

export default Landing;
