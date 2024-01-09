"use client";

import { useState } from "react";
import { Header } from "@/app/components/Header";
import { Minus, Plus } from "lucide-react";
import { FinishOrderFooter } from "@/app/components/FinishOrderFooter";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Titulo do produto 1", price: 10.0, quantity: 0 },
    { id: 2, title: "Titulo do produto 2", price: 15.0, quantity: 0 },
  ]);

  const handleIncrement = (index: any) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
  };

  const handleDecrement = (index: any) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 0) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
    }
  };

  return (
    <>
      <Header type="back" isText="Sacola de compras" />
      <section className="flex flex-col w-full pr-5 gap-5 pl-5" id="itensCart">
        {cartItems.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center gap-5 bg-white h-28 p-4 rounded"
          >
            <div className="h-full w-16">
              <img
                src="/pao.png"
                alt="Product Image"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-between h-full w-full">
              <section className="flex flex-col">
                <h1 className="font-bold">{item.title}</h1>
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
          </div>
        ))}
      </section>
      <FinishOrderFooter />
    </>
  );
}
