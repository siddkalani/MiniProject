// import { useState, useEffect } from "react";
// import axios from "axios";

// const ImageSlider = () => {
//   const [treatment, setTreatment] = useState("all");
//   const [city, setCity] = useState("all");
//   const [budget, setBudget] = useState("any");
//   const [search, setSearch] = useState(""); // State for search query
//   const [hospitals, setHospitals] = useState([]);

//   // Function to fetch hospitals based on filters and search query
//   const fetchHospitals = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/api/hospitals", {
//         params: { treatment, city, budget, search },
//       });
//       console.log("Fetched hospitals response:", response); // Log the full response
//       console.log("Fetched hospitals data:", response.data); // Log the 
//       setHospitals(Array.isArray(response.data) ? response.data : []);
//     } catch (error) {
//       console.error("Error fetching hospitals", error);
//       setHospitals([]);
//     }
//   };

//   // Fetch hospitals whenever filters or search query change
//   useEffect(() => {
//     fetchHospitals();
//   }, [treatment, city, budget, search]);

//   // Function to handle Enter key press
//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       fetchHospitals();
//     }
//   };

//   return (
//     <section
//       id="plans"
//       className="bg-[#F8F9FC] lg:pt-[var(--section-padding)] pb-[var(--section-padding)]"
//     >
//       <div className="container-custom flex flex-col gap-[5rem] items-center">
//         {/* Filters */}
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
//               value={treatment}
//               onChange={(e) => setTreatment(e.target.value)}
//               className="w-[20rem] border border-black p-2"
//             >
//               <option value="all">All</option>
//               <option value="Orthopedic">Orthopedic</option>
//               <option value="Cardiovascular">Cardiovascular</option>
//               <option value="Ayurveda">Ayurveda</option>
//               <option value="Hair Transplant">Hair Transplant</option>
//             </select>
//           </div>

//           <div className="flex flex-col w-[10rem]">
//             <span className="text-sm text-black">Select City</span>
//             <select
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               className="w-[20rem] border border-black p-2"
//             >
//               <option value="all">All</option>
//               <option value="Mumbai">Mumbai</option>
//               <option value="Pune">Pune</option>
//               <option value="Bengaluru">Bengaluru</option>
//             </select>
//           </div>

//           <div className="flex flex-col w-[10rem]">
//             <span className="text-sm text-black">Select Budget</span>
//             <select
//               value={budget}
//               onChange={(e) => setBudget(e.target.value)}
//               className="w-[20rem] border border-black p-2"
//             >
//               <option value="any">Any</option>
//               <option value="1L - 5L">1L - 5L</option>
//               <option value="5L - 10L">5L - 10L</option>
//               <option value="10L+">10L+</option>
//             </select>
//           </div>
//         </div>

//         {/* Display Filtered Hospitals */}
//         <div className="w-[90%] max-h-[500px] rounded-xl flex flex-col gap-3 overflow-y-auto">
//           <div className="w-full flex flex-col md:flex md:flex-row md:justify-between gap-2 overflow-y-auto">
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
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 onKeyDown={handleSearchKeyPress}
//                 className="p-1 rounded-sm border border-black"
//                 placeholder="Search"
//               />
//             </div>
//           </div>

//           {/* Scrollable Hospital List */}
//           <div className="w-full bg-white rounded-2xl flex flex-col gap-5 items-center p-2">
//             {hospitals.length > 0 ? (
//               hospitals.map((hospital) => (
//                 <div
//                   key={hospital._id}
//                   className="w-full h-[200px] border border-black rounded-md p-4"
//                 >
//                   <h3>{hospital.name}</h3>
//                   <p>City: {hospital.city}</p>
//                   <p>Treatment: {hospital.treatment}</p>
//                   <p>Budget: {hospital.budget}</p>
//                   <button
//           // onClick={() => handleAddToCart(hospital)}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
//         >
//           Add to Cart
//         </button>

//                 </div>
//               ))
//             ) : (
//               <div>No hospitals found</div>
//             )}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ImageSlider;




// import { useState, useEffect } from "react";
// import axios from "axios";

// const ImageSlider = () => {
//   const [treatment, setTreatment] = useState("all");
//   const [city, setCity] = useState("all");
//   const [budget, setBudget] = useState("any");
//   const [search, setSearch] = useState(""); // State for search query
//   const [hospitals, setHospitals] = useState([]);
//   const [cart, setCart] = useState(new Set()); // State for cart, using a Set to avoid duplicates

