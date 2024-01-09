"use client";

import { Archive, BadgePercent, Home, ShoppingCart } from "lucide-react";

import Link from "next/link";

export function Menu() {
  return (
    <>
      <div className="fixed bg-white bottom-0 border w-full h-auto py-3 flex items-center justify-between px-5">
        <Link
          className="flex flex-col gap-1 items-center justify-center"
          href="/home/all"
        >
          <Home size={20} />
          <p className="text-sm">Home</p>
        </Link>
        <Link
          className="flex flex-col gap-1 items-center justify-center"
          href="/home/orders"
        >
          <Archive size={20} />
          <p className="text-sm">Pedidos</p>
        </Link>
        <Link
          className="flex flex-col gap-1 items-center justify-center"
          href="/home/club"
        >
          <BadgePercent size={20} />
          <p className="text-sm">Clube</p>
        </Link>
        <Link
          className="flex flex-col gap-1 items-center justify-center"
          href="/home/view/cart"
        >
          <ShoppingCart size={20} />
          <p className="text-sm">Carrinho</p>
        </Link>
      </div>
    </>
  );
}
