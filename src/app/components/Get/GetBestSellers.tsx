"use client";

import { ProductList } from "@/types/product";
import { CardProduct } from "../Cards/CardProduct";

export function GetBestSellers({ products, count }: ProductList) {
  return (
    <>
      <div className="flex gap-2 w-full overflow-x-auto no-scrollbar">
        {products.length <= 0 && <span>Não há produtos em destaque.</span>}
        {products.map((product) => (
          <>
            <CardProduct
              typeBadge="bestseller"
              key={product.id}
              id={product.id}
              name={product.title}
              priceAtacado={product.priceAtacado}
              priceVarejo={product.priceVarejo}
              image={product.img.url}
            />
          </>
        ))}
      </div>
    </>
  );
}
