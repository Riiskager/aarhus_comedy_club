import { useState, useEffect, useRef } from "react";
import "../css/karrusel.css";

export default function ForsideKarrusel({
  images = [],
  autoPlay = true,
  // default interval reduced from 30s to 8s for snappier carousel
  autoPlayInterval = 4000,
}) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Autoplay
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const id = setInterval(() => {
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, autoPlayInterval);

    return () => clearInterval(id);
  }, [autoPlay, autoPlayInterval, images.length]);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  // Swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const dx = touchStartX.current - touchEndX.current;
    if (dx > 40) next();
    if (dx < -40) prev();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const titles = {
    "sokkedyr-slider": "Velkommen",
    program: "Program",
    komikere: "Komikere",
    gavekort: "Gavekort",
    "om-os": "Om os",
    booking: "Booking",
    kontakt: "Kontakt",
  };

  const buttons = {
    "sokkedyr-slider": { label: "Se event", href: "" },
    sokkedyr3000: { label: "Se event", href: "/events" },
    program: { label: "Se event", href: "/events" },
    komikere: { label: "Se komikere", href: "/komikerliste" },
    gavekort: { label: "Køb gavekort", href: "/gavekort" },
    "om-os": { label: "Læs om os", href: "/historie" },
    booking: { label: "Book os", href: "/booking" },
    kontakt: { label: "Kontakt os", href: "/Kontakt" },
  };

  const filename = images[index]?.split("/").pop().split(".")[0];
  const title = titles[filename] || "";
  const button = buttons[filename] || { label: "Se events", href: "/events" };

  const handleBannerClick = (e) => {
    // If this is the sokkedyr slide, scroll to the first event on the page
    if (filename === "sokkedyr-slider") {
      e.preventDefault();
      const el = document.getElementById("first-event");
      if (el) {
        const offset = 20; // pixels to offset from top
        const top =
          el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    // otherwise let the anchor behave normally
  };

  return (
    <div
      className="karrusel"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="karrusel-track">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={i === index ? "karrusel-slide active" : "karrusel-slide"}
            style={{ display: i === index ? "block" : "none" }}
          />
        ))}
      </div>

      <div className="banner">
        <h1>{title}</h1>
        <a
          href={button.href}
          className="banner-knap"
          onClick={handleBannerClick}
        >
          <b>{button.label}</b>
        </a>
      </div>

      <button className="karrusel-arrow left" onClick={prev}>
        ‹
      </button>

      <button className="karrusel-arrow right" onClick={next}>
        ›
      </button>
    </div>
  );
}
