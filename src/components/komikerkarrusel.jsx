import { useState, useEffect, useRef } from "react";
import "../css/karrusel.css";

export default function Karrusel({
  images = [],
  autoPlay = true,
  autoPlayInterval = 4000,
}) {
  const [index, setIndex] = useState(0);
  const [isPaused, _setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Autoplay
  useEffect(() => {
    if (!autoPlay || images.length <= 1 || isPaused) return;

    const id = setInterval(() => {
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, autoPlayInterval);

    return () => clearInterval(id);
  }, [autoPlay, autoPlayInterval, images.length, isPaused]);

  if (!images || images.length === 0) {
    return <div className="karrusel karrusel-empty">Ingen billeder</div>;
  }

  function prev() {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  // Touch swipe handlers
  function _onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function _onTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  }

  function _onTouchEnd() {
    if (touchStartX.current == null || touchEndX.current == null) return;

    const dx = touchStartX.current - touchEndX.current;
    const threshold = 40;

    if (dx > threshold) next();
    else if (dx < -threshold) prev();

    touchStartX.current = null;
    touchEndX.current = null;
  }

  function _onKeyDown(e) {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }

  return (
    <div className="karrusel">
      <div className="karrusel-track">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className={i === index ? "karrusel-slide active" : "karrusel-slide"}
            style={{ display: i === index ? "block" : "none" }}
          />
        ))}
      </div>

      <div className="banner">
        <h1>Velkommen</h1>
        <p className="banner-tekst">
          Her ser du en liste af de komikere du kan forventer på Aarhus
          Comedyclub
        </p>
      </div>
    </div>
  );
  
}

