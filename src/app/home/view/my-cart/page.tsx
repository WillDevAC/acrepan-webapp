"use client";

import { useEffect, useState } from "react";
import { Header } from "@/app/components/Header";
import { Minus, Plus } from "lucide-react";
import { FinishOrderFooter } from "@/app/components/FinishOrder";

import Cookies from "js-cookie";

export default function CartPage() {
  const storedCart = JSON.parse(Cookies.get("cart") || "[]");
  const [cartItems, setCartItems] = useState(storedCart);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((acc: any, item: any) => {
      return acc + item.total;
    }, 0);
    setCartTotal(total);
  }, [cartItems]);

  const handleIncrement = (index: any) => {
    const updatedCart = [...cartItems];
    const { type, quantity } = updatedCart[index];

    if (type === "varejo" && quantity >= 10) {
      return;
    }

    updatedCart[index].quantity += 1;
    updatedCart[index].total =
      updatedCart[index].price * updatedCart[index].quantity;
    setCartItems(updatedCart);
    updateCookies(updatedCart);
  };

  const handleDecrement = (index: any) => {
    const updatedCart = [...cartItems];
    const { type, quantity } = updatedCart[index];

    if (
      (type === "varejo" && quantity === 1) ||
      (type === "atacado" && quantity === 10)
    ) {
      updatedCart.splice(index, 1);
    } else if (quantity > 0) {
      updatedCart[index].quantity -= 1;
      updatedCart[index].total =
        updatedCart[index].price * updatedCart[index].quantity;
    }

    setCartItems(updatedCart);
    updateCookies(updatedCart);
  };

  const updateCookies = (cartData: any) => {
    Cookies.set("cart", JSON.stringify(cartData));
  };

  return (
    <>
      <Header type="back" isText="Sacola de compras" isBackUrl="/home/all" />
      <section className="flex flex-col w-full pr-5 gap-5 pl-5" id="itensCart">
        {cartItems.length <= 0 && (
          <span className="text-md text-gray-500 pt-3">
            Não há produtos na sua sacola.
          </span>
        )}
        {cartItems.map((item: any, index: any) => (
          <div
            key={item.id}
            className="flex items-center gap-5 bg-white h-28 p-4 rounded relative"
          >
            <div className="h-full w-20">
              <img
                src={item.image}
                alt="Product Image"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-between h-full w-full">
              <section className="flex flex-col">
                <h1 className="font-bold">{item.name}</h1>
                <p className="text-sm">R$ {item.price.toFixed(2)}</p>
              </section>
              <div className="flex items-center gap-5">
                <section id="remove" onClick={() => handleDecrement(index)}>
                  <Minus />
                </section>
                <p id="quantity" className="text-[#EAA85C]">
                  {item.quantity}
                </p>
                <section className="add" onClick={() => handleIncrement(index)}>
                  <Plus />
                </section>
              </div>
            </div>
            {item.type === "atacado" && (
              <div className="absolute flex items-center justify-center top-0 right-0 p-1 font-medium bg-green-50 text-green-600 w-24">
                ATACADO
              </div>
            )}
            {item.type === "varejo" && (
              <div className="absolute flex items-center justify-center top-0 right-0 p-1 font-medium w-24 bg-orange-50 text-orange-500">
                VAREJO
              </div>
            )}
          </div>
        ))}
      </section>
      <FinishOrderFooter total={cartTotal} />
    </>
  );
}
