import { useState, useRef, useEffect } from "react";
import style from "../../styles/carousel.module.css";
import image1 from "../../assets/chris1.webp";
import image2 from "../../assets/chris2.jpg";
import image3 from "../../assets/fabio.jpg";

export function Carousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number>();
  const images = [image1, image2, image3];
  const delay = 3000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div>
      <div className={style.header}>Starte jetzt!</div>
      <div className={style.slideshow}>
        <div
          className={style.slideshowSlider}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((src, idx) => (
            <div className={style.slide} key={idx}>
              <img src={src} alt={`Slide ${idx}`} className={style.image} />
            </div>
          ))}
        </div>

        <div className={style.slideshowDots}>
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`${style.slideshowDot} ${
                index === idx ? style.active : ""
              }`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
