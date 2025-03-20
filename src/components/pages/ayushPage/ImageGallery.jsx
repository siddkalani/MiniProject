import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const sections = [
  {
    id: '#1',
    title: 'Ayurveda',
    content: 'Ancient system of medicine that focuses on balance in bodily systems through diet, herbal treatment, and yogic breathing.',
  },
  {
    id: '#2',
    title: 'Yoga',
    content: 'Physical, mental, and spiritual practices aimed at achieving harmony between mind, body, and soul',
  },
  {
    id: '#3',
    title: 'Unani',
    content: 'Based on the teachings of Hippocrates and Galen, it involves the use of herbal remedies and therapeutic techniques for maintaining health',
  },
  {
    id: '#4',
    title: 'Siddha',
    content: 'A traditional system of healing that originated in Tamil Nadu, focusing on the concept of balance among bodily humors and elements.',
  },
  {
    id: '#5',
    title: 'Homeopathy',
    content: 'WA medical system based on the belief that the body can cure itself using tiny amounts of natural substanceshether buying or selling, we help you get the deal done with our comprehensive range of transaction advisory services.',
  },
  
];

const Solutions = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  return (
    <div className='w-full flex-custom-center h-full relative section-padding bg-[#003B6C] overflow-hidden'>
      <section className="big-label-text flex items-center justify-center w-[90%]">
        <div>
          <div className="mb-14 | sm:mb-16 md:mb-20 | lg:mb-24">
            <span className="text-xl opacity-50 text-white">
              Our Services
            </span>
            <h3
              className="sectionHeading sectionHeading--medium text-white"
              style={{
                margin: '0',
                textAlign: 'left'
              }}
            >
             Ayush India refers to traditional Indian systems of medicine, particularly Ayurveda, Yoga, Unani, Siddha, and Homeopathy, collectively known as AYUSH.
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
                <p className='text-white'>
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

export default Solutions;
