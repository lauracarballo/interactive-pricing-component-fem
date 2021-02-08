import { useEffect, useState } from "react";

export default function useViewport() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 700) {
        setIsMobile(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return function cleanUp() {
      window.removeEventListener("resize", handleResize);
    };
  });

  return { isMobile };
}
