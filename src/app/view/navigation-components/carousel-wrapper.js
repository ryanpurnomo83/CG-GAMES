'use client';

import { useRef, useEffect } from 'react';
import Carousel from '../layout-components/carousel';
import { usePage } from '../page-context';

export default function CarouselWrapper() {
  const scrollRef = useRef();
  const { setCurrentPage, setSelectedGame } = usePage();
  const games = ["Drawing Game", "Mix Match Game", "Guess Character Game", "Guess Song Game"];

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

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  const items = Array(5).fill(null);

  return (
    <div className="w-full overflow-x-auto">
      <div ref={scrollRef} className="flex w-max whitespace-nowrap w-full overflow-x-scroll scrollbar-hide">
      {games.map((gms, i) => (
        <div
            key={i}
            className="mx-2 cursor-pointer flex flex-col items-center"
            onClick={() => {
              setSelectedGame(gms);
              setCurrentPage('game');
            }}>
            <Carousel />
            <p className="text-black text-center w-full break-words">{gms}</p>
        </div>
      ))}  
      </div>
          {/* {[...items, ...items].map((_, i) => ())} */}
      </div>
  );
}
