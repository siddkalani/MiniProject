import { useState } from "react";
import { Parallax } from "react-parallax";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import contact from "../../../assets/contact.svg";
const Intro = () => {
  const [parallaxStrength, setParallaxStrength] = useState(100);

  useEffect(() => {
    const updateParallaxStrength = () => {
      if (window.innerWidth <= 640) {
        // sm breakpoint
        setParallaxStrength(0);
      } else {
        setParallaxStrength(100);
      }
    };

    updateParallaxStrength(); // Set the initial value
    window.addEventListener("resize", updateParallaxStrength); // Update on window resize

    return () => window.removeEventListener("resize", updateParallaxStrength); // Cleanup
  }, []);

  return (
    <>
      <section id="about-us" className="section-padding relative">
        <div className="border-top-ornament">
          <div className="ornament">
            <img src="" alt="" />
          </div>
        </div>
        <div className="w-full bg-[#F8F9FC] flex-custom-center">
          <div className="flex flex-col md:flex-row relative w-[80%] items-center gap-[3rem] h-full">
            <div className="flex md:justify-center w-full relative h-full">
              <div className="flex-custom-col items-center md:items-start justify-center gap-4 py-4">
                {/* <div className='text-left w-full'>
                                    <span className="span-margin eyebrow text-hero-span text-[1.15rem] text-[var(--color-white)] font-karla text-shadow">• ABOUT US
                                    </span>
                                </div> */}
                <div className="col-row col-row-title medium text-shadow mb-2">
                  <h2 className="text-black">Explore Holisitc Plans</h2>
                </div>
                <div className="max-w-[90%] text-[1.5rem] space-y-6 py-2">
                  <div className="md:text-left text-center w-full space-y-2">
                    <p className="font-cormo font-medium text-black">
                      Explore holistic healing with our AYUSH Package Generator.
                      This dedicated section guides you to personalized Ayurveda
                      packages tailored to your preferences. Simply filter by
                      treatment type, city, and budget to discover the ideal
                      Ayurveda experience that aligns with your wellness goals.
                      Let us help you find the perfect balance of tradition and
                      comfort for your healing journey.
                    </p>
                  </div>
                </div>
                <div
                  className={``}
                >
                  <div className="btn-content gap-3">
                    <NavLink to="/ayush/services">
                    <div
                className={`btn h-[2em] w-[7.5rem] flex-custom-center hover:shadow-2xl hover:scale-105 hover:bg-opacity-90 transition-all duration-300 ease-in-out lg:h-[var(--btn-height-small)] rounded-full bg-[#052560] `}
              >
                <div className="btn-content flex gap-2">
                  <a href="#news">
                    <span className="lg:flex hidden text-white">Get a Quote</span>
                  </a>
                </div>
              </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full flex items-center justify-center">
              <Parallax bgImage={contact} strength={parallaxStrength}>
                <div className="md:h-[30rem] h-[25rem] md:w-[33rem] w-[100vw] bg-cover" />
              </Parallax>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
