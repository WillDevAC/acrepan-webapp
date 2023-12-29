"use client";

import React from "react";

interface ChipProps {
  label: string;
}

export function Chip({ label }: ChipProps) {

  const active = false;

  return (
    <div
      className={`cursor-pointer inline-block px-4 py-2 rounded ${
        active
          ? "bg-[#EAA85C] text-black font-semibold"
          : "bg-[#303030] text-white"
      }`}
    >
      {label}
    </div>
  );
}
