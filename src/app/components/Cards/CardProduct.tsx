"use client";

import { formatPrice } from "@/utils/functions";
import { Flame, Star } from "lucide-react";

import Link from "next/link";

interface ICardProps {
  id: string;
  name: string;
  image: string;
  priceAtacado: number;
  priceVarejo: number;
  typeBadge: "default" | "highlighted" | "bestseller";
}

export function CardProduct({
  typeBadge = "default",
  id,
  name,
  priceAtacado,
  image,
  priceVarejo,
}: ICardProps) {
  return (
    <Link
      href={{
        pathname: `/home/view/product`,
        query: { id, name, image, priceAtacado, priceVarejo },
      }}
      className="flex flex-col bg-white shadow-sm min-w-64 max-w-5min-w-64 rounded h-auto"
    >
      <div className="flex items-center justify-center h-44 w-full relative">
        <img
          src={image}
          className="object-contain w-full h-full p-5 mt-20 bg-white"
        />
        {typeBadge === "highlighted" && (
          <div className="absolute flex items-center gap-1 rounded justify-center top-0 left-0 m-3 p-2 w-36 bg-green-50 text-green-500 font-medium">
            <Star size={20} /> Em destaque
          </div>
        )}
        {typeBadge === "bestseller" && (
          <div className="absolute flex items-center gap-1 rounded justify-center top-0 left-0 m-3 p-2 w-36 bg-orange-50 text-orange-500 font-medium">
            <Flame size={20} /> Mais vendido
          </div>
        )}
      </div>
      <div className="flex pt-10 pl-5">
        <h1 className="text-black font-bold text-xxl">{name}</h1>
      </div>
      <div className="flex flex-col pt-5 pb-3 pl-5">
        <span className="text-gray-400 text-sm">Preço / unidade</span>
        <h2 className="text-xl text-[#EAA85C] font-medium">{formatPrice(priceVarejo.toString())}</h2>
      </div>
    </Link>
  );
}
