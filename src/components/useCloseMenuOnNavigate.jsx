import { useEffect } from "react";
import { useLocation } from "react-router";

export default function useCloseMenuOnNavigate(setMenuOpen) {
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, setMenuOpen]);
}
