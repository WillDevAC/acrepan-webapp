"use client";

import { Archive, BadgePercent, Home, User } from "lucide-react";

import Link from "next/link";

export function Menu() {
  return (
    <>
      <div className="fixed bottom-0 border border-t-zinc-700 border-b-black border-r-black border-l-black w-full h-auto py-3 flex items-center justify-between px-5">
        <Link className="flex flex-col gap-1 items-center justify-center" href='#'>
          <Home size={20}/>
          <p className="text-sm">Home</p>
        </Link>
        <Link className="flex flex-col gap-1 items-center justify-center" href='#'>
          <Archive size={20}/>
          <p className="text-sm">Pedidos</p>
        </Link>
        <Link className="flex flex-col gap-1 items-center justify-center" href='#'>
          <BadgePercent size={20}/>
          <p className="text-sm">Clube</p>
        </Link>
        <Link className="flex flex-col gap-1 items-center justify-center" href='#'>
          <User size={20}/>
          <p className="text-sm">Perfil</p>
        </Link>
      </div>
    </>
  );
}
