import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Section1 from './Section1';

const sections = [
  {
    id: '#1',
    title: 'Centralized Records',
    content: 'Eliminates the hassle of managing scattered medical documents.',
  },
  {
    id: '#2',
    title: 'Secure Data Storage',
    content: 'Physical, mental, and spiritual practices aimed at achieving harmony between mind, body, and soul',
  },
  {
    id: '#3',
    title: 'Easy Access',
    content: 'Provides quick and convenient access to medical history anytime.',
  },
  {
    id: '#4',
    title: 'Streamlined Treatment Process	',
    content: 'Simplifies sharing of medical data with healthcare providers.',
  },
];

const Section2 = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  return (
    <div className='w-full flex-custom-center h-full relative section-padding bg-[#003B6C] overflow-hidden'>
      <section className="big-label-text flex items-center justify-center w-[90%]">
        <div>
          <div className="mb-14 | sm:mb-16 md:mb-20 | lg:mb-24">
            <span className="text-xl opacity-50 text-white">
             Health Card
            </span>
            <h3
              className="sectionHeading sectionHeading--medium text-white"
              style={{
                margin: '0',
                textAlign: 'left'
              }}
            >
             Unlock seamless healthcare management with the HealGrimage Health Card, designed to centralize and secure all your medical records in one place.
            </h3>
          </div>

          {sections.map((section, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-x-16 justify-between border-t border-white border-opacity-25 mt-9 mb-14 pt-8 | sm:flex-row sm:mb-16 sm:pt-10 | |  |"
              style={{
                maxWidth: '1172px'
              }}
            >
              <h2
                className="big-label-text__heading text-white font-medium relative sectionHeading sectionHeading--left sectionHeading--big z-10 w-5/12 lg:max-w-xl mb-8 sm:m-0"
                style={{
                  maxWidth: '582px'
                }}
                data-aos="fade-right"
              >
                {section.title}
              </h2>
              <div
                className="Wysiwyg Wysiwyg--medium text-xl flex-custom-center  Wysiwyg--light-bg w-full z-10 | lg:w-5/12"
                data-aos="fade-left"
              >
                <p className='text-white text-xl'>
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Section2;
