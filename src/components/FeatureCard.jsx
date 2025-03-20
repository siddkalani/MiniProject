// import { useState } from "react";

/* eslint-disable react/prop-types */
const FeatureCard = ({ image, name, description }) => {
    // const [hover, setHover] = useState(false);

    return (
      <div className="flex flex-col w-[300px] h-[270px] rounded-lg bg-[#052560] p-4 items-center text-white transition-all hover:scale-105" >
        <img src={image} alt="" className="h-[60px] mb-7" />
        <div className="flex flex-col h-full w-full items-center pb-5 gap-5 break-words">
          <h2 className={`text-2xl text-white`}>{name}</h2>
          <p className={`text-center w-[20ch] text-white`}>{description}</p>
        </div>
      </div>
    );
};

export default FeatureCard;
