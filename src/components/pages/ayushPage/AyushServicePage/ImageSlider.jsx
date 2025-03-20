// import { useState } from "react";

// const ImageSlider = () => {
//   const [treatment, setTreatment] = useState("all");
//   const [city, setCity] = useState("all");
//   const [budget, setBudget] = useState("any");

//   return (
//     <section
//       id="plans"
//       className="bg-[#F8F9FC] lg:pt-[var(--section-padding)] pb-[var(--section-padding)]"
//     >
//       <div className="container-custom flex flex-col gap-[5rem] items-center">
//         <div className="bg-[#003B6C] text-white p-5 rounded-3xl flex justify-between gap-5 items-center mt-5">
//           <span className="md:text-5xl text-2xl">Treatments and Cities</span>
//           <div className="flex gap-5">
//             <div className="flex flex-col w-[10rem] h-full items-center justify-center">
//               <span className="md:text-7xl text-5xl">26</span>
//               <span className="text-sm">Treatments</span>
//             </div>
//             <div className="flex flex-col w-[10rem] h-full items-center justify-center">
//               <span className="md:text-7xl text-5xl">12</span>
//               <span className="text-sm w-[1.5rem]">Cities</span>
//             </div>
//             <div className="flex flex-col w-[10rem] h-full items-center justify-center self-end">
//               <span className="md:text-7xl text-5xl">1443</span>
//               <span className="text-sm w-[1.5rem]">Hospitals</span>
//             </div>
//           </div>
//         </div>

//         <div className="w-[90%] grid md:grid-cols-3 gap-2">
//           <div className="flex flex-col w-[10rem]">
//             <span className="text-sm text-black">Select Treatment</span>
//             <select
//               name="cars"
//               id="cars"
//               className="w-[20rem] border border-black p-2"
//             >
//               {/*Generate Dynamicaly*/}

//               <option value="">All</option>
//               <option value="opel">Ayurveda</option>
//               <option value="audi">Homeopathy</option>
//               <option value="audi">Yoga & Naturopathy</option>

//               <option value="audi">Unani</option>

//             </select>
//           </div>
//           <div className="flex flex-col w-[10rem]">
//             <span className="text-sm text-black">Select City</span>
//             <select
//               name="cars"
//               id="cars"
//               className="w-[20rem] border border-black p-2"
//             >
//               {/*Generate Dynamicaly*/}
//               <option value="">All</option>
//               <option value="volvo">Mumbai</option>
//               <option value="saab">Pune</option>
//               <option value="opel">Bengaluru</option>
//               <option value="audi"></option>
//             </select>
//           </div>
//           <div className="flex flex-col w-[10rem]">
//             <span className="text-sm text-black">Select Budget</span>
//             <select
//               name="cars"
//               id="cars"
//               className="w-[20rem] border border-black p-2"
//             >
//               {/*Generate Dynamicaly*/}
//               <option value="">Any</option>
//               <option value="volvo">1L - 5L</option>
//               <option value="saab">5L - 10L</option>
//               <option value="opel">10L+</option>
//             </select>
//           </div>
//         </div>

//         <div className="w-[90%] h-[1000px] rounded-xl flex flex-col gap-3">
//           <div className="w-full flex flex-col md:flex md:flex-row md:justify-between gap-2">
//             <div className="flex gap-2 w-[2rem] items-center">
//               Show
//               <div>
//                 <select name="" id="" className="p-1 border border-black">
//                   <option value="">5</option>
//                   <option value="">10</option>
//                   <option value="">15</option>
//                 </select>
//               </div>
//               Entries
//             </div>
//             <div className="flex gap-2 h-[2rem] items-center">
//               Search :
//               <input
//                 type="text"
//                 name=""
//                 className="p-1 rounded-sm border border-black"
//                 placeholder="Search"
//               />
//             </div>
//           </div>
//           <div className="w-full bg-white h-[1000px] rounded-2xl flex flex-col gap-5 items-center p-2">
//             <div className="w-full h-[200px] border border-black rounded-md"></div>
//             <div className="w-full h-[200px] border border-black rounded-md"></div>
//             <div className="w-full h-[200px] border border-black rounded-md"></div>
//             <div className="w-full h-[200px] border border-black rounded-md"></div>
//             <div className="w-full h-[200px] border border-black rounded-md"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImageSlider;


