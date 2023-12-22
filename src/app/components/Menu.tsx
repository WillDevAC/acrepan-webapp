"use client";

import { Archive, BadgePercent, Home, User } from "lucide-react";
import Link from "next/link";

export function Menu() {
  return (
    <>
      <div className="fixed bottom-0 border border-t-zinc-700 border-b-black border-r-black border-l-black w-full h-auto py-3 flex items-center justify-between px-5">
        <Link className="flex flex-col gap-1 items-center justify-center" href='#'>
          <Home />
          <p>Home</p>
        </Link>
        <Link className="flex flex-col gap-1 items-center justify-center" href='#'>
          <Archive />
          <p>Pedidos</p>
        </Link>
        <Link className="flex flex-col gap-1 items-center justify-center" href='#'>
          <BadgePercent />
          <p>Clube</p>
        </Link>
        <Link className="flex flex-col gap-1 items-center justify-center" href='#'>
          <User />
          <p>Perfil</p>
        </Link>
      </div>
    </>
  );
}