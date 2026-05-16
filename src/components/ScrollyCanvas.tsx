"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Preload images
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameCount = 120; // ezgif-frame-001.png to ezgif-frame-120.png

  useEffect(() => {
    const images: HTMLImageElement[] = [];
    
    // Initialize image objects but don't set src yet
    for (let i = 1; i <= frameCount; i++) {
      images.push(new Image());
    }
    imagesRef.current = images;

    // Load the very first frame immediately
    const firstImg = images[0];
    firstImg.src = `/sequence/ezgif-frame-001.png`;
    firstImg.onload = () => {
      renderFrame(0);
      
      // Load all other frames concurrently but staggered so we don't freeze the browser
      for (let i = 1; i < frameCount; i++) {
        setTimeout(() => {
          const img = images[i];
          const num = (i + 1).toString().padStart(3, "0");
          img.src = `/sequence/ezgif-frame-${num}.png`;
          img.decoding = "async";
          
          // Whenever an image finishes loading, if the user is currently 
          // resting on this frame but it was blurry/fallback, re-render it
          img.onload = () => {
             // We can optionally trigger a re-render here if needed, 
             // but motion value event handles scroll changes.
          };
        }, i * 10); // Stagger network requests slightly
      }
    };
  }, []);

  const renderFrame = (index: number) => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let validIndex = index;
    // Fallback: If the exact frame hasn't downloaded yet, find the closest loaded frame!
    if (!imagesRef.current[validIndex] || !imagesRef.current[validIndex].complete) {
      let found = false;
      for (let i = 1; i < frameCount; i++) {
         if (validIndex - i >= 0 && imagesRef.current[validIndex - i]?.complete) {
            validIndex = validIndex - i;
            found = true; break;
         }
         if (validIndex + i < frameCount && imagesRef.current[validIndex + i]?.complete) {
            validIndex = validIndex + i;
            found = true; break;
         }
      }
      if (!found) return; // Nothing is loaded yet
    }

    const img = imagesRef.current[validIndex];

    // Handle object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      // Canvas is taller than image
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    // Set a very subtle dark tint over the image to make text more readable
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    
    // Add dark overlay
    ctx.fillStyle = "rgba(18, 18, 18, 0.4)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderFrame(Math.floor(latest));
  });

  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      // Set canvas to exact viewport dimensions for high DPI
      const pixelRatio = window.devicePixelRatio || 1;
      canvasRef.current.width = window.innerWidth * pixelRatio;
      canvasRef.current.height = window.innerHeight * pixelRatio;
      
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) ctx.scale(pixelRatio, pixelRatio);
      
      renderFrame(Math.floor(frameIndex.get()));
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial sizing

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="home" ref={containerRef} className="relative h-[500vh]" style={{ position: "relative" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        {/* Scale the canvas slightly to push the watermark out of bounds */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full scale-[1.08] origin-center" style={{ width: '100%', height: '100%' }} />
        
        {/* Blurred dark patch over the bottom right to completely hide any remaining watermark text */}
        <div className="absolute -bottom-4 -right-4 w-64 h-24 bg-[#121212] blur-[20px] z-10"></div>
        
        <Overlay containerRef={containerRef} />
      </div>
    </div>
  );
}
