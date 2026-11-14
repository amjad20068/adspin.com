"use client";

import React, { useState, useEffect } from "react";
import { Grid, Eye, EyeOff } from "lucide-react";

export const DesignGridOverlay: React.FC = () => {
  const [showGrid, setShowGrid] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      {/* Floating Toggle Pill (bottom-left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setShowGrid(!showGrid)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono tracking-wider uppercase border transition-all duration-300 shadow-sm ${
            showGrid
              ? "bg-brand-red text-white border-brand-red shadow-md"
              : "bg-white/90 backdrop-blur-md text-brand-black border-brand-gray-300 hover:border-brand-red hover:text-brand-red"
          }`}
          title="Toggle Swiss Typographic Design Grid"
        >
          <Grid className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Design Grid:</span>
          <span className="font-bold">{showGrid ? "ON" : "OFF"}</span>
        </button>
      </div>

      {/* Grid Overlay */}
      {showGrid && (
        <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
          {/* Viewport Meta Tag */}
          <div className="absolute top-20 right-6 bg-brand-black/90 text-white text-[10px] font-mono px-3 py-1.5 rounded border border-brand-red/50 shadow-md">
            VIEWPORT: {dimensions.width}px × {dimensions.height}px • 12-COL SWISS SYSTEM • BASELINE: 8PX
          </div>

          {/* 12 Columns */}
          <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4 sm:gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-full bg-brand-red/[0.035] border-x border-brand-red/15 relative flex flex-col justify-between p-1"
              >
                <span className="text-[9px] font-mono text-brand-red/60">COL_{i + 1}</span>
                <span className="text-[9px] font-mono text-brand-red/60 text-right">#{i + 1}</span>
              </div>
            ))}
          </div>

          {/* Horizontal Baseline Guides */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(to bottom, #D54F56 1px, transparent 1px)",
              backgroundSize: "100% 32px",
            }}
          />
        </div>
      )}
    </>
  );
};

