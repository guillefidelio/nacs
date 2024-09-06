"use client";

import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import Image from 'next/image';
import { ShineBorder } from '../magicui/shine-border';

export default function VideoHome() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const onReady = (event: { target: { pauseVideo: () => void; }; }) => {
    event.target.pauseVideo();
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative flex items-center justify-center overflow-visible py-8 -mt-14">
      {/* Split background */}
      <div className="absolute inset-0 flex flex-col">
        <div className="h-1/2 bg-[#0E0B7C] rounded-b-[70px] relative overflow-hidden shadow-[0_15px_30px_-15px_rgba(0,0,0,0.3)]">
          <Image
            src="/bottomright.png"
            alt="Bottom Right Decoration"
            width={400}
            height={400}
            className="absolute right-0 bottom-0 opacity-100 md:w-[400px] md:h-[400px] w-[200px] h-[200px]"
          />
        </div>
        <div className="h-1/2 bg-white"></div>
      </div>

      {/* Video player container */}
      <ShineBorder className={`relative z-10 ${isMobile ? 'w-11/12' : 'w-3/5'} max-w-4xl aspect-video bg-black rounded-lg shadow-2xl overflow-hidden`}>
        <YouTube
          videoId="TA0-TVjFNNg"
          opts={{
            height: '100%',
            width: '100%',
            playerVars: {
              autoplay: isPlaying ? 1 : 0,
              controls: 0,
              modestbranding: 1,
              rel: 0,
            },
          }}
          onReady={onReady}
          className="absolute inset-0"
        />

        {/* Play button overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="bg-white bg-opacity-80 rounded-full p-3 transition-transform transform hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-[#0E0B7C]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
      </ShineBorder>
    </section>
  );
}