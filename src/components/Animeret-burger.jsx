import { useEffect } from "react";

export default function AnimeretBurger() {
  useEffect(() => {
    // Original script logic (kept intact) — runs after component mounts
    const navLinks = document.querySelector(".nav-links");

    const navSlide = () => {
      const burger = document.querySelector(".burger");
      const nav = document.querySelector(".nav-links");
      const burgerDivs = document.querySelectorAll(".burger div");

      if (!burger) return;

      burger.addEventListener("click", () => {
        // Toggle navigationsbaren
        nav.classList.toggle("nav-active");

        // Burger animation
        burger.classList.toggle("toggle");

        // Angiv transition til hvert div inde i burgeren
        burgerDivs.forEach((div) => {
          div.style.transition = "all 0.6s ease";
        });
      });
    };

    navSlide(); // Husk at kalde funktionen

    // Funktion til at vise nav links og deaktivere body og html scroll
    function showNavLinks() {
      if (!navLinks) return;
      navLinks.style.transform = "translateX(0)";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Add this line
    }

    // Fukytion til at skjule nav links og aktivere body og html scroll
    function hideNavLinks() {
      if (!navLinks) return;
      navLinks.style.transform = "translateX(100%)";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    var burgerMenu = document.querySelector(".burger");
    var burgerImage = document.querySelector("#burger-menu-image");

    if (burgerMenu && burgerImage) {
      const onClick = function () {
        burgerImage.classList.toggle("hidden");
      };
      burgerMenu.addEventListener("click", onClick);

      // cleanup
      return () => {
        burgerMenu.removeEventListener("click", onClick);
      };
    }
  }, []);

  return (
    <>
      <button className="burger" aria-label="Åben navigation">
        <div></div>
        <div></div>
        <div></div>
      </button>

      <nav className="nav-links" aria-hidden="true">
        <ul>
          <li>
            <a href="#">Forside</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
        </ul>
      </nav>

      <img id="burger-menu-image" src="/img/home.svg" alt="burger" />
    </>
  );
}
