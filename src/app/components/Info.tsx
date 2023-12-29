"use client";

import Link from "next/link";

interface infoProps {
  title: string;
  redirect: string;
}

export function Info({ title, redirect }: infoProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <p className="text-xl font-bold">{title}</p>
    </div>
  );
}
