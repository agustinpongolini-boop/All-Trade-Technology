"use client";

import { useState, useEffect } from "react";

export default function BlogArticleClient() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-[72px] left-0 h-[3px] bg-accent z-50 transition-[width] duration-100"
      style={{ width: `${progress}%` }}
    />
  );
}
