"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // A simple matchMedia to avoid custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Hover effect for links and buttons
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        gsap.to(cursor, { scale: 1.5, opacity: 0.5, duration: 0.3 });
        gsap.to(follower, { scale: 1.5, borderColor: "var(--color-sage-500)", duration: 0.3 });
      } else {
        gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
        gsap.to(follower, { scale: 1, borderColor: "var(--color-sage-300)", duration: 0.3 });
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-sage-600 rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-sage-300 rounded-full pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-colors duration-300"
      />
    </>
  );
}
