import { useEffect, useRef, useState } from "react";

export function useStuck() {
  const sentinelRef = useRef(null);
  const [isStuck, setIsStuck] = useState(false);
  useEffect(() => {
    const element = sentinelRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return { sentinelRef, isStuck };
}
