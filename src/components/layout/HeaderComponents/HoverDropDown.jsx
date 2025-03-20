/* eslint-disable react/prop-types */
const HoverDropDown = ({ children, ...props }) => {
    return (
      <div
        className="absolute top-[70px] left-[710px] w-[160px] bg-[#ffffff] h-[160px] text-[#296ea4] rounded-xl transition-all"
        {...props}
      >
        {children}
      </div>
    );
  };
  
  export default HoverDropDown;
  