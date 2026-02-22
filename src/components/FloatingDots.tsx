import { useEffect, useRef } from "react";

const FloatingDots = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createDot = () => {
      const dot = document.createElement("div");
      dot.className = "floating-dot";
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.animationDuration = `${8 + Math.random() * 12}s`;
      dot.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(dot);

      setTimeout(() => {
        dot.remove();
      }, 20000);
    };

    // Create initial dots
    for (let i = 0; i < 30; i++) {
      createDot();
    }

    const interval = setInterval(createDot, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    />
  );
};

export default FloatingDots;
