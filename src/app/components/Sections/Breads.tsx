import api from "@/services/api";

import { Info } from "./Info";

import { GetBreads } from "../Get/GetBreads";
import { ProductList } from "@/types/product";

export async function Breads() {
  const response = await api.get("/product", {
    params: {
      search: 'Pães',
    },
  });

  const products: ProductList = response.data;

  return (
    <>
      <section className="pt-10 pb-5">
        <Info title="Pães" redirect="#" />
      </section>
      <GetBreads products={products.products} count={products.count} />
    </>
  );
}
