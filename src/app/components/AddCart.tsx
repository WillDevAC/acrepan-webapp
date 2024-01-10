"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export function AddCartFooter() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="absolute bottom-0 border w-full h-16 flex items-center justify-between pr-5 pl-5">
      <div className="flex items-center gap-5">
        <section id="remove" onClick={handleDecrement}>
          <Minus />
        </section>
        <p id="quantity" className="text-[#EAA85C]">
          {quantity}
        </p>
        <section className="add" onClick={handleIncrement}>
          <Plus />
        </section>
      </div>
      <button className="bg-red-600 p-2 text-white w-28 rounded">
        Adicionar
      </button>
    </div>
  );
}
