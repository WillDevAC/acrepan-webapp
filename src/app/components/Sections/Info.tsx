"use client";

interface infoProps {
  title: string;
  redirect: string;
}

export function Info({ title }: infoProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <p className="text-xl font-bold">{title}</p>
    </div>
  );
}
