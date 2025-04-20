import React from 'react';
import { Donut, Store, Ellipsis, Info } from "lucide-react";

const MenuComponent = () => {
    return (
        <div className="relative h-2/12 md:hidden overflow-hidden z-100">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
          <pattern
            id="darkPinkTexture"
            patternUnits="userSpaceOnUse"
            width="100"
            height="100"
          >
            <rect
              width="100"
              height="100"
              fill="#d63384"
              filter="url(#noiseFilter)"
            />
          </pattern>
          <pattern
            id="lightPinkTexture"
            patternUnits="userSpaceOnUse"
            width="100"
            height="100"
          >
            <rect
              width="100"
              height="100"
              fill="#f783ac"
              filter="url(#noiseFilter)"
            />
          </pattern>
        </defs>
        {/* First wave */}
        <path
          fill="url(#darkPinkTexture)"
          fillOpacity="1"
          d="M0,0L48,10.7C96,21,192,43,288,37.3C384,32,480,0,576,0C672,0,768,32,864,58.7C960,85,1056,107,1152,90.7C1248,75,1344,21,1392,0L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        {/* Second wave */}
        <path
          fill="url(#lightPinkTexture)"
          fillOpacity="0.7"
          d="M0,30L48,45C96,60,192,90,288,85C384,80,480,50,576,50C672,50,768,80,864,105C960,130,1056,150,1152,135C1248,120,1344,60,1392,40L1440,30L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <div className="absolute bottom-1 left-0 w-full flex justify-around items-center">
        <div className="flex flex-col items-center">
          <Donut
            size={48}
            color="#ffffff"
            strokeWidth={3}
            absoluteStrokeWidth
          />
          <span className="text-white text-base font-bold">Donut</span>
        </div>
        <div className="flex flex-col items-center">
          <Store
            size={48}
            color="#ffffff"
            strokeWidth={3}
            absoluteStrokeWidth
          />
          <span className="text-white text-base font-bold">Store</span>
        </div>
        <div className="flex flex-col items-center">
          <Info size={48} color="#ffffff" strokeWidth={3} absoluteStrokeWidth />
          <span className="text-white text-base font-bold">Info</span>
        </div>
      </div>
    </div>
    );
};

export default MenuComponent;