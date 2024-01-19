"use client";

import { ProductList } from "@/types/product";
import { CardBread } from "../Cards/CardBread";

export function GetBreads({ products, count }: ProductList) {
  return (
    <>
      <div className="flex flex-col gap-2">
        {products.length <= 0 && (
          <span>Não há pães disponiveis.</span>
        )}
        {products.map((product) => (
          <CardBread
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
