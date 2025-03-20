import { useState, useRef, useEffect } from "react";
import visa from "../../assets/passport.svg";

const Intro = () => {
  const contentRef = useRef(null);

  return (
    <section className="h-full w-full py-[--var(section-padding)] bg-white flex flex-col items-center" id="N">
      <div className="w-[80%] flex items-center justify-center">
        <div className="w-[90%] h-full flex lg:flex-row flex-col justify-between lg:pl-20  md:items-center">
          <div className="relative flex justify-center items-center">
            {/* First Image with Border Box */}
            <div className="md:flex lg:flex hidden">
              <div className="lg:w-[18rem] lg:h-[20rem] md:w-[16rem] md:h-[18rem]">
                <div className="absolute top-16 border-2 border-black lg:w-[18rem] lg:h-[20rem] md:w-[16rem] md:h-[18rem]"></div>
                <img
                  src={visa}
                  alt="Overlay Image"
                  className="absolute top-[-20%] right-[30%] object-cover drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="flex w-[30rem]">
            <div className="flex-custom-col lg:items-start justify-center hero-flex-gap sm:justify-center md:items-center">
              <div className="col-row col-row-title medium text-center md:text-left">
                <h2 className="font-cormo text-black">
                  Revolutionizing Medical Tourism
                </h2>
              </div>
              <div
                ref={contentRef}
                className={`max-w-[55em] text-center md:text-left overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <p className="font-cormo text-[1.5rem] font-medium">
                  HealGrimage is at the forefront of transforming medical
                  tourism with our groundbreaking digital health card, utilizing
                  blockchain technology to keep your data decentralized and
                  secure. This revolutionary approach ensures data integrity and
                  privacy, providing you with a robust and transparent system
                  for managing your health information. Our digital health card
                  seamlessly integrates with your medical journey, offering easy
                  access to your health history, tailored insurance options, and
                  real-time updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