import { useState, useEffect } from "react";
import axios from "axios";

const ImageSlider = () => {
  const [treatment, setTreatment] = useState("all");
  const [city, setCity] = useState("all");
  const [budget, setBudget] = useState("any");
  const [search, setSearch] = useState(""); // State for search query
  const [hospitals, setHospitals] = useState([]); // State for hospital data

  // Function to fetch hospitals based on filters and search query
  const fetchHospitals = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/ayush/hospitals", {
        params: { treatment, city, budget, search },
      });
      setHospitals(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching hospitals", error);
      setHospitals([]);
    }
  };

  // Fetch hospitals whenever filters or search query change
  useEffect(() => {
    fetchHospitals();
  }, [treatment, city, budget, search]);

  // Function to handle Enter key press for search input
  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchHospitals();
    }
  };

  return (
    <section
      id="plans"
      className="bg-[#F8F9FC] lg:pt-[var(--section-padding)] pb-[var(--section-padding)]"
    >
      <div className="container-custom flex flex-col gap-[5rem] items-center">
        <div className="bg-[#003B6C] text-white p-5 rounded-3xl flex justify-between gap-5 items-center mt-5">
          <span className="md:text-5xl text-2xl">Treatments and Cities</span>
          <div className="flex gap-5">
            <div className="flex flex-col w-[10rem] h-full items-center justify-center">
              <span className="md:text-7xl text-5xl">26</span>
              <span className="text-sm">Treatments</span>
            </div>
            <div className="flex flex-col w-[10rem] h-full items-center justify-center">
              <span className="md:text-7xl text-5xl">12</span>
              <span className="text-sm w-[1.5rem]">Cities</span>
            </div>
            <div className="flex flex-col w-[10rem] h-full items-center justify-center self-end">
              <span className="md:text-7xl text-5xl">1443</span>
              <span className="text-sm w-[1.5rem]">Hospitals</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="w-[90%] grid md:grid-cols-3 gap-2">
          <div className="flex flex-col w-[10rem]">
            <span className="text-sm text-black">Select Treatment</span>
            <select
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className="w-[20rem] border border-black p-2"
            >
              <option value="all">All</option>
              <option value="Ayurveda">Ayurveda</option>
              <option value="Homeopathy">Homeopathy</option>
              <option value="Yoga & Naturopathy">Yoga & Naturopathy</option>
              <option value="Unani">Unani</option>
              <option value="Siddha">Siddha</option>
            </select>
          </div>
          <div className="flex flex-col w-[10rem]">
            <span className="text-sm text-black">Select City</span>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-[20rem] border border-black p-2"
            >
              <option value="all">All</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Bengaluru">Bengaluru</option>
            </select>
          </div>
          <div className="flex flex-col w-[10rem]">
            <span className="text-sm text-black">Select Budget</span>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-[20rem] border border-black p-2"
            >
              <option value="any">Any</option>
              <option value="1L - 5L">1L - 5L</option>
              <option value="5L - 10L">5L - 10L</option>
              <option value="10L+">10L+</option>
            </select>
          </div>
        </div>

        {/* Display Filtered Hospitals */}
        <div className="w-[90%] h-[1000px] rounded-xl flex flex-col gap-3">
          <div className="w-full flex flex-col md:flex md:flex-row md:justify-between gap-2">
            <div className="flex gap-2 w-[2rem] items-center">
              Show
              <div>
                <select name="" id="" className="p-1 border border-black">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
              </div>
              Entries
            </div>
            <div className="flex gap-2 h-[2rem] items-center">
              Search :
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearchKeyPress}
                className="p-1 rounded-sm border border-black"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="w-full bg-white h-[1000px] rounded-2xl flex flex-col gap-5 items-center p-2">
            {hospitals.length > 0 ? (
              hospitals.map((hospital) => (
                <div
                  key={hospital._id}
                  className="w-full h-[200px] border border-black rounded-md p-4"
                >
                  <h3>{hospital.name}</h3>
                  <p>City: {hospital.city}</p>
                  <p>Treatment: {hospital.treatment}</p>
                  <p>Budget: {hospital.budget}</p>
                </div>
              ))
            ) : (
              <div>No hospitals found</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
