'use client';

import { useRef, useEffect } from 'react';
import Carousel from './carousel'; // pastikan path-nya sesuai

export default function CarouselWrapper() {
  const scrollRef = useRef();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 20); // adjust speed here
    return () => clearInterval(interval);
  }, []);

  const items = Array(5).fill(null); // render 6 Carousel items

  return (

    <div className="w-full overflow-x-auto">
      <div
        ref={scrollRef}
        className="flex w-max whitespace-nowrap w-full overflow-x-scroll scrollbar-hide"
      >
        {[...items, ...items].map((_, i) => (
          <div key={i} className="mx-2">
            <Carousel />
            <p className="text-black text-center">makan</p>
          </div>
        ))}
      </div>
    </div>
    
  );
}
