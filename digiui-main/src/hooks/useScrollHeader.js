import { useEffect, useState } from "react";

export const useScrollHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);
      setIsHidden(y > lastY && y > 80);
      setLastY(y);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return { isScrolled, isHidden };
};
