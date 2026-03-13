import { useState, useEffect, useRef } from "react";

export function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export function useCounter(target, inView) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const numericTarget = parseFloat(String(target).replace(/[^0-9.]/g, ""));
    const step = Math.max(1, Math.ceil(numericTarget / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= numericTarget) {
        setVal(numericTarget);
        clearInterval(timer);
      } else {
        setVal(current);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [inView, target]);

  return Math.floor(val);
}
