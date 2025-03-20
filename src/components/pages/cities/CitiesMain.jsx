import React from 'react';
import { NavLink } from "react-router-dom";
import marines from "../../../assets/mumbai/marine.jpg"
import Gateway from "../../../assets/mumbai/gateway.png"
import Sealink from "../../../assets/mumbai/sealink.png"
import fortis from "../../../assets/mumbai/fortis.jpg"
import kokilaben from "../../../assets/mumbai/kokilaben.png"
import wockhardt from "../../../assets/mumbai/wockhardt.jpg"
import neurology from "../../../assets/neurology.png";
import oncology from "../../../assets/oncology.png";
import transplant from "../../../assets/transplant.png";


const CitiesMain = () => {
    const cardData = [
        {
            image: Gateway,
            text: 'Gateway of India. An iconic monument symbolizing Mumbai’s rich history and one of the city’s top tourist attractions.'
        },
        {
            image: marines,
            text: 'Marine Drive. A scenic promenade along the coast, known for its stunning sunset views and vibrant atmosphere.'
        },
        {
            image: Sealink,
            text: 'The Bandra-Worli Sea Link is an iconic cable-stayed bridge that connects Bandra in the western suburbs to Worli in South Mumbai.'
        },
        {
            image: fortis,
            text: 'Fortis Hospital. A leading multi-specialty hospital offering cutting-edge medical treatments across various specialties.'
        },
        {
            image: kokilaben,
            text: 'Kokilaben Dhirubhai Ambani Hospital in Mumbai is a renowned multi-specialty healthcare institution, offering advanced medical treatments across a wide range of disciplines.'
        },
        {
            image: wockhardt,
            text: 'Wockhardt Mumbai Central Hospital is a renowned multi-specialty healthcare facility offering advanced medical care in various fields, including cardiology, neurology, and orthopedics.'
        },
        {
            image: neurology,
            text: 'Explore advanced neurology treatments tailored to diagnose, manage, and treat complex neurological conditions with precision and care.'
        },
        {
            image: oncology,
            text: 'Oncology. Advanced cancer care, including chemotherapy, radiation therapy, and cutting-edge surgical treatments.'
        },
        {
            image: transplant,
            text: 'Orthopedic Surgery. Specializing in joint replacements, trauma care, and spinal surgeries using the latest techniques.'
        },
    ];

    return (
        <section className='pt-[var(--section-padding)]'>
            {/* First heading and subheading */}
            <div className='industry-container'>
                <div className='flex justify-center w-full'>
                    <div className='flex flex-col text-center w-full flex-custom-center'>
                        <h2 className='text-4xl font-bold text-black mb-4'>Mumbai</h2>
                        <p className='text-2xl text-black mb-6 w-[80%]'>
                            Mumbai is a leading medical tourism destination with some of the best hospitals in India. 
                            It offers cutting-edge treatments across various specialties, and patients can also enjoy the city's 
                            vibrant culture and iconic landmarks.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tourist places */}
            <div className='relative py-20 w-full flex justify-center items-center'>
                <div className='flex flex-col gap-6 w-full justify-center items-center'>
                    <h3 className='text-3xl font-semibold text-black mb-4'>Top Tourist Places</h3>
                    <div className='md:flex md:flex-row flex flex-col justify-around w-[90%] gap-6'>
                        {cardData.slice(0, 3).map((card, colIndex) => (
                            <div key={colIndex} className='flip-card md:w-[30%] md:h-[15rem] w-full'>
                                <div className='flip-card-inner'>
                                    <div className='flip-card-front'>
                                        <img
                                            src={card.image}
                                            alt={`Image ${colIndex + 1}`}
                                            className='carousel-image w-full h-[20rem] object-cover rounded-lg'
                                        />
                                    </div>
                                    <div className='flip-card-back p-6 flex justify-center items-center'>
                                        <p className='text-white text-lg font-medium leading-relaxed'>{card.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hospitals */}
            <div className='relative py-20 w-full flex justify-center items-center'>
                <div className='flex flex-col gap-6 w-full justify-center items-center'>
                    <h3 className='text-3xl font-semibold text-black mb-4'>Hospitals in Mumbai</h3>
                    <div className='md:flex md:flex-row flex flex-col justify-around w-[90%] gap-6'>
                        {cardData.slice(3, 6).map((card, colIndex) => (
                            <div key={colIndex} className='flip-card md:w-[30%] md:h-[15rem] w-full'>
                                <div className='flip-card-inner'>
                                    <div className='flip-card-front'>
                                        <img
                                            src={card.image}
                                            alt={`Image ${colIndex + 4}`}
                                            className='carousel-image w-full h-[20rem] object-cover rounded-lg'
                                        />
                                    </div>
                                    <div className='flip-card-back p-6 flex justify-center items-center'>
                                        <p className='text-white text-lg font-medium leading-relaxed'>{card.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Treatments */}
            <div className='relative py-20 w-full flex justify-center items-center'>
                <div className='flex flex-col gap-6 w-full justify-center items-center'>
                    <h3 className='text-3xl font-semibold text-black mb-4'>Top Treatments</h3>
                    <div className='md:flex md:flex-row flex flex-col justify-around w-[90%] gap-6'>
                        {cardData.slice(6, 9).map((card, colIndex) => (
                            <div key={colIndex} className='flip-card md:w-[30%] md:h-[15rem] w-full'>
                                <div className='flip-card-inner'>
                                    <div className='flip-card-front flex justify-center items-center'>
                                        <img
                                            src={card.image}
                                            alt={`Image ${colIndex + 7}`}
                                            className='carousel-image w-[10rem] h-[20rem] object-contain rounded-lg'
                                        />
                                    </div>
                                    <div className='flip-card-back p-6 flex justify-center items-center'>
                                        <p className='text-white text-lg font-medium leading-relaxed'>{card.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <NavLink to='/app/delhi'>
            <div className='flex justify-center py-10'>
                <button
                    
                    className='bg-[#003B6C] text-white text-lg px-6 py-3 rounded-lg hover:bg-[#08599d] transition-colors'
                >
                    Next City
                </button>
            </div>
            </NavLink>
        </section>
    );
};

export default CitiesMain;
