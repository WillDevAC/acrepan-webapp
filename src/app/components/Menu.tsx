"use client";

import { Archive, BadgePercent, Home, LogOut, User } from "lucide-react";

import Link from "next/link";

export function Menu() {
  return (
    <>
      <div className="fixed bg-white bottom-0 border  w-full h-auto py-3 flex items-center justify-between px-5">
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
          <LogOut size={20}/>
          <p className="text-sm">Sair</p>
        </Link>
      </div>
    </>
  );
}
