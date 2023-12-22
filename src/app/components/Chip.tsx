"use client";

import React from "react";

interface ChipProps {
  label: string;
  onClick?: () => void;
  active: boolean;
}

export function Chip({ label, onClick, active }: ChipProps) {
  return (
    <div
      className={`cursor-pointer inline-block px-4 py-2 rounded ${
        active ? "bg-[#EAA85C] text-black font-semibold" : "bg-[#303030] text-white"
      }`}
      onClick={onClick}
      data-chip-id={label}
    >
      {label}
    </div>
  );
}
