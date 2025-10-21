'use client';
import { useState } from 'react';
import { usePage } from './page-context';
import CarouselWrapper from './navigation-components/carousel-wrapper';
import Navbar from '../view/navigation-components/navbar';
import DrawingGame from './game-components/drawing-game';
import GuessSongGame from './game-components/guess-song';

export default function Game() {
  const { selectedGame } = usePage();

  const renderGame = () => {
    switch (selectedGame) {
      case 'Drawing Game':
        return <DrawingGame />;
      case 'Guess Song Game':
        return <GuessSongGame />;
      default:
        return <p className="text-center mt-10">Pilih game dari daftar!</p>;
    }
  };

  return(
    <div className="bg-[#F2F2F2]">
        <Navbar/>
        {renderGame()}
    </div>
  );
}
