import { useState } from "react";
import { Parallax } from "react-parallax";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import people from './images/people.svg'

const Section1 = () => {
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
                  <h2 className="text-black">About Us</h2>
                </div>
                <div className="max-w-[90%] text-[1.5rem] space-y-6 py-2">
                  <div className="md:text-left text-center w-full space-y-2">
                    <p className="font-cormo font-medium text-black">
                    At HealGrimage, we take care of everything. From selecting the best hospitals and doctors to arranging travel logistics, accommodations, and personalized post-treatment care, we ensure a smooth journey from start to finish. Our platform empowers patients with transparent information, competitive pricing, and access to trusted healthcare providers, removing the hassle of dealing with multiple intermediaries.

                    </p>
                  </div>
                </div>
                <div
                  className={`btn w-[90%] md:w-auto btn-svg h-[3rem] border-[1px] border-white bg-transparent rounded-none `}
                >
                  {/* <div className="btn-content gap-3">
                    <NavLink to="/ayush/services">
                      <button className="bg-[#052560] text-white p-2 rounded-md">
                        Get Plans
                      </button>
                    </NavLink>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="h-full flex items-center justify-center">
              <Parallax bgImage={people} strength={parallaxStrength}>
                <div className="md:h-[30rem] h-[25rem] md:w-[33rem] w-[100vw] bg-cover" />
              </Parallax>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