//   // Function to fetch hospitals based on filters and search query
//   const fetchHospitals = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/api/hospitals", {
//         params: { treatment, city, budget, search },
//       });
//       setHospitals(Array.isArray(response.data) ? response.data : []);
//     } catch (error) {
//       console.error("Error fetching hospitals", error);
//       setHospitals([]);
//     }
//   };

//   // Fetch hospitals whenever filters or search query change
//   useEffect(() => {
//     fetchHospitals();
//   }, [treatment, city, budget, search]);

//   // Function to handle Enter key press
//   const handleSearchKeyPress = (e) => {
//     if (e.key === "Enter") {
//       fetchHospitals();
//     }
//   };

//   // Function to handle adding/removing from cart
//   const handleCartClick = (hospital) => {
//     setCart((prevCart) => {
//       const newCart = new Set(prevCart);
//       if (newCart.has(hospital._id)) {
//         newCart.delete(hospital._id); // Remove from cart
//       } else {
//         newCart.add(hospital._id); // Add to cart
//       }
//       return newCart;
//     });
//   };

//   // Function to check if a hospital is in the cart
//   const isInCart = (hospitalId) => cart.has(hospitalId);

//   return (
//     <section
//       id="plans"
//       className="bg-[#F8F9FC] lg:pt-[var(--section-padding)] pb-[var(--section-padding)]"
//     >
//       <div className="container-custom flex flex-col gap-[5rem] items-center">
//         {/* Filters */}
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
//               value={treatment}
//               onChange={(e) => setTreatment(e.target.value)}
//               className="w-[20rem] border border-black p-2"
//             >
//               <option value="all">All</option>
//               <option value="Orthopedic">Orthopedic</option>
//               <option value="Cardiovascular">Cardiovascular</option>
//               <option value="Ayurveda">Ayurveda</option>
//               <option value="Hair Transplant">Hair Transplant</option>
//             </select>
//           </div>

//           <div className="flex flex-col w-[10rem]">
//             <span className="text-sm text-black">Select City</span>
//             <select
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               className="w-[20rem] border border-black p-2"
//             >
//               <option value="all">All</option>
//               <option value="Mumbai">Mumbai</option>
//               <option value="Pune">Pune</option>
//               <option value="Bengaluru">Bengaluru</option>
//             </select>
//           </div>

//           <div className="flex flex-col w-[10rem]">
//             <span className="text-sm text-black">Select Budget</span>
//             <select
//               value={budget}
//               onChange={(e) => setBudget(e.target.value)}
//               className="w-[20rem] border border-black p-2"
//             >
//               <option value="any">Any</option>
//               <option value="1L - 5L">1L - 5L</option>
//               <option value="5L - 10L">5L - 10L</option>
//               <option value="10L+">10L+</option>
//             </select>
//           </div>
//         </div>

//         {/* Display Filtered Hospitals */}
//         <div className="w-[90%] max-h-[500px] rounded-xl flex flex-col gap-3 overflow-y-auto">
//           <div className="w-full flex flex-col md:flex md:flex-row md:justify-between gap-2 overflow-y-auto">
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
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 onKeyDown={handleSearchKeyPress}
//                 className="p-1 rounded-sm border border-black"
//                 placeholder="Search"
//               />
//             </div>
//           </div>

