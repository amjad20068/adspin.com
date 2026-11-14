"use client";

import React, { useState, useEffect } from "react";

export const StudioClock: React.FC = () => {
  const [times, setTimes] = useState({
    london: "",
    dubai: "",
    calicut: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimes({
        london: now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        dubai: now.toLocaleTimeString("en-GB", {
          timeZone: "Asia/Dubai",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        calicut: now.toLocaleTimeString("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex items-center gap-6 text-[11px] font-mono text-brand-gray-500 uppercase tracking-wider">
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
        <span className="font-semibold text-brand-black">Studio Open</span>
      </div>
      <span>•</span>
      <div>
        <span className="text-brand-gray-400">LDN: </span>
        <span className="text-brand-black font-semibold">{times.london || "18:05"} GMT</span>
      </div>
      <div>
        <span className="text-brand-gray-400">DXB: </span>
        <span className="text-brand-black font-semibold">{times.dubai || "22:05"} GST</span>
      </div>
      <div>
        <span className="text-brand-gray-400">CCJ: </span>
        <span className="text-brand-black font-semibold">{times.calicut || "23:35"} IST</span>
      </div>
    </div>
  );
};

