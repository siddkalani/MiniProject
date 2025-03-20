// import { useState, useEffect } from "react";
// import { Parallax } from "react-parallax";
// import card from "./images/card.svg";

// const Section1 = () => {
//     const [parallaxStrength, setParallaxStrength] = useState(100);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const updateParallaxStrength = () => {
//       if (window.innerWidth <= 640) {
//         // sm breakpoint
//         setParallaxStrength(0);
//       } else {
//         setParallaxStrength(100);
//       }
//     };

//     updateParallaxStrength(); // Set the initial value
//     window.addEventListener("resize", updateParallaxStrength); // Update on window resize

//     return () => window.removeEventListener("resize", updateParallaxStrength); // Cleanup
//   }, []);

//   // Lock body scroll when modal is open, enable it when closed
//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.style.overflow = "hidden"; // Disable body scroll
//     } else {
//       document.body.style.overflow = "auto"; // Re-enable body scroll
//     }
//   }, [isModalOpen]);

//   const handleModalToggle = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <>
//       <section id="about-us" className="section-padding relative">
//         <div className="border-top-ornament">
//           <div className="ornament">
//             <img src="" alt="" />
//           </div>
//         </div>
//         <div className="w-full bg-[#F8F9FC] flex-custom-center">
//           <div className="flex flex-col md:flex-row relative w-[80%] items-center gap-[3rem] h-full">
//             <div className="h-full flex items-center justify-center">
//               <Parallax bgImage={card} strength={parallaxStrength}>
//                 <div className="md:h-[30rem] h-[25rem] md:w-[33rem] w-[100vw] bg-cover" />
//               </Parallax>
//             </div>

//             <div className="flex md:justify-center w-full relative h-full">
//               <div className="flex-custom-col items-center md:items-start justify-center gap-4 mt-10 py-4">
//                 <div className="col-row col-row-title medium text-shadow mb-2">
//                   <h2 className="text-black">
//                     For contacting the Ministry of AYUSH in India.
//                   </h2>
//                 </div>
//                 <div className="max-w-[90%] text-[1.5rem] space-y-6 py-2">
//                   <div className="md:text-left text-center w-full space-y-2">
//                     <p className="font-cormo font-medium text-black">
//                       Address: AYUSH Bhawan, B-Block, GPO Complex, INA, New
//                       Delhi - 110023, India
//                       <br />
//                       Phone Numbers: +91-11-24651950, +91-11-24651937
//                       <br />
//                       Email: For General Queries: webmanager-ayush@gov.in
//                     </p>
//                   </div>
//                 </div>
//                 <div
//                   className={`btn w-[90%] btn-svg h-[3rem] border-[1px] border-black bg-transparent rounded-none hover:text-white hover:bg-black`}
//                   onClick={() => setIsModalOpen(true)}
//                 >
//                   <div className="btn-content gap-3">
//                     <span className="">Create your own health card</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={`w-full ${isModalOpen ? "h-[1300px]" : "h-0"} flex justify-center`}>
//           {isModalOpen && (
//             <div className="flexbg-white p-8 rounded-md w-[90%] md:w-[80%] lg:w-[60%] max-h-[90vh]">
//               <h3 className="text-2xl font-semibold mb-10">
//                 Create Your Health Card
//               </h3>
//               <form className="space-y-4">
//                 <label className="block text-gray-700 font-semibold">
//                   Past medical records
//                 </label>
//                 <input type="text" className="w-full p-2 border rounded-md" />

//                 <label className="block text-gray-700 font-semibold">
//                   Diagnosis date
//                 </label>
//                 <input type="date" className="w-full p-2 border rounded-md" />

//                 <label className="block text-gray-700 font-semibold">
//                   Treatment for it
//                 </label>
//                 <input type="text" className="w-full p-2 border rounded-md" />

//                 <label className="block text-gray-700 font-semibold">
//                   Vaccines name
//                 </label>
//                 <input type="text" className="w-full p-2 border rounded-md" />

//                 <label className="block text-gray-700 font-semibold">
//                   Vaccine date
//                 </label>
//                 <input type="date" className="w-full p-2 border rounded-md" />

//                 <label className="block text-gray-700 font-semibold">
//                   Test needed
//                 </label>
//                 <input type="text" className="w-full p-2 border rounded-md" />

//                 <label className="block text-gray-700 font-semibold">
//                   Test name
//                 </label>
//                 <input type="text" className="w-full p-2 border rounded-md" />

//                 <label className="block text-gray-700 font-semibold">
//                   Test reason
//                 </label>
//                 <input type="text" className="w-full p-2 border rounded-md" />

//                 <label className="block text-gray-700 font-semibold">
//                   Due date
//                 </label>
//                 <input type="date" className="w-full p-2 border rounded-md" />

//                 <label className="block text-gray-700 font-semibold">
//                   Emergency contact
//                 </label>
//                 <input type="text" className="w-full p-2 border rounded-md" />

//                 {/* <label className="block text-gray-700 font-semibold">
//                   Contact
//                 </label>
//                 <input type="text" className="w-full p-2 border rounded-md" /> */}

