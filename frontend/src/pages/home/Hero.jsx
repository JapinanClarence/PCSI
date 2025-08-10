import React, {useState, useRef, useEffect} from "react";
import {images} from "@/constants/images";

const heroImages = [
  images.beatle_1,
  images.beatle_2,
  images.beatle_3,
  images.beatle_4,
  images.beatle_5,
  images.beatle_6,
  images.beatle_7,
]

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [zoomKeys, setZoomKeys] = useState([0, 1]); // [current, next]
  const timeoutRef = useRef();

  const nextImageIndex = (currentImageIndex + 1) % heroImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade and zoom for next image at the same time
      setIsFading(true);
      setZoomKeys(([, next]) => [next, next + 1]); // restart zoom for next image
      timeoutRef.current = setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setZoomKeys(([, next]) => [next, next + 1]); // shift keys
        setIsFading(false);
      }, 1000); // 1s fade duration
    }, 4000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return (
     <section className="relative h-[calc(100vh-200px)] w-full overflow-hidden">
      {/* Double-layer crossfade background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Current image (zooming in) */}
        <div
          key={zoomKeys[0]}
          className={`absolute inset-0 hero-bg transition-opacity duration-1000 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${heroImages[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 2,
            transition: "opacity 1s ease",
            animation: "zoomInHero 4s linear forwards",
          }}
        />
        {/* Next image (fades in, zooms in at the same time) */}
        <div
          key={zoomKeys[1]}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isFading ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${heroImages[nextImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
            transition: "opacity 1s ease",
            animation: "zoomInHero 4s linear forwards",
          }}
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

    </section>
  );
}

export default Hero;
