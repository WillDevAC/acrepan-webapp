import api from "@/services/api";

import { Info } from "./Info";

import { ProductList } from "@/types/product";
import { GetCakes } from "../Get/GetCakes";

export async function Cakes() {
  const response = await api.get("/product", {
    params: {
      search: 'Bolos',
    },
  });

  const products: ProductList = response.data;

  return (
    <>
      <section className="pt-10 pb-5">
        <Info title="Bolos" redirect="#" />
      </section>
      <GetCakes products={products.products} count={products.count} />
    </>
  );
}
