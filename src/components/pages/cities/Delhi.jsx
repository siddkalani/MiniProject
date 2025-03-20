import VideoPlayerPage from "../VR/VideoPlayerPage";
import tomb from "../../../assets/delhi/tomb.jpeg";
import akshardham from "../../../assets/delhi/akshardham.jpg";
import fort from "../../../assets/delhi/fort.jpg";
import aiims from "../../../assets/delhi/aiims.jpg";
import fortis from "../../../assets/delhi/fortis.jpg";
import medanta from "../../../assets/delhi/medanta.jpg";
import cardiology from "../../../assets/cardiology.png";
import oncology from "../../../assets/oncology.png";
import transplant from "../../../assets/transplant.png";

const Delhi = () => {
  const cardData = [
    {
      image: tomb,
      text: "Commissioned by Humayun’s widow, this stunning garden tomb in Delhi is a masterpiece of Mughal architecture and a precursor to the Taj Mahal. Its grand design, Persian-inspired elements, and expansive gardens make it a significant historical landmark.",
    },
    {
      image: akshardham,
      text: "A modern architectural marvel in Delhi, Akshardham Temple showcases intricate carvings and displays Indias ancient art, culture, and spirituality. The temple complex includes beautiful gardens, musical fountains, and a cultural boat ride.",
    },
    {
      image: fort,
      text: "A UNESCO World Heritage Site in Delhi, the Red Fort is a magnificent symbol of Mughal architecture and Indias struggle for independence. Built by Emperor Shah Jahan in 1648, it served as the main residence of Mughal emperors for nearly 200 years",
    },
    {
      image: fortis,
      text: "Fortis Memorial Research Institute (FMRI) is a multi-specialty tertiary care hospital located in Gurgaon, Haryana. It is renowned for offering advanced medical treatments across specialties, with cutting-edge technology and expert medical professionals.",
    },
    {
      image: aiims,
      text: "AIIMS (All India Institute of Medical Sciences), Delhi is a premier medical institution and hospital in India, renowned for providing world-class healthcare services, cutting-edge research, and advanced medical education.",
    },
    {
      image: medanta,
      text: "Medanta - The Medicity is a renowned multi-specialty hospital located in Gurgaon, Haryana, known for offering advanced medical treatments across various specialties. It is equipped with cutting-edge technology and world-class infrastructure, providing comprehensive healthcare services.  ",
    },
    {
      image: cardiology,
      text: "Cardiac Surgery. Offering world-class treatment for heart conditions, including bypass surgery, angioplasty, and valve replacements.",
    },
    {
      image: oncology,
      text: "Oncology. Advanced cancer care, including chemotherapy, radiation therapy, and cutting-edge surgical treatments.",
    },
    {
      image: transplant,
      text: "Orthopedic Surgery. Specializing in joint replacements, trauma care, and spinal surgeries using the latest techniques.",
    },
  ];

  return (
    <section className="pt-[var(--section-padding)] overflow-hidden">
      {/* First heading and subheading */}
      <div className="industry-container">
        <div className="w-screen flex flex-col items-center justify-center">
          <div className="flex flex-col text-center w-full flex-custom-center">
            <h2 className="text-5xl text-black mb-4 font-rale">Delhi</h2>
            <p className="text-2xl text-black mb-6 font-rale w-[80%]">
              Delhi is a top destination for medical tourism with world-class
              hospitals offering cutting-edge treatments. Visitors can also
              explore the city's vibrant culture and historical landmarks.
            </p>
          </div>

          {/* Cultural Insights */}
          <div className="w-[80%] my-5 text-center">
            <h2 className="text-5xl font-rale">From the Local Guides</h2>
            <p className="font-rale mt-3 text-lg">
              Delhi’s culture is a vibrant mix of tradition, diversity, and
              lively street life that you’ll experience in every corner. As a
              local guide would tell you, the heart of the city beats through
              its bustling markets like{" "}
              <span className="font-bold">Sarojini Nagar</span> and{" "}
              <span className="font-bold">Chandni Chowk</span>, where you can
              find everything from traditional garments to handcrafted jewelry,
              while the aroma of street food like chaat, parathas, and kebabs
              fills the air.
              <br />
              <br />
              Delhi’s food culture is a reflection of its people, with
              influences from all over India – so don’t miss out on local
              favorites like <span className="font-bold">
                butter chicken
              </span>{" "}
              or a refreshing plate of golgappas.
              <br />
              <br />
              The city's culture is also deeply rooted in its religious
              diversity, with historic temples, mosques, and churches standing
              as symbols of harmony. Whether it’s the peaceful calm of{" "}
              <span className="font-bold">Bangla Sahib Gurudwara</span> or the
              grandeur of the <span className="font-bold">Lotus Temple</span>,
              you’ll see the spiritual side of the city coexisting with its
              fast-paced urban life.
              <br />
              <br />
              Festivals in Delhi are a true spectacle – whether it’s the vibrant
              colors of Holi or the grand lights of Diwali, locals take pride in
              their festive spirit. A walk through the city will show you how
              ancient traditions blend effortlessly with modern culture, making
              Delhi an unforgettable cultural experience.
            </p>
          </div>
        </div>
      </div>

      {/* Tourist places */}
      <div className="relative py-20 w-full flex justify-center items-center">
        <div className="flex flex-col gap-6 w-full justify-center items-center">
          <h3 className="text-3xl font-semibold text-black mb-4">
            Top Tourist Places
          </h3>
          <div className="md:flex md:flex-row flex flex-col justify-around w-[90%] gap-6">
            {cardData.slice(0, 3).map((card, colIndex) => (
              <div
                key={colIndex}
                className="flip-card md:w-[30%] md:h-[15rem] w-full"
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={card.image}
                      alt={`Image ${colIndex + 1}`}
                      className="carousel-image w-full h-[20rem] object-cover rounded-lg"
                    />
                  </div>
                  <div className="flip-card-back p-6 flex justify-center items-center">
                    <p className="text-white text-lg font-medium leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hospitals */}
      <div className="relative py-20 w-full flex justify-center items-center">
        <div className="flex flex-col gap-6 w-full justify-center items-center">
          <h3 className="text-3xl font-semibold text-black mb-4">
            Hospitals in Delhi
          </h3>
          <div className="md:flex md:flex-row flex flex-col justify-around w-[90%] gap-6">
            {cardData.slice(3, 6).map((card, colIndex) => (
              <div
                key={colIndex}
                className="flip-card md:w-[30%] md:h-[15rem] w-full"
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={card.image}
                      alt={`Image ${colIndex + 4}`}
                      className="carousel-image w-full h-[20rem] object-cover rounded-lg"
                    />
                  </div>
                  <div className="flip-card-back p-6 flex justify-center items-center">
                    <p className="text-white text-lg font-medium leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-screen h-fit flex flex-col items-center justify-center gap-10 rounded-2xl mt-5 bg-[#F1F5F9]">
            <h4 className="text-black font-rale mt-[2rem]">
              Explore our latest VR exploration feature
            </h4>
            <div className="w-[70%]">
              <VideoPlayerPage />
            </div>
          </div>
        </div>
      </div>

      {/* Treatments */}
      <div className="relative py-20 w-full flex justify-center items-center">
        <div className="flex flex-col gap-6 w-full justify-center items-center">
          <h3 className="text-3xl font-semibold text-black mb-4">
            Top Treatments
          </h3>
          <div className="md:flex md:flex-row flex flex-col justify-around w-[90%] gap-6">
            {cardData.slice(6, 9).map((card, colIndex) => (
              <div
                key={colIndex}
                className="flip-card md:w-[30%] md:h-[15rem] w-full"
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front flex justify-center items-center">
                    <img
                      src={card.image}
                      alt={`Image ${colIndex + 7}`}
                      className="carousel-image w-[10rem] h-[20rem] object-contain rounded-lg"
                    />
                  </div>
                  <div className="flip-card-back p-6 flex justify-center items-center">
                    <p className="text-white text-lg font-medium leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delhi;
