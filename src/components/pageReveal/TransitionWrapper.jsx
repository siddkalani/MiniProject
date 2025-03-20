import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const TransitionWrapper = ({ children }) => {
  const containerRef = useRef(null);
  const [transitionComplete, setTransitionComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setTransitionComplete(true) // Trigger transition complete state
    });

    // PageReveal Animation
    tl.to(containerRef.current, {
      y: '-100vh',
      duration: 1,
      ease: 'power2.inOut',
    })
      .to(containerRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => navigate('/main') // Navigate to /main route after transition
      });
  }, [navigate]);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        ref={containerRef}
        className={`absolute w-full h-full bg-white transition-transform duration-1000 ease-in-out ${transitionComplete ? 'opacity-100' : 'opacity-0'}`}
        style={{
          clipPath: 'inset(100% 0% 0% 0%)',
          transition: 'clip-path 1s ease-in-out'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TransitionWrapper;
