import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero1.svg";

const HeroSection = () => {
  const [parallaxStrength, setParallaxStrength] = useState(400);
  const [marginClass, setMarginClass] = useState("mt-[-10rem]");

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth <= 640) {
        // sm breakpoint
        setParallaxStrength(0);
        setMarginClass(""); // Remove the margin class on small devices
      } else {
        setParallaxStrength(400);
        setMarginClass("mt-[-10rem]"); // Apply the margin class on larger screens
      }
    };

    updateLayout(); // Set the initial value
    window.addEventListener("resize", updateLayout); // Update on window resize

    return () => window.removeEventListener("resize", updateLayout); // Cleanup
  }, []);

  return (
    <section id="I" className="w-full h-full">
      <div className="flex-custom-center h-full w-full bg-white mt-[-4rem]">
        <div
          style={{ height: "80vh" }}
          className={`hero-image flex justify-between items-center w-[80%]`}
        >
          <div
            className={`gap-[5rem] flex-custom-center items-center justify-center w-full h-full ${marginClass}`}
          >
            <div className="flex-col justify-center items-start w-[500px] h-[25rem] mt-[300px]">
              <div className="mb-8">
                <h1 className="text-shadow hero-h1 text-left mt-[-0.175em] mb-[-0.1em] font-cormo text-black">
                  HealGrimage
                </h1>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-left text-[1.53rem] mt-[-1rem] text-black font-karla">
                  HealGrimage is at the forefront of transforming medical
                  tourism which integrates with your medical journey, offering easy access to your
                  health history, tailored insurance options, and real-time
                  updates.
                </span>
              </div>
              <div
                className={`btn h-[2em] mt-4 w-[7.5rem] flex-custom-center hover:shadow-2xl hover:scale-105 hover:bg-opacity-90 transition-all duration-300 ease-in-out lg:h-[var(--btn-height-small)] rounded-full bg-[#052560] `}
              >
                <div className="btn-content flex gap-2 flex-custom-center">
                  <Link to="/login">
                    <span className="lg:flex hidden text-white">Sign in</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-32 w-[130rem] md:block hidden">
            <img src={heroImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
