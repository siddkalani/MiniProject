import { useState } from "react";
import { Parallax } from "react-parallax";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import service from "../../../assets/service.svg";
const AboutUs = () => {
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
      <section id="about-us" className="pt-[var(--section-padding)] relative">
        <div className="border-top-ornament">
          <div className="ornament">
            <img src="" alt="" />
          </div>
        </div>
        <div className="w-full bg-[#003B6C] flex-custom-center">
          <div className="flex flex-col md:flex-row relative w-[80%] items-center gap-[3rem] h-full">
            <div className="flex md:justify-center w-full relative h-full">
              <div className="flex-custom-col items-center md:items-start justify-center gap-4 py-4">
                {/* <div className='text-left w-full'>
                                    <span className="span-margin eyebrow text-hero-span text-[1.15rem] text-[var(--color-white)] font-karla text-shadow">• ABOUT US
                                    </span>
                                </div> */}
                <div className="col-row col-row-title medium text-shadow mb-2 mt-5">
                  <h2 className="text-white">AYUSH</h2>
                </div>
                <div className="max-w-[90%] text-[1.5rem] space-y-6 py-2">
                  <div className="md:text-left text-center w-full space-y-2">
                    <p className="font-cormo font-medium text-white">
                      The Ministry of AYUSH was established by the Government of
                      India to promote and regulate these practices, emphasizing
                      their role in maintaining public health and wellness.
                    </p>

                    <NavLink to="/ayush/services">
                    <div
                className={`btn h-[2em] mt-4 w-[9.5rem] flex-custom-center hover:shadow-2xl hover:scale-105 hover:bg-opacity-90 transition-all duration-300 ease-in-out lg:h-[var(--btn-height-small)] rounded-full bg-[#052560] `}
              >
                <div className="btn-content flex-custom-center ">
                  <a href="#news">
                    <span className=" text-white">Get your plan</span>
                  </a>
                </div>
              </div>
                    </NavLink>
                  </div>
                </div>
                {/* <div className={`btn w-[90%] md:w-auto btn-svg h-[3rem] border-[1px] border-black bg-transparent rounded-none `}>
                                    <div className='btn-content gap-3'>
                                        <img className='size-4 first-img' src="/images/symbols/section-symbol.svg" alt="Ornament" />
                                        <span className='text-[var(--color-dark)]'>Read more</span>
                                        <img className='size-4 second-img' src="/images/symbols/section-symbol.svg" alt="Ornament" />
                                    </div>
                                </div> */}
              </div>
            </div>

            <div className="h-full flex items-center justify-center">
              <Parallax bgImage={service} strength={parallaxStrength}>
                <div className="md:h-[30rem] h-[25rem] md:w-[33rem] w-[100vw] bg-cover" />
              </Parallax>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
