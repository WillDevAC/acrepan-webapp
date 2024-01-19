"use client";

import { formatPrice } from "@/utils/functions";

import Link from "next/link";

interface ICardCakeProps {
  id: string;
  name: string;
  priceAtacado: number;
  priceVarejo: number;
  image: string;
}

export function CardCake({
  id,
  name,
  priceAtacado,
  priceVarejo,
  image,
}: ICardCakeProps) {
  return (
    <Link
      className="flex items-center justify-between gap-3 bg-white p-5 rounded-md"
      href={{
        pathname: `/home/view/product`,
        query: { id, name, image, priceAtacado, priceVarejo },
      }}
    >
      <section className="flex flex-col justify-between gap-2">
        <h1 className="font-bold text-md ">{name}</h1>
        <span className="text-sm text-gray-400">
          <b className="text-[#EAA85C]">{formatPrice(priceVarejo.toString())}</b>/unidade
        </span>
      </section>
      <section className="flex items-center justify-cente w-20 h-16">
        <img
          src={image}
          alt="Product Image"
          className="object-contain w-full h-full"
        />
      </section>
    </Link>
  );
}
