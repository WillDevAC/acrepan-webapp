"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { formatPrice } from "@/utils/functions";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

import { toast } from "sonner";
import Swal from "sweetalert2";

interface IAddCartProps {
  name: string;
  selectedItem: string;
  idProduct: string;
  price: string;
  image: string;
  observations: string;
}

export function AddCart({
  selectedItem,
  price,
  idProduct,
  name,
  image,
  observations,
}: IAddCartProps) {
  const [quantityAtacado, setQuantityAtacado] = useState(10);
  const [quantityVarejo, setQuantityVarejo] = useState(1);

  const router = useRouter();

  const incrementQuantity = (type: string) => {
    if (type === "atacado") {
      setQuantityAtacado((prevQuantity) => prevQuantity + 1);
    } else if (type === "varejo" && quantityVarejo < 10) {
      setQuantityVarejo((prevQuantity) => prevQuantity + 1);
    }
  };

  const decrementQuantity = (type: string) => {
    if (type === "atacado" && quantityAtacado > 10) {
      setQuantityAtacado((prevQuantity) => prevQuantity - 1);
    } else if (type === "varejo" && quantityVarejo > 1) {
      setQuantityVarejo((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCart = () => {
    const newCartItem = {
      id: idProduct,
      name: name,
      image: image,
      type: selectedItem,
      observations: observations,
      price: parseFloat(price),
      quantity: selectedItem === "atacado" ? quantityAtacado : quantityVarejo,
      total:
        selectedItem === "atacado"
          ? parseFloat(price) * quantityAtacado
          : parseFloat(price) * quantityVarejo,
    };

    const existingCartItems = JSON.parse(Cookies.get("cart") || "[]");

    const existingItemIndex = existingCartItems.findIndex(
      (item: any) => item.id === idProduct && item.type === selectedItem
    );

    if (existingItemIndex !== -1) {
      const existingItem = existingCartItems[existingItemIndex];

      if (
        selectedItem === "varejo" &&
        existingItem.quantity + newCartItem.quantity > 10
      ) {
        toast.error("Limite de 10 itens atingido no varejo.");
        return;
      }

      existingItem.quantity += newCartItem.quantity;
      existingItem.total += newCartItem.total;
    } else {
      if (selectedItem === "varejo" && newCartItem.quantity > 10) {
        toast.error("Limite de 10 itens atingido no varejo.");
        return;
      }

      existingCartItems.push(newCartItem);
    }

    Cookies.set("cart", JSON.stringify(existingCartItems));
    Swal.fire({
      title: "Produto adicionado!",
      confirmButtonColor: "#EAA85C",
      confirmButtonText: "Ok, continuar!",
      inputAutoFocus: false,
      icon: "success",
    });
    router.replace("/home/view/my-cart");
  };

  return (
    <div className="absolute bottom-0 border w-full h-16 flex items-center justify-between pr-5 pl-5">
      {selectedItem === "atacado" && (
        <>
          <div className="flex items-center gap-5">
            <section id="remove" onClick={() => decrementQuantity("atacado")}>
              <Minus />
            </section>
            <p id="quantity" className="text-[#EAA85C]">
              {quantityAtacado}
            </p>
            <section
              className="add"
              onClick={() => incrementQuantity("atacado")}
            >
              <Plus />
            </section>
          </div>
          <span>
            {formatPrice((parseFloat(price) * quantityAtacado).toFixed(2))}
          </span>
        </>
      )}

      {selectedItem === "varejo" && (
        <>
          <div className="flex items-center gap-5">
            <section id="remove" onClick={() => decrementQuantity("varejo")}>
              <Minus />
            </section>
            <p id="quantity" className="text-[#EAA85C]">
              {quantityVarejo}
            </p>
            <section
              className="add"
              onClick={() => incrementQuantity("varejo")}
            >
              <Plus />
            </section>
          </div>
          <span>
            {formatPrice((parseFloat(price) * quantityVarejo).toFixed(2))}
          </span>
        </>
      )}
      <button
        className="bg-[#EAA85C] p-2 text-black font-medium w-28 rounded"
        onClick={addToCart}
      >
        Adicionar
      </button>
    </div>
  );
}
