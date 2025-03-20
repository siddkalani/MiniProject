import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PageReveal = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        window.location.href = "/app"; // Use href for a smooth redirect
      }
    });

    // Image and Text Reveal Animation with Enhanced Effects
    tl.fromTo(
      imageRef.current,
      { y: 100, opacity: 0, scale: 1.5 },
      { y: 0, opacity: 1, scale: 1.05, duration: 1, ease: 'power4.out' }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power4.out' },
        '-=0.5'
      )
      .to(textRef.current, {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power4.inOut',
      })
      .to(containerRef.current, {
        backgroundColor: '#fff3e0',
        duration: 1,
        ease: 'power2.inOut',
      }, '-=1')
      .to(containerRef.current, {
        y: '-100vh',
        duration: 0.8,
        delay: 0.5,
        ease: 'power2.inOut',
      });

  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Image and Text Section */}
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-screen h-screen mx-auto">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              ref={imageRef}
              src=""
              alt="Jewelry"
              className="w-full h-full object-cover filter"
            />
          </div>
          <h1
            ref={textRef}
            className="relative z-10 flex flex-col items-start justify-start h-full font-rollgates text-4xl md:text-6xl font-bold tracking-widest text-shadow-lg bg-gradient-to-r from-white via-gray-200 to-gray-200 mt-[4rem] ml-[4rem] bg-clip-text text-transparent"
          >
            <br className="hidden md:block" />
            <span className="drop-shadow-[2px_2px_4px_rgba(255,255,255,0.3)]"></span>
          </h1>

        </div>
      </div>

    </div>
  );
};

export default PageReveal;
