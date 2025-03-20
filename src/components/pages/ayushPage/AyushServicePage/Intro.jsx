import { useState } from "react";
import { Parallax } from "react-parallax";
import { useEffect } from "react";
import contact from "../../../../assets/contact.svg";
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
                <div className="col-row col-row-title medium text-shadow mb-2">
                  <h2 className="text-black">For further assitance</h2>
                </div>
                <div className="max-w-[90%] text-[1.5rem] space-y-6 py-2">
                  <div className="md:text-left text-center w-full space-y-2">
                    <span className="text-black">
                      Need more personalized options? Our Further Assistance
                      section offers automated guidance to help you craft the
                      perfect treatment package. By analyzing your unique needs
                      and preferences, we provide tailored recommendations,
                      ensuring you receive the most suitable medical solutions.
                    </span>
                  </div>
                </div>
                <div
                  className={`btn w-[90%] md:w-auto btn-svg h-[3rem] border-[1px] border-white bg-transparent rounded-none `}
                >
                  <div className="btn-content gap-3">
                    <button className="bg-[#052560] p-2 text-white rounded-md">Create Plans</button>
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
