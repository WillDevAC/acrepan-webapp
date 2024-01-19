"use client";

import { ProductList } from "@/types/product";
import { CardCake } from "../Cards/CardCake";

export function GetCakes({ products, count }: ProductList) {
  return (
    <>
      <div className="flex flex-col gap-2">
        {products.length <= 0 && (
          <span>Não há bolos disponiveis.</span>
        )}
        {products.map((product) => (
          <CardCake
            key={product.id}
            id={product.id}
            name={product.title}
            image={product.img.url}
            priceVarejo={product.priceVarejo}
            priceAtacado={product.priceAtacado}
          />
        ))}
      </div>
    </>
  );
}
