import { useState } from "react";
import { Parallax } from "react-parallax";
import svg from "./../../assets/svg.jpg"
import { useEffect } from "react";

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
    <div id="S">
      <section id="about-us" className="mt-[var(--section-padding)] relative bg-[#052560]">
        <div className="w-full bg-custom bg-[#052560] flex justify-center">
          <div className="flex flex-col md:flex-row relative w-[75%] items-center gap-[6rem] h-full text-white pb-8">
            <div className="h-full flex items-center justify-center">
              <Parallax
                bgImage={svg}
                strength={parallaxStrength}
              >
                <div className="md:h-[40rem] h-[25rem] md:w-[33rem] w-[100vw] bg-cover" />
              </Parallax>
            </div>
            <div className="flex md:justify-center w-full relative h-full text-white">
              <div className="flex-custom-col items-center md:items-start justify-center gap-4 py-4">
                <div className="col-row col-row-title medium text-shadow py-10 w-full">
                  <h2 className="text-white text-left">Our Story</h2>
                </div>
                <div className="text-[1.5rem] space-y-10 py-2 w-full">
                  <div className="md:text-end text-end w-full space-y-2 mb-[2.5rem]">
                    <span className="span-margin eyebrow text-hero-span text-[1.15rem] text-[var(--color-white)] font-karla text-shadow text-left">
                      Need For Us
                    </span>
                    <p className="font-cormo font-light text-lg text-white text-justify">
                      HealthGrimage meets the critical need for seamless
                      integration and comprehensive support. Our app connects
                      you with India’s top-tier healthcare, offering virtual
                      facility tours, a secure digital health passport, and
                      all-inclusive travel packages.
                    </p>
                  </div>
                  <div className="md:text-left text-center w-full space-y-2 mb-[2.5rem]">
                    <span className="span-margin eyebrow text-hero-span text-[1.15rem] text-[var(--color-white)] font-karla text-shadow text-left">
                      Why India
                    </span>
                    <p className="font-cormo font-light text-lg text-white text-justify">
                      With India’s medical tourism market projected to double
                      from $7.69B in 2024 to $14.31B by 2029, HealthGrimage
                      leverages this growth to offer unparalleled value. Our app
                      integrates seamlessly with existing systems and benefits
                      from the 'Heal in India' initiative, ensuring
                      comprehensive support throughout your journey.
                    </p>
                  </div>
                  <div className="md:text-left text-center w-full space-y-2 mb-[2.5rem]">
                    <span className="span-margin eyebrow text-hero-span text-[1.15rem] text-[var(--color-white)] font-karla text-shadow text-left">
                      How Do We Do It
                    </span>
                    <p className="font-cormo font-light text-lg text-white text-justify">
                      Our app offers VR facility previews, secure health data management, 
                      and all-inclusive medical travel packages with city, accommodation, 
                      and dining details. The AYUSH Dashboard adds holistic wellness insights 
                      for a seamless, informed experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
