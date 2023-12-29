"use client";

import React from "react";

interface ChipProps {
  label: string;
}

export function Chip({ label }: ChipProps) {

  const active = false;

  return (
    <div
      className={`cursor-pointer border-[#e4e4e4] inline-block px-4 py-2 rounded font-semibold ${
        active
          ? "bg-[#EAA85C] text-black font-semibold"
          : "bg-[#ece8f0] text-black"
      }`}
    >
      {label}
    </div>
  );
}
