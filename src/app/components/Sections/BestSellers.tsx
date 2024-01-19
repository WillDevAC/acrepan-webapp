import { ProductList } from "@/types/product";
import { GetBestSellers } from "../Get/GetBestSellers";

import { Info } from "./Info";
import api from "@/services/api";

export async function BestSellers() {
  const response = await api.get("/product", {
    params: {
      isBestSellers: false,
    },
  });

  const products: ProductList = response.data;

  return (
    <>
      <section className="pt-10 pb-5">
        <Info title="Mais vendidos" redirect="#" />
      </section>
      <GetBestSellers products={products.products} count={products.count} />
    </>
  );
}
