import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

//Lavet så den scroller til toppen når man går ind på links

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