//           {/* Scrollable Hospital List */}
//           <div className="w-full bg-white rounded-2xl flex flex-col gap-5 items-center p-2">
//             {hospitals.length > 0 ? (
//               hospitals.map((hospital) => (
//                 <div
//                   key={hospital._id}
//                   className="w-full h-[200px] border border-black rounded-md p-4"
//                 >
//                   <h3>{hospital.name}</h3>
//                   <p>City: {hospital.city}</p>
//                   <p>Treatment: {hospital.treatment}</p>
//                   <p>Budget: {hospital.budget}</p>
//                   <button
//                     onClick={() => handleCartClick(hospital)}
//                     className={`bg-blue-500 text-white px-4 py-2 rounded-md mt-2 ${
//                       isInCart(hospital._id) ? "bg-red-500" : ""
//                     }`}
//                   >
//                     {isInCart(hospital._id) ? "Remove from Cart" : "Add to Cart"}
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <div>No hospitals found</div>
//             )}
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
  const [mainCategory, setMainCategory] = useState("Hospital Booking");
  const [treatment, setTreatment] = useState("all");
  const [city, setCity] = useState("all");
  const [budget, setBudget] = useState("any");
  const [search, setSearch] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [ayushhospitals, setayushHospitals] = useState([]);
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);
  // const [sightseeing, setSightseeing] = useState([]);
  const [cart, setCart] = useState(new Set());
  const [flightDetails, setFlightDetails] = useState({
    from: "",
    to: "",
    depart: "",
    return: "",
    travellers: 1,
    cabinClass: "Economy",
  });
  const [hotelDetails, setHotelDetails] = useState({
    where: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    rooms: 1,
  });

  // Function to fetch data based on filters and search query
  const fetchData = async () => {
    try {
      let endpoint = "";
      let params = {};

      // Define the endpoint and query params based on the selected main category
      switch (mainCategory) {
        case "Hospital Booking":
          endpoint = "hospitals";
          params = { treatment, city, budget, search };
          break;
        case "Holistic Care":
          endpoint = "ayush/hospitals";
          params = { treatment, city, budget, search };
          break;
        case "Flight":
          endpoint = "flights";
          params = {
            from: flightDetails.from,
            to: flightDetails.to,
            depart: flightDetails.depart,
            return: flightDetails.return,
            travellers: flightDetails.travellers,
            cabinClass: flightDetails.cabinClass,
          };
          break;
        case "Hotels":
          endpoint = "hotels";
          params = {
            where: hotelDetails.where,
            checkIn: hotelDetails.checkIn,
            checkOut: hotelDetails.checkOut,
            guests: hotelDetails.guests,
            rooms: hotelDetails.rooms,
          };
          break;
        // case "Sightseeing":
        //   endpoint = "sightseeing";
        //   params = { city };
        //   break;
        default:
          return; // Exit if no valid category is selected
      }

      // Send the request to the backend
      const response = await axios.get(`http://localhost:3000/api/${endpoint}`, { params });

      // Handle the response based on the category
      switch (mainCategory) {
        case "Hospital Booking":
          setHospitals(Array.isArray(response.data) ? response.data : []);
          console.log("Fetched hospitals response:", response);
          break;
        case "Holistic Care":
          setayushHospitals(Array.isArray(response.data) ? response.data : []);
          console.log("Fetched hospitals response:", response);
          break;
        case "Flight":
          setFlights(Array.isArray(response.data) ? response.data : []);
          break;
        case "Hotels":
          setHotels(Array.isArray(response.data) ? response.data : []);
          break;
        // case "Sightseeing":
        //   setSightseeing(Array.isArray(response.data) ? response.data : []);
        //   break;
        default:
          break;
      }
    } catch (error) {
      console.error(`Error fetching data for ${mainCategory}`, error);
      // Clear the relevant state based on category
      switch (mainCategory) {
        case "Hospital Booking":
          setHospitals([]);
          break;
        case "Holistic Care":
          setayushHospitals([]);
          break;
        case "Flight":
          setFlights([]);
          break;
        case "Hotels":
          setHotels([]);
          break;
        // case "Sightseeing":
        //   setSightseeing([]);
        //   break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [treatment, city, budget, search, flightDetails, hotelDetails, mainCategory]);

  // Function to handle Enter key press
  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchData();
    }
  };

  // Function to handle adding/removing from cart
  const handleCartClick = (item) => {
    setCart((prevCart) => {
      const newCart = new Set(prevCart);
      if (newCart.has(item._id)) {
        newCart.delete(item._id);
      } else {
        newCart.add(item._id);
      }
      return newCart;
    });
  };

  // Function to check if an item is in the cart
  const isInCart = (itemId) => cart.has(itemId);

  return (
    <section
      id="plans"
      className="bg-[#F8F9FC] lg:pt-[var(--section-padding)] pb-[var(--section-padding)]"
    >
      <div className="container-custom flex flex-col gap-[5rem] items-center">
        {/* Main Category Selection */}
        <div className="bg-[#003B6C] text-white p-5 rounded-3xl flex justify-between gap-5 items-center mt-5">
          <span className="md:text-5xl text-2xl">Main Category</span>
          <div className="flex gap-5">
            <div className="flex flex-col w-[15rem]">
              <span className="text-sm text-white">Select Category</span>
              <select
                value={mainCategory}
                onChange={(e) => setMainCategory(e.target.value)}
                className="w-full border border-white p-2 bg-[#003B6C] text-white"
              >
                <option value="Hospital Booking">Hospital Booking</option>
                <option value="Holistic Care">Holistic Care</option>
                <option value="Flight">Flight</option>
                <option value="Hotels">Hotels</option>
                {/* <option value="Sightseeing">Sightseeing</option> */}
              </select>
            </div>
          </div>
        </div>

        {/* Subcategory Filters */}
        {(mainCategory === "Hospital Booking" || mainCategory === "Holistic Care") && (
          <div className="w-[90%] grid md:grid-cols-3 gap-2 mt-5">
            <div className="flex flex-col w-[10rem]">
              <span className="text-sm text-black">Select Treatment</span>
              <select
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className="w-[20rem] border border-black p-2"
              >
                <option value="all">All</option>
                <option value="Orthopedic">Orthopedic</option>
                <option value="Cardiovascular">Cardiovascular</option>
                <option value="Ayurveda">Ayurveda</option>
                <option value="Hair Transplant">Hair Transplant</option>
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
        )}

        {mainCategory === "Flight" && (
          <div className="w-[90%] grid md:grid-cols-3 gap-2 mt-5">
            <div className="flex flex-col w-[10rem]">
              <span className="text-sm text-black">From</span>
              <input
                type="text"
                value={flightDetails.from}
                onChange={(e) => setFlightDetails({ ...flightDetails, from: e.target.value })}
                className="w-[20rem] border border-black p-2"
              />
            </div>
            <div className="flex flex-col w-[10rem]">
              <span className="text-sm text-black">To</span>
              <input
                type="text"
                value={flightDetails.to}
                onChange={(e) => setFlightDetails({ ...flightDetails, to: e.target.value })}
                className="w-[20rem] border border-black p-2"
              />
            </div>
            <div className="flex flex-col w-[10rem]">
              <span className="text-sm text-black">Depart</span>
              <input
                type="date"
                value={flightDetails.depart}
                onChange={(e) => setFlightDetails({ ...flightDetails, depart: e.target.value })}
                className="w-[20rem] border border-black p-2"
              />
            </div>
            <div className="flex flex-col w-[10rem]">
              <span className="text-sm text-black">Return</span>
              <input
                type="date"
                value={flightDetails.return}
                onChange={(e) => setFlightDetails({ ...flightDetails, return: e.target.value })}
                className="w-[20rem] border border-black p-2"
              />
            </div>
            <div className="flex flex-col w-[10rem]">
              <span className="text-sm text-black">Travelers</span>
              <input
                type="number"
                value={flightDetails.travellers}
                onChange={(e) => setFlightDetails({ ...flightDetails, travellers: e.target.value })}
                className="w-[20rem] border border-black p-2"
              />
            </div>
            <div className="flex flex-col w-[10rem]">
              <span className="text-sm text-black">Cabin Class</span>
              <select
                value={flightDetails.cabinClass}
                onChange={(e) => setFlightDetails({ ...flightDetails, cabinClass: e.target.value })}
                className="w-[20rem] border border-black p-2"
              >
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First">First</option>
              </select>
            </div>
          </div>
        )}

        {mainCategory === "Hotels" && (
          <div className="w-[90%] grid md:grid-cols-3 gap-2 mt-5">
            <div className="flex flex-col w-[10rem]">
              <span className="text-sm text-black">Where</span>
              <input
                type="text"
                value={hotelDetails.where}
                onChange={(e) => setHotelDetails({ ...hotelDetails, where: e.target.value })}
                className="w-[20rem] border border-black p-2"
              />
            </div>
            <div className="flex flex-col w-[10rem]">
              <span className="text-sm text-black">Check-In</span>
              <input
                type="date"
                value={hotelDetails.checkIn}
                onChange={(e) => setHotelDetails({ ...hotelDetails, checkIn: e.target.value })}
                className="w-[20rem] border border-black p-2"
              />
            </div>
            <div className="flex flex-col w-[10rem]">
              <span className="text-sm text-black">Check-Out</span>
              <input
                type="date"
                value={hotelDetails.checkOut}
                onChange={(e) => setHotelDetails({ ...hotelDetails, checkOut: e.target.value })}
                className="w-[20rem] border border-black p-2"
              />
            </div>
            <div className="flex flex-col w-[10rem]">
              <span className="text-sm text-black">Guests</span>
              <input
                type="number"
                value={hotelDetails.guests}
                onChange={(e) => setHotelDetails({ ...hotelDetails, guests: e.target.value })}
                className="w-[20rem] border border-black p-2"
              />
            </div>
            <div className="flex flex-col w-[10rem]">
              <span className="text-sm text-black">Rooms</span>
              <input
                type="number"
                value={hotelDetails.rooms}
                onChange={(e) => setHotelDetails({ ...hotelDetails, rooms: e.target.value })}
                className="w-[20rem] border border-black p-2"
              />
            </div>
          </div>
        )}

        {/* {mainCategory === "Sightseeing" && (
          <div className="w-[90%] mt-5">
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
          </div>
        )} */}

        {/* Display data based on the main category */}
        {mainCategory === "Hospital Booking" ? (
          <div className="w-[90%] mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hospitals.map((hospital) => (
              <div key={hospital._id} className="border border-gray-200 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{hospital.treatment}</h3>
                <p>{hospital.city}</p>
                <p>{hospital.budget}</p>
                <p>{hospital.hospital.name}</p>
                <button
                  onClick={() => handleCartClick(hospital)}
                  className={`mt-2 px-4 py-2 ${isInCart(hospital._id) ? "bg-red-500" : "bg-blue-500"} text-white rounded`}
                >
                  {isInCart(hospital._id) ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        ):
        mainCategory === "Holistic Care" ? (
          <div className="w-[90%] mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ayushhospitals.map((hospital) => (
              <div key={hospital._id} className="border border-gray-200 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{hospital.treatment}</h3>
                <p>{hospital.city}</p>
                <p>{hospital.budget}</p>
                <p>{hospital.hospital.name}</p>
                <button
                  onClick={() => handleCartClick(hospital)}
                  className={`mt-2 px-4 py-2 ${isInCart(hospital._id) ? "bg-red-500" : "bg-blue-500"} text-white rounded`}
                >
                  {isInCart(hospital._id) ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        ) 
          : mainCategory === "Flight" ? (
          <div className="w-[90%] mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {flights.map((flight) => (
              <div key={flight._id} className="border border-gray-200 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{flight.airlines}</h3>
                <p>{flight.from} to {flight.to }</p>
                <p>Depart: {flight.depart}  Return:{ flight.return}</p>
                <p>Rs{flight.price} </p>
                <p>{flight.airline} </p>
                <button
                  onClick={() => handleCartClick(flight)}
                  className={`mt-2 px-4 py-2 ${isInCart(flight._id) ? "bg-red-500" : "bg-blue-500"} text-white rounded`}
                >
                  {isInCart(flight._id) ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        ) : mainCategory === "Hotels" ? (
          <div className="w-[90%] mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hotels.map((hotel) => (
              <div key={hotel._id} className="border border-gray-200 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{hotel.name}</h3>
                <p>Location: {hotel.location}</p>
                <p>Price Per Night: {hotel.pricePerNight}</p>
                <button
                  onClick={() => handleCartClick(hotel)}
                  className={`mt-2 px-4 py-2 ${isInCart(hotel._id) ? "bg-red-500" : "bg-blue-500"} text-white rounded`}
                >
                  {isInCart(hotel._id) ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        // ) : mainCategory === "Sightseeing" ? (
        //   <div className="w-[90%] mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        //     {sightseeing.map((site) => (
        //       <div key={site._id} className="border border-gray-200 p-4 rounded-lg">
        //         <h3 className="text-lg font-semibold">{site.name}</h3>
        //         <p>{site.description}</p>
        //         <button
        //           onClick={() => handleCartClick(site)}
        //           className={`mt-2 px-4 py-2 ${isInCart(site._id) ? "bg-red-500" : "bg-blue-500"} text-white rounded`}
        //         >
        //           {isInCart(site._id) ? "Remove from Cart" : "Add to Cart"}
        //         </button>
        //       </div>
        //     ))}
        //   </div>
            ) :
              null}
      </div>
    </section>
  );
};

export default ImageSlider;
