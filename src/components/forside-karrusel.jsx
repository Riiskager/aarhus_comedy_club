import { useState, useEffect, useRef } from "react";
import "../css/karrusel.css";

export default function ForsideKarrusel({
  images = [],
  autoPlay = true,
  autoPlayInterval = 8000,
}) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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
  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  }

  function onTouchEnd() {
    if (touchStartX.current == null || touchEndX.current == null) return;

    const dx = touchStartX.current - touchEndX.current;
    const threshold = 40;

    if (dx > threshold) next();
    else if (dx < -threshold) prev();

    touchStartX.current = null;
    touchEndX.current = null;
  }

  function onKeyDown(e) {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }

  return (
    <div
      className="karrusel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
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

      <button
        className="karrusel-arrow left"
        onClick={prev}
        aria-label="Forrige"
      >
        ‹
      </button>

      <button
        className="karrusel-arrow right"
        onClick={next}
        aria-label="Næste"
      >
        ›
      </button>
    </div>
  );
}