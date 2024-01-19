"use client";

import Link from "next/link";
import React from "react";

interface ChipProps {
  active?: boolean;
  label: string;
  redirect: string;
}

export function Chip({ label, active, redirect = "" }: ChipProps) {
  return (
    <Link
      href={redirect}
      className={`cursor-pointer border-[#e4e4e4] inline-block px-4 py-2 rounded font-semibold ${
        active
          ? "bg-[#EAA85C] text-black font-semibold"
          : "bg-[#ece8f0] text-black"
      }`}
    >
      {label}
    </Link>
  );
}
