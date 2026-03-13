import { useEffect, useRef } from "react";

const BLOBS = [
  { color: "rgba(0,87,255,0.07)",   size: 640, x: 12,  y: 18  },
  { color: "rgba(124,58,237,0.06)", size: 520, x: 78,  y: 62  },
  { color: "rgba(245,158,11,0.05)", size: 460, x: 48,  y: 82  },
  { color: "rgba(5,150,105,0.05)",  size: 400, x: 22,  y: 68  },
  { color: "rgba(220,38,38,0.04)",  size: 370, x: 88,  y: 14  },
];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function AnimatedBackground() {
  const blobRefs = useRef([]);
  const timers = useRef([]);

  useEffect(() => {
    function move(el) {
      if (!el) return;
      el.style.left = `${rand(5, 90)}%`;
      el.style.top  = `${rand(5, 90)}%`;
    }

    blobRefs.current.forEach((el, i) => {
      const delay = i * 700;
      const t = setTimeout(() => {
        move(el);
        const iv = setInterval(() => move(el), rand(5000, 9500));
        timers.current.push(iv);
      }, delay);
      timers.current.push(t);
    });

    return () => timers.current.forEach((t) => { clearTimeout(t); clearInterval(t); });
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed", inset: 0, zIndex: 0,
        pointerEvents: "none", overflow: "hidden",
      }}
    >
      {BLOBS.map((b, i) => (
        <div
          key={i}
          ref={(el) => (blobRefs.current[i] = el)}
          style={{
            position: "absolute",
            width: b.size, height: b.size,
            borderRadius: "50%",
            background: b.color,
            filter: "blur(80px)",
            left: `${b.x}%`, top: `${b.y}%`,
            transform: "translate(-50%, -50%)",
            transition: `left ${rand(5, 8).toFixed(1)}s cubic-bezier(.4,0,.2,1), top ${rand(5, 8).toFixed(1)}s cubic-bezier(.4,0,.2,1)`,
            willChange: "left, top",
          }}
        />
      ))}

      {/* Subtle dot grid */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(148,163,184,.07) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
    </div>
  );
}