//                 <label className="block text-gray-700 font-semibold">
//                   Relationship
//                 </label>
//                 <input type="text" className="w-full p-2 border rounded-md" />

//                 <div className="flex justify-end mt-4">
//                   <button
//                     type="button"
//                     className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
//                     onClick={handleModalToggle}
//                   >
//                     Close
//                   </button>
//                   <button
//                     type="submit"
//                     className="bg-blue-500 text-white px-4 py-2 rounded-md"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Section1;

import { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import axios from "axios"; // Import axios for making HTTP requests
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import card from "./images/card.svg";

const Section1 = () => {
  const [parallaxStrength, setParallaxStrength] = useState(100);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state with default healthcard_id and user_id
  const [formData, setFormData] = useState({
    user_id: "66da200be761cb2571d51786", // Default user_id value
    health_id: "1602F32", // Default healthcard_id
    past_medical_records: "",
    vaccines: "",
    tests_needed: "",
    emergency_contact: "",
    relationship: "",
  });

  // Update parallax strength on window resize
  useEffect(() => {
    const updateParallaxStrength = () => {
      if (window.innerWidth <= 640) {
        setParallaxStrength(0);
      } else {
        setParallaxStrength(100);
      }
    };

    updateParallaxStrength();
    window.addEventListener("resize", updateParallaxStrength);

    return () => window.removeEventListener("resize", updateParallaxStrength);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  // Fetch user ID from AsyncStorage when the component mounts
  useEffect(() => {
    const getUserId = async () => {
      try {
        const userId = "66daa17fc577ec3758c15aad";
        console.log("Fetched userId from AsyncStorage:", userId);
        if (userId) {
          setFormData((prevState) => ({
            ...prevState,
            user_id: userId, // Update user_id if found in AsyncStorage
          }));
        }
      } catch (error) {
        console.error("Error fetching user ID from AsyncStorage:", error);
      }
    };

    getUserId();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/healthCard",
        formData
      );
      console.log(response.data);
      // Close the modal on successful submission
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

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
            <div className="h-full flex items-center justify-center">
              <Parallax bgImage={card} strength={parallaxStrength}>
                <div className="md:h-[30rem] h-[25rem] md:w-[33rem] w-[100vw] bg-cover" />
              </Parallax>
            </div>

            <div className="flex md:justify-center w-full relative h-full">
              <div className="flex-custom-col items-center md:items-start justify-center gap-4 mt-10 py-4">
                <div className="col-row col-row-title medium text-shadow mb-2">
                  <h2 className="text-black">Create your own</h2>
                </div>
                <div className="max-w-[90%] text-[1.5rem] space-y-6 py-2">
                  <div className="md:text-left text-center w-full space-y-2">
                    <p className="font-cormo font-medium text-black">
                      Create your personalized Health Card now to keep all your
                      medical information at your fingertips.
                    </p>
                  </div>
                </div>
                <div
                  className="btn w-[90%] btn-svg h-[3rem] border-[1px] border-black bg-transparent rounded-none hover:text-white hover:bg-black"
                  onClick={() => setIsModalOpen(true)}
                >
                  <div className="btn-content gap-3">
                    <span className="">Create your own health card</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`w-full ${isModalOpen ? "h-[40rem]" : "h-0"} flex justify-center`}>
          {isModalOpen && (
            <div className="flexbg-white p-8 rounded-md w-[90%] md:w-[80%] lg:w-[60%] max-h-[90vh]">
              <h3 className="text-2xl font-semibold mb-10">
                Create Your Health Card
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <label className="block text-gray-700 font-semibold">
                  Past medical records
                </label>
                <input
                  type="text"
                  name="past_medical_records"
                  value={formData.past_medical_records}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />

                <label className="block text-gray-700 font-semibold">
                  Vaccine name
                </label>
                <input
                  type="text"
                  name="vaccines"
                  value={formData.vaccines}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />

                <label className="block text-gray-700 font-semibold">
                  Test needed
                </label>
                <input
                  type="text"
                  name="tests_needed"
                  value={formData.tests_needed}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />

                <label className="block text-gray-700 font-semibold">
                  Emergency contact
                </label>
                <input
                  type="text"
                  name="emergency_contact"
                  value={formData.emergency_contact}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />

                <label className="block text-gray-700 font-semibold">
                  Relationship
                </label>
                <input
                  type="text"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />

                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Section1;






// import { useState, useEffect } from "react";
// import { Parallax } from "react-parallax";
// import axios from "axios"; // Import axios for making HTTP requests
// import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
// import card from "./images/card.svg";

// const Section1 = () => {
//   const [parallaxStrength, setParallaxStrength] = useState(100);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Form state with default healthcard_id and user_id
//   const [formData, setFormData] = useState({
//     user_id: "66da200be761cb2571d51786", // Default user_id value
//     health_id: "1602F32", // Default healthcard_id
//     past_medical_records: "",
//     vaccines: "",
//     tests_needed: "",
//     emergency_contact: "",
//     relationship: "",
//   });

//   // Update parallax strength on window resize
//   useEffect(() => {
//     const updateParallaxStrength = () => {
//       if (window.innerWidth <= 640) {
//         setParallaxStrength(0);
//       } else {
//         setParallaxStrength(100);
//       }
//     };

//     updateParallaxStrength();
//     window.addEventListener("resize", updateParallaxStrength);

//     return () => window.removeEventListener("resize", updateParallaxStrength);
//   }, []);

//   // Lock body scroll when modal is open
//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [isModalOpen]);

//   // Fetch user ID from AsyncStorage when the component mounts
//   useEffect(() => {
//     const getUserId = async () => {
//       try {
//         const userId =  "66da200be761cb2571d51786" ;
//         console.log("Fetched userId from AsyncStorage:", userId);
//         if (userId) {
//           setFormData((prevState) => ({
//             ...prevState,
//             user_id: userId, // Update user_id if found in AsyncStorage
//           }));
//         }
//       } catch (error) {
//         console.error("Error fetching user ID from AsyncStorage:", error);
//       }
//     };

//     getUserId();
//   }, []);

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/api/healthCard", formData);
//       console.log(response.data);
//       // Close the modal on successful submission
//       setIsModalOpen(false);
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//     }
//   };

//   return (
//     <>
//       <section id="about-us" className="section-padding relative">
//         <div className="border-top-ornament">
//           <div className="ornament">
//             <img src="" alt="" />
//           </div>
//         </div>
//         <div className="w-full bg-[#F8F9FC] flex-custom-center">
//           <div className="flex flex-col md:flex-row relative w-[80%] items-center gap-[3rem] h-full">
//             <div className="h-full flex items-center justify-center">
//               <Parallax bgImage={card} strength={parallaxStrength}>
//                 <div className="md:h-[30rem] h-[25rem] md:w-[33rem] w-[100vw] bg-cover" />
//               </Parallax>
//             </div>

//             <div className="flex md:justify-center w-full relative h-full">
//               <div className="flex-custom-col items-center md:items-start justify-center gap-4 mt-10 py-4">
//                 <div className="col-row col-row-title medium text-shadow mb-2">
//                   <h2 className="text-black">
//                     Create your own
//                   </h2>
//                 </div>
//                 <div className="max-w-[90%] text-[1.5rem] space-y-6 py-2">
//                   <div className="md:text-left text-center w-full space-y-2">
//                     <p className="font-cormo font-medium text-black">
//                       Address: AYUSH Bhawan, B-Block, GPO Complex, INA, New
//                       Delhi - 110023, India
//                       <br />
//                       Phone Numbers: +91-11-24651950, +91-11-24651937
//                       <br />
//                       Email: For General Queries: webmanager-ayush@gov.in
//                     </p>
//                   </div>
//                 </div>
//                 <div
//                   className="btn w-[90%] btn-svg h-[3rem] border-[1px] border-black bg-transparent rounded-none hover:text-white hover:bg-black"
//                   onClick={() => setIsModalOpen(true)}
//                 >
//                   <div className="btn-content gap-3">
//                     <span className="">Create your own health card</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={`w-full ${isModalOpen ? "h-[1300px]" : "h-0"} flex justify-center`}>
//           {isModalOpen && (
//             <div className="flexbg-white p-8 rounded-md w-[90%] md:w-[80%] lg:w-[60%] max-h-[90vh]">
//               <h3 className="text-2xl font-semibold mb-10">
//                 Create Your Health Card
//               </h3>
//               <form className="space-y-4" onSubmit={handleSubmit}>
//                 <label className="block text-gray-700 font-semibold">
//                   Past medical records
//                 </label>
//                 <input
//                   type="text"
//                   name="past_medical_records"
//                   value={formData.past_medical_records}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded-md"
//                 />

//                 <label className="block text-gray-700 font-semibold">
//                   Vaccine name
//                 </label>
//                 <input
//                   type="text"
//                   name="vaccines"
//                   value={formData.vaccines}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded-md"
//                 />

//                 <label className="block text-gray-700 font-semibold">
//                   Test needed
//                 </label>
//                 <input
//                   type="text"
//                   name="tests_needed"
//                   value={formData.tests_needed}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded-md"
//                 />

//                 <label className="block text-gray-700 font-semibold">
//                   Emergency contact
//                 </label>
//                 <input
//                   type="text"
//                   name="emergency_contact"
//                   value={formData.emergency_contact}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded-md"
//                 />

//                 <label className="block text-gray-700 font-semibold">
//                   Relationship
//                 </label>
//                 <input
//                   type="text"
//                   name="relationship"
//                   value={formData.relationship}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded-md"
//                 />

//                 <div className="flex justify-end mt-4">
//                   <button
//                     type="button"
//                     className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
//                     onClick={() => setIsModalOpen(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     type="submit"
//                     className="bg-blue-500 text-white px-4 py-2 rounded-md"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Section1;
