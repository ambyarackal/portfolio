'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 160;

const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, '0');
  return `/images/frame_${paddedIndex}_delay-0.05s.png`;
};

interface ScrollyCanvasProps {
  children?: React.ReactNode;
}

export default function ScrollyCanvas({ children }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Framer Motion scroll tracking over the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload images
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setLoaded(true);
        }
      };
      imgArray.push(img);
    }
    setImages(imgArray);
  }, []);

  const renderFrame = (index: number) => {
    if (!images[index] || !canvasRef.current || !images[index].complete) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = images[index];

    // Responsive Canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

    // Add a dark semi-transparent overlay directly to the canvas so text is readable
    ctx.fillStyle = 'rgba(7, 9, 19, 0.6)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  // Initial draw and window resize
  useEffect(() => {
    if (loaded) {
      renderFrame(Math.round(frameIndex.get()));

      const handleResize = () => {
        renderFrame(Math.round(frameIndex.get()));
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [loaded]);

  // Update on scroll
  useMotionValueEvent(frameIndex, 'change', (latest) => {
    if (loaded) {
      requestAnimationFrame(() => renderFrame(Math.round(latest)));
    }
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#070913]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="block h-full w-full" />

        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#070913] text-white z-50">
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 rounded-full border-t-2 border-l-2 border-indigo-500 animate-spin"></div>
              <span className="text-xs uppercase tracking-[0.3em] font-light text-white/70">Loading Experience</span>
            </div>
          </div>
        )}

        {/* Parallax Overlay goes here */}
        {children}
      </div>
    </div>
  );
}
