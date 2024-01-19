"use client";

import { formatPrice } from "@/utils/functions";

import { toast } from "sonner";

interface IFinishOrderFooterProps {
  total: number;
}

export function FinishOrderFooter({ total }: IFinishOrderFooterProps) {
  const FinishOrder = () => {
    const cart_items = localStorage.getItem("cart") || "0";

    const cartObject = JSON.parse(cart_items);

    if (Object.keys(cartObject).length === 0) {
      toast.info("Seu carrinho está vázio.");
      return;
    }

    //fazer a compra.
  };

  return (
    <div className="fixed bottom-0 border w-full h-16 flex items-center justify-between pr-5 pl-5">
      <div className="flex items-center gap-2">
        <b>Total: </b>
        <p>{formatPrice(total.toString())}</p>
      </div>
      <button
        className="bg-red-600 p-2 text-white w-28 rounded"
        onClick={() => FinishOrder()}
      >
        Continuar
      </button>
    </div>
  );
}
