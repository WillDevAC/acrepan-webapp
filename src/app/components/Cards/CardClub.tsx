"use client";

import { formatPrice } from "@/utils/functions";

interface ICardClubProps {
  id: string;
  discont: number;
  price: number;
  isSelected: boolean;
  onClick: Function;
  title: string;
}

export function CardClub({
  id,
  isSelected,
  onClick,
  title,
  discont,
  price,
}: ICardClubProps) {
  return (
    <div
      className={`bg-gray-200 p-4 rounded-md cursor-pointer w-full ${
        isSelected ? "border-2 border-[#EAA85C]" : ""
      }`}
      onClick={() => onClick(id)}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-md font-bold">{title}</h2>
        <span>{formatPrice(price.toString())}</span>
      </div>
      <div className="flex flex-col pt-3">
        <span className="text-xs font-bold">Assinatura mensal</span>
        <span className="text-xs">{discont}% de desconto em toda compra.</span>
      </div>
    </div>
  );
}
