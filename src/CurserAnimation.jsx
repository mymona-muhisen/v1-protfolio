import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const images = [
  "/thumbs/img-1.jpg",
  "/thumbs/img-2.jpg",
  "/thumbs/img-3.jpg",
  "/thumbs/img-4.jpg",
  "/thumbs/img-5.jpg"
];

export default function CursorAnimation() {
  const containerRef = useRef(null);
  const indexRef = useRef(0);

  const lastX = useRef(0);
  const lastY = useRef(0);
  const [distanceThreshold] = useState(window.innerWidth > 900 ? 90 : 150);

  const createTrail = (x, y) => {
    const img = document.createElement("img");
    img.className = "image";
    img.src = images[indexRef.current];
    indexRef.current = (indexRef.current + 1) % images.length;
    if (containerRef.current) {
      containerRef.current.appendChild(img);
    }
    gsap.set(img, { x, y, scale: 0, opacity: 0, rotation: gsap.utils.random(-20, 20) });

    gsap.to(img, { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" });
    gsap.to(img, { scale: 0.2, opacity: 0, duration: 1, ease: "power2.in", delay: 0.3, onComplete: () => { img.remove(); } });
  };


  useEffect(() => {
    const handleMouseMove = (e) => {
      const dx = e.clientX - lastX.current;
      const dy = e.clientY - lastY.current;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > distanceThreshold) {
        createTrail(e.clientX, e.clientY);
        lastX.current = e.clientX;
        lastY.current = e.clientY;
      }
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      const dx = touch.clientX - lastX.current;
      const dy = touch.clientY - lastY.current;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > distanceThreshold) {
        createTrail(touch.clientX, touch.clientY);
        lastX.current = touch.clientX;
        lastY.current = touch.clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [distanceThreshold]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="container" ref={containerRef}>
        <div className="cursur">
          <h4 className="cursur-text" onClick={scrollToProjects}>my projects</h4>
          <p className="cursur-hint">move your cursor around ✦ or tap here to jump down</p>
        </div>
        <div className="page-stars">
  <img src="/pink-star.svg" className="page-star ps1" alt="" />
  <img src="/purple-star.svg" className="page-star ps2" alt="" />
  <img src="/pink-star.svg" className="page-star ps3" alt="" />
</div>
      </section>
    </>
  );
}
