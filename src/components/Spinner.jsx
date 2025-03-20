/* eslint-disable react/prop-types */

const Spinner = ({ className }) => {
    return (
      <div
        className={`animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900 ${className}`}
      />
    );
  };
  
  export default Spinner;